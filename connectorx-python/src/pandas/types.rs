// Unfortunately, due to the orphan rule, typesystem implementation should be in this crate.
use chrono::{DateTime, Utc};
use connectorx::errors::{ConnectorAgentError, Result};
use connectorx::impl_typesystem;
use fehler::throws;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord)]
pub enum PandasTypeSystem {
    F64(bool),
    I64(bool),
    Bool(bool),
    Char(bool),
    Str(bool),
    BoxStr(bool),
    String(bool),
    Bytes(bool),
    DateTime(bool),
}

impl_typesystem! {
    system = PandasTypeSystem,
    mappings = {
        { F64 => f64 }
        { I64 => i64 }
        { Bool => bool }
        { Char => char }
        { Str => &'r str }
        { BoxStr => Box<str> }
        { String => String }
        { Bytes => Vec<u8> }
        { DateTime => DateTime<Utc> }
    }
}

pub trait PandasDType: Sized {
    fn dtype(&self) -> &'static str;
    // For initialize a numpy array when creating the pandas dataframe
    fn npdtype(&self) -> &'static str;
    fn parse(ty: &str) -> Result<Self>;
    fn is_extension(&self) -> bool;
    fn block_name(&self) -> &'static str;
}

impl PandasDType for PandasTypeSystem {
    fn dtype(&self) -> &'static str {
        match *self {
            PandasTypeSystem::I64(false) => "int64",
            PandasTypeSystem::I64(true) => "Int64",
            PandasTypeSystem::F64(_) => "float64",
            PandasTypeSystem::Bool(false) => "bool",
            PandasTypeSystem::Bool(true) => "boolean",
            PandasTypeSystem::Char(_) => "object",
            PandasTypeSystem::Str(_) => "object",
            PandasTypeSystem::BoxStr(_) => "object",
            PandasTypeSystem::String(_) => "object",
            PandasTypeSystem::Bytes(_) => "object",
            PandasTypeSystem::DateTime(_) => "datetime64[ns]",
        }
    }

    fn npdtype(&self) -> &'static str {
        match *self {
            PandasTypeSystem::I64(_) => "i8",
            PandasTypeSystem::F64(_) => "f8",
            PandasTypeSystem::Bool(_) => "b1",
            PandasTypeSystem::Char(_) => "O",
            PandasTypeSystem::Str(_) => "O",
            PandasTypeSystem::BoxStr(_) => "O",
            PandasTypeSystem::String(_) => "O",
            PandasTypeSystem::Bytes(_) => "O",
            PandasTypeSystem::DateTime(_) => "M8[ns]",
        }
    }

    #[throws(ConnectorAgentError)]
    fn parse(ty: &str) -> Self {
        match ty {
            "int64" => PandasTypeSystem::I64(false),
            "Int64" => PandasTypeSystem::I64(true),
            "float64" => PandasTypeSystem::F64(true),
            "bool" => PandasTypeSystem::Bool(false),
            "boolean" => PandasTypeSystem::Bool(true),
            "object" => PandasTypeSystem::String(true),
            "datetime" => PandasTypeSystem::DateTime(true),
            ty => unimplemented!("{}", ty),
        }
    }

    fn is_extension(&self) -> bool {
        match *self {
            PandasTypeSystem::I64(false) => false,
            PandasTypeSystem::I64(true) => true,
            PandasTypeSystem::F64(_) => false,
            PandasTypeSystem::Bool(false) => false,
            PandasTypeSystem::Bool(true) => true,
            PandasTypeSystem::Char(_) => false, // we use object instead of string (Extension) for now
            PandasTypeSystem::Str(_) => false, // we use object instead of string (Extension) for now
            PandasTypeSystem::BoxStr(_) => false, // we use object instead of string (Extension) for now
            PandasTypeSystem::String(_) => false, // we use object instead of string (Extension) for now
            PandasTypeSystem::Bytes(_) => false, // we use object instead of string (Extension) for now
            PandasTypeSystem::DateTime(_) => false,
        }
    }

    fn block_name(&self) -> &'static str {
        match *self {
            PandasTypeSystem::I64(false) => "IntBlock",
            PandasTypeSystem::I64(true) => "ExtensionBlock",
            PandasTypeSystem::F64(_) => "FloatBlock",
            PandasTypeSystem::Bool(false) => "BoolBlock",
            PandasTypeSystem::Bool(true) => "ExtensionBlock",
            PandasTypeSystem::Char(_) => "ObjectBlock", // we use object instead of string (Extension) for now
            PandasTypeSystem::Str(_) => "ObjectBlock", // we use object instead of string (Extension) for now
            PandasTypeSystem::BoxStr(_) => "ObjectBlock", // we use object instead of string (Extension) for now
            PandasTypeSystem::String(_) => "ObjectBlock", // we use object instead of string (Extension) for now
            PandasTypeSystem::Bytes(_) => "ObjectBlock", // we use object instead of string (Extension) for now
            PandasTypeSystem::DateTime(_) => "DatetimeBlock",
        }
    }
}
