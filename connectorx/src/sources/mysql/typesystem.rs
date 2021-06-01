use chrono::{DateTime, NaiveDate, NaiveDateTime, NaiveTime, Utc};
use mysql::consts::ColumnType;

use rust_decimal::Decimal;
use serde_json::Value;
use uuid::Uuid;

#[derive(Copy, Clone, Debug)]
pub enum MysqlTypeSystem {
    Double(bool),
    Long(bool),
}

impl_typesystem! {
    system = MysqlTypeSystem,
    mappings = {
        { Long => i64 }
        { Double => f64 }
    }
}

impl<'a> From<&'a ColumnType> for MysqlTypeSystem {
    fn from(ty: &'a ColumnType) -> MysqlTypeSystem {
        use MysqlTypeSystem::*;
        match ty {
            ColumnType::MYSQL_TYPE_LONG => Long(true),
            ColumnType::MYSQL_TYPE_DOUBLE => Double(true),
            _ => unimplemented!("{}", ty.name()),
        }
    }
}

// Link MysqlDTypes back to the one defined by the mysql crate.
impl<'a> From<MysqlTypeSystem> for ColumnType {
    fn from(ty: MysqlTypeSystem) -> ColumnType {
        use MysqlTypeSystem::*;
        match ty {
            Long(_) => ColumnType::MYSQL_TYPE_LONG,
            Double(_) => ColumnType::MYSQL_TYPE_DOUBLE,
        }
    }
}