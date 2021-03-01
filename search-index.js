var searchIndex = JSON.parse('{\
"connector_agent":{"doc":"","i":[[0,"data_sources","connector_agent","",null,null],[0,"csv","connector_agent::data_sources","",null,null],[3,"CSVSource","connector_agent::data_sources::csv","",null,null],[11,"new","","",0,[[]]],[3,"CSVSourcePartition","","",null,null],[11,"new","","",1,[[["str",15]]]],[3,"CSVSourceParser","","",null,null],[0,"dummy","connector_agent::data_sources","",null,null],[3,"MixedSource","connector_agent::data_sources::dummy","",null,null],[11,"new","","",2,[[]]],[3,"MixedSourcePartition","","",null,null],[11,"new","","",3,[[["str",15]]]],[3,"MixedSourceParser","","",null,null],[0,"postgres","connector_agent::data_sources","",null,null],[4,"PostgresDTypes","connector_agent::data_sources::postgres","",null,null],[13,"Bool","","",4,null],[13,"Float4","","",4,null],[13,"Float8","","",4,null],[13,"Int4","","",4,null],[13,"Int8","","",4,null],[13,"Date","","",4,null],[13,"BpChar","","",4,null],[13,"VarChar","","",4,null],[13,"Text","","",4,null],[13,"Timestamp","","",4,null],[13,"TimestampTz","","",4,null],[3,"PostgresSource","","",null,null],[11,"new","","",5,[[["usize",15],["str",15]]]],[11,"buf_size","","",5,[[["usize",15]]]],[3,"PostgresSourcePartition","","",null,null],[11,"new","","",6,[[["pooledconnection",3],["usize",15],["postgresconnectionmanager",3],["str",15]]]],[3,"PostgresSourceParser","","",null,null],[11,"new","","",7,[[["usize",15],["binarycopyoutiter",3]]]],[3,"MyBinaryCopyOutRow","","",null,null],[8,"Source","connector_agent::data_sources","",null,null],[18,"DATA_ORDERS","","Supported data orders, ordering by preference.",8,null],[16,"TypeSystem","","The type system this <code>Source</code> associated with.",8,null],[16,"Partition","","",8,null],[10,"set_data_order","","",8,[[["dataorder",4]],["result",6]]],[10,"set_queries","","",8,[[]]],[10,"fetch_metadata","","",8,[[],["result",6]]],[10,"names","","",8,[[],[["vec",3],["string",3]]]],[10,"schema","","",8,[[],["vec",3]]],[10,"partition","","",8,[[],[["vec",3],["result",6]]]],[8,"PartitionedSource","","In general, a <code>DataSource</code> abstracts the data source as a …",null,null],[16,"TypeSystem","","",9,null],[16,"Parser","","",9,null],[10,"prepare","","Run the query and put the result into Self.",9,[[],["result",6]]],[10,"parser","","",9,[[],["result",6]]],[10,"nrows","","Number of rows this <code>DataSource</code> got. Sometimes it is not …",9,[[],["usize",15]]],[10,"ncols","","Number of cols this <code>DataSource</code> got.",9,[[],["usize",15]]],[8,"Parser","","",null,null],[16,"TypeSystem","","",10,null],[11,"read","","Read a value <code>T</code> by calling <code>Produce<T>::produce</code>. Usually …",10,[[],["result",6]]],[8,"Produce","","A type implemented <code>Produce<T></code> means that it can produce a …",null,null],[10,"produce","","",11,[[],["result",6]]],[0,"writers","connector_agent","",null,null],[0,"arrow","connector_agent::writers","",null,null],[3,"ArrowWriter","connector_agent::writers::arrow","",null,null],[11,"new","","",12,[[]]],[11,"finish","","",12,[[["vec",3],["string",3]],[["result",4],["vec",3],["connectoragenterror",4]]]],[3,"ArrowPartitionWriter","","",null,null],[0,"memory","connector_agent::writers","",null,null],[3,"MemoryWriter","connector_agent::writers::memory","This <code>Writer</code> can support mixed data type.",null,null],[11,"new","","",13,[[]]],[11,"buffer_view","","",13,[[["usize",15]],[["option",4],["arrayview2",6]]]],[11,"column_view","","",13,[[["usize",15]],[["option",4],["arrayview1",6]]]],[11,"column_buffer_index","","",13,[[["usize",15]]]],[3,"MemoryPartitionWriter","","The <code>PartitionedWriter</code> of <code>MemoryWriter</code>.",null,null],[0,"pandas","connector_agent::writers","",null,null],[8,"PandasDType","connector_agent::writers::pandas","",null,null],[10,"dtype","","",14,[[],["str",15]]],[10,"npdtype","","",14,[[],["str",15]]],[10,"parse","","",14,[[["str",15]],["result",6]]],[4,"PandasTypes","","",null,null],[13,"F64","","",15,null],[13,"I64","","",15,null],[13,"Bool","","",15,null],[13,"String","","",15,null],[13,"DateTime","","",15,null],[8,"Writer","connector_agent::writers","A <code>Writer</code> is associated with a <code>TypeSystem</code> and a …",null,null],[18,"DATA_ORDERS","","",16,null],[16,"TypeSystem","","",16,null],[16,"PartitionWriter","","",16,null],[10,"allocate","","Construct the <code>Writer</code>. This allocates the memory based on …",16,[[["usize",15],["dataorder",4]],["result",6]]],[10,"partition_writers","","Create a bunch of partition writers, with each write <code>count</code>…",16,[[],[["result",6],["vec",3]]]],[10,"schema","","Return the schema of the writer.",16,[[]]],[8,"PartitionWriter","","<code>PartitionWriter</code> writes values to its own region. …",null,null],[16,"TypeSystem","","",17,null],[11,"write","","Write a value of type T to the location (row, col). The …",17,[[]]],[11,"write_checked","","Write a value of type T to the location (row, col), …",17,[[],["result",6]]],[10,"nrows","","Number of rows this <code>PartitionWriter</code> controls.",17,[[],["usize",15]]],[10,"ncols","","Number of rows this <code>PartitionWriter</code> controls.",17,[[],["usize",15]]],[8,"Consume","","A type implemented <code>Consume<T></code> means that it can consume a …",null,null],[10,"consume","","",18,[[]]],[10,"consume_checked","","",18,[[],["result",6]]],[3,"AnyArray","connector_agent","",null,null],[3,"AnyArrayView","","",null,null],[3,"AnyArrayViewMut","","",null,null],[4,"DataOrder","","",null,null],[13,"RowMajor","","",19,null],[13,"ColumnMajor","","",19,null],[3,"Dispatcher","","A dispatcher owns a <code>SourceBuilder</code> <code>SB</code> and a vector of …",null,null],[4,"ConnectorAgentError","","Errors that can be raised from this library.",null,null],[13,"UnexpectedType","","The required type does not same as the schema defined.",20,null],[13,"OutOfBound","","",20,null],[13,"UnsupportedDataOrder","","",20,null],[13,"CannotResolveDataOrder","","",20,null],[13,"CannotParse","","",20,null],[13,"DuplicatedAllocation","","",20,null],[13,"WriterNotAllocated","","",20,null],[13,"NoTypeSystemConversionRule","","",20,null],[13,"IOError","","",20,null],[13,"PostgresPoolError","","",20,null],[13,"PostgresError","","",20,null],[13,"CSVError","","",20,null],[13,"Other","","Any other errors that are too trivial to be put here …",20,null],[6,"Result","","",null,null],[4,"DataType","","This is our intermediate type system used in this library.…",null,null],[13,"F64","","",21,null],[13,"I64","","",21,null],[13,"Bool","","",21,null],[13,"String","","",21,null],[13,"DateTime","","",21,null],[8,"ParameterizedFunc","","A ParameterizedFunc refers to a function that is …",null,null],[16,"Function","","",22,null],[11,"realize","","",22,[[]]],[8,"ParameterizedOn","","<code>ParameterizedOn</code> indicates a parameterized function <code>Self</code> …",null,null],[10,"parameterize","","",23,[[]]],[8,"Realize","","Realize means that a TypeSystem can realize a …",null,null],[10,"realize","","realize a parameterized function with the type that self …",24,[[],["result",6]]],[8,"TypeAssoc","","Associate a static type to a TypeSystem",null,null],[10,"check","","",25,[[],["result",6]]],[8,"TypeConversion","","",null,null],[10,"convert","","",26,[[]]],[8,"TypeSystem","","<code>TypeSystem</code> describes a type system in a value type (e.g. …",null,null],[11,"check","","Check whether T is the same type as defined by self.",27,[[],["result",6]]],[14,"associate_typesystem","","A macro to implement <code>TypeAssoc</code> and <code>Realize</code> which saves …",null,null],[14,"associate_typesystems","","A macro to define how to convert between one type system …",null,null],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"vzip","","",28,[[]]],[11,"init","","",28,[[],["usize",15]]],[11,"deref","","",28,[[["usize",15]]]],[11,"deref_mut","","",28,[[["usize",15]]]],[11,"drop","","",28,[[["usize",15]]]],[11,"from","","",29,[[]]],[11,"into","","",29,[[]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"vzip","","",29,[[]]],[11,"init","","",29,[[],["usize",15]]],[11,"deref","","",29,[[["usize",15]]]],[11,"deref_mut","","",29,[[["usize",15]]]],[11,"drop","","",29,[[["usize",15]]]],[11,"from","","",30,[[]]],[11,"into","","",30,[[]]],[11,"borrow","","",30,[[]]],[11,"borrow_mut","","",30,[[]]],[11,"try_from","","",30,[[],["result",4]]],[11,"try_into","","",30,[[],["result",4]]],[11,"type_id","","",30,[[],["typeid",3]]],[11,"vzip","","",30,[[]]],[11,"init","","",30,[[],["usize",15]]],[11,"deref","","",30,[[["usize",15]]]],[11,"deref_mut","","",30,[[["usize",15]]]],[11,"drop","","",30,[[["usize",15]]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"equivalent","","",19,[[],["bool",15]]],[11,"vzip","","",19,[[]]],[11,"init","","",19,[[],["usize",15]]],[11,"deref","","",19,[[["usize",15]]]],[11,"deref_mut","","",19,[[["usize",15]]]],[11,"drop","","",19,[[["usize",15]]]],[11,"from","connector_agent::data_sources::csv","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"init","","",0,[[],["usize",15]]],[11,"deref","","",0,[[["usize",15]]]],[11,"deref_mut","","",0,[[["usize",15]]]],[11,"drop","","",0,[[["usize",15]]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"init","","",1,[[],["usize",15]]],[11,"deref","","",1,[[["usize",15]]]],[11,"deref_mut","","",1,[[["usize",15]]]],[11,"drop","","",1,[[["usize",15]]]],[11,"from","","",31,[[]]],[11,"into","","",31,[[]]],[11,"borrow","","",31,[[]]],[11,"borrow_mut","","",31,[[]]],[11,"try_from","","",31,[[],["result",4]]],[11,"try_into","","",31,[[],["result",4]]],[11,"type_id","","",31,[[],["typeid",3]]],[11,"vzip","","",31,[[]]],[11,"init","","",31,[[],["usize",15]]],[11,"deref","","",31,[[["usize",15]]]],[11,"deref_mut","","",31,[[["usize",15]]]],[11,"drop","","",31,[[["usize",15]]]],[11,"from","connector_agent::data_sources::dummy","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"init","","",2,[[],["usize",15]]],[11,"deref","","",2,[[["usize",15]]]],[11,"deref_mut","","",2,[[["usize",15]]]],[11,"drop","","",2,[[["usize",15]]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"init","","",3,[[],["usize",15]]],[11,"deref","","",3,[[["usize",15]]]],[11,"deref_mut","","",3,[[["usize",15]]]],[11,"drop","","",3,[[["usize",15]]]],[11,"from","","",32,[[]]],[11,"into","","",32,[[]]],[11,"borrow","","",32,[[]]],[11,"borrow_mut","","",32,[[]]],[11,"try_from","","",32,[[],["result",4]]],[11,"try_into","","",32,[[],["result",4]]],[11,"type_id","","",32,[[],["typeid",3]]],[11,"vzip","","",32,[[]]],[11,"init","","",32,[[],["usize",15]]],[11,"deref","","",32,[[["usize",15]]]],[11,"deref_mut","","",32,[[["usize",15]]]],[11,"drop","","",32,[[["usize",15]]]],[11,"from","connector_agent::data_sources::postgres","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"init","","",4,[[],["usize",15]]],[11,"deref","","",4,[[["usize",15]]]],[11,"deref_mut","","",4,[[["usize",15]]]],[11,"drop","","",4,[[["usize",15]]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"init","","",5,[[],["usize",15]]],[11,"deref","","",5,[[["usize",15]]]],[11,"deref_mut","","",5,[[["usize",15]]]],[11,"drop","","",5,[[["usize",15]]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"init","","",6,[[],["usize",15]]],[11,"deref","","",6,[[["usize",15]]]],[11,"deref_mut","","",6,[[["usize",15]]]],[11,"drop","","",6,[[["usize",15]]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"init","","",7,[[],["usize",15]]],[11,"deref","","",7,[[["usize",15]]]],[11,"deref_mut","","",7,[[["usize",15]]]],[11,"drop","","",7,[[["usize",15]]]],[11,"from","","",33,[[]]],[11,"into","","",33,[[]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"vzip","","",33,[[]]],[11,"init","","",33,[[],["usize",15]]],[11,"deref","","",33,[[["usize",15]]]],[11,"deref_mut","","",33,[[["usize",15]]]],[11,"drop","","",33,[[["usize",15]]]],[11,"from","connector_agent","",34,[[]]],[11,"into","","",34,[[]]],[11,"borrow","","",34,[[]]],[11,"borrow_mut","","",34,[[]]],[11,"try_from","","",34,[[],["result",4]]],[11,"try_into","","",34,[[],["result",4]]],[11,"type_id","","",34,[[],["typeid",3]]],[11,"vzip","","",34,[[]]],[11,"init","","",34,[[],["usize",15]]],[11,"deref","","",34,[[["usize",15]]]],[11,"deref_mut","","",34,[[["usize",15]]]],[11,"drop","","",34,[[["usize",15]]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_string","","",20,[[],["string",3]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"init","","",20,[[],["usize",15]]],[11,"deref","","",20,[[["usize",15]]]],[11,"deref_mut","","",20,[[["usize",15]]]],[11,"drop","","",20,[[["usize",15]]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"equivalent","","",21,[[],["bool",15]]],[11,"vzip","","",21,[[]]],[11,"init","","",21,[[],["usize",15]]],[11,"deref","","",21,[[["usize",15]]]],[11,"deref_mut","","",21,[[["usize",15]]]],[11,"drop","","",21,[[["usize",15]]]],[11,"from","connector_agent::writers::arrow","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"init","","",12,[[],["usize",15]]],[11,"deref","","",12,[[["usize",15]]]],[11,"deref_mut","","",12,[[["usize",15]]]],[11,"drop","","",12,[[["usize",15]]]],[11,"from","","",35,[[]]],[11,"into","","",35,[[]]],[11,"borrow","","",35,[[]]],[11,"borrow_mut","","",35,[[]]],[11,"try_from","","",35,[[],["result",4]]],[11,"try_into","","",35,[[],["result",4]]],[11,"type_id","","",35,[[],["typeid",3]]],[11,"vzip","","",35,[[]]],[11,"init","","",35,[[],["usize",15]]],[11,"deref","","",35,[[["usize",15]]]],[11,"deref_mut","","",35,[[["usize",15]]]],[11,"drop","","",35,[[["usize",15]]]],[11,"from","connector_agent::writers::memory","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"init","","",13,[[],["usize",15]]],[11,"deref","","",13,[[["usize",15]]]],[11,"deref_mut","","",13,[[["usize",15]]]],[11,"drop","","",13,[[["usize",15]]]],[11,"from","","",36,[[]]],[11,"into","","",36,[[]]],[11,"borrow","","",36,[[]]],[11,"borrow_mut","","",36,[[]]],[11,"try_from","","",36,[[],["result",4]]],[11,"try_into","","",36,[[],["result",4]]],[11,"type_id","","",36,[[],["typeid",3]]],[11,"vzip","","",36,[[]]],[11,"init","","",36,[[],["usize",15]]],[11,"deref","","",36,[[["usize",15]]]],[11,"deref_mut","","",36,[[["usize",15]]]],[11,"drop","","",36,[[["usize",15]]]],[11,"from","connector_agent::writers::pandas","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"equivalent","","",15,[[],["bool",15]]],[11,"vzip","","",15,[[]]],[11,"init","","",15,[[],["usize",15]]],[11,"deref","","",15,[[["usize",15]]]],[11,"deref_mut","","",15,[[["usize",15]]]],[11,"drop","","",15,[[["usize",15]]]],[11,"realize","connector_agent::data_sources::postgres","",4,[[],["result",6]]],[11,"realize","connector_agent","",21,[[],["result",6]]],[11,"realize","connector_agent::writers::pandas","",15,[[],["result",6]]],[11,"set_data_order","connector_agent::data_sources::csv","",0,[[["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"set_queries","","",0,[[]]],[11,"fetch_metadata","","",0,[[],["result",6]]],[11,"names","","",0,[[],[["vec",3],["string",3]]]],[11,"schema","","",0,[[],["vec",3]]],[11,"partition","","",0,[[],[["vec",3],["result",6]]]],[11,"set_data_order","connector_agent::data_sources::dummy","",2,[[["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"set_queries","","",2,[[]]],[11,"fetch_metadata","","",2,[[],["result",6]]],[11,"names","","",2,[[],[["vec",3],["string",3]]]],[11,"schema","","",2,[[],["vec",3]]],[11,"partition","","",2,[[],[["vec",3],["result",6]]]],[11,"set_data_order","connector_agent::data_sources::postgres","",5,[[["dataorder",4]],["result",6]]],[11,"set_queries","","",5,[[]]],[11,"fetch_metadata","","",5,[[],["result",6]]],[11,"names","","",5,[[],[["vec",3],["string",3]]]],[11,"schema","","",5,[[],["vec",3]]],[11,"partition","","",5,[[],[["vec",3],["result",6]]]],[11,"prepare","connector_agent::data_sources::csv","The parameter <code>query</code> is the path of the csv file",1,[[],["result",6]]],[11,"nrows","","",1,[[],["usize",15]]],[11,"ncols","","",1,[[],["usize",15]]],[11,"parser","","",1,[[],["result",6]]],[11,"prepare","connector_agent::data_sources::dummy","",3,[[],["result",6]]],[11,"parser","","",3,[[],["result",6]]],[11,"nrows","","",3,[[],["usize",15]]],[11,"ncols","","",3,[[],["usize",15]]],[11,"prepare","connector_agent::data_sources::postgres","",6,[[],["result",6]]],[11,"parser","","",6,[[],["result",6]]],[11,"nrows","","",6,[[],["usize",15]]],[11,"ncols","","",6,[[],["usize",15]]],[11,"produce","connector_agent::data_sources::csv","",31,[[],[["i64",15],["result",6]]]],[11,"produce","","",31,[[],[["option",4],["result",6]]]],[11,"produce","","",31,[[],[["f64",15],["result",6]]]],[11,"produce","","",31,[[],[["option",4],["result",6]]]],[11,"produce","","",31,[[],[["bool",15],["result",6]]]],[11,"produce","","",31,[[],[["result",6],["option",4]]]],[11,"produce","","",31,[[],[["string",3],["result",6]]]],[11,"produce","","",31,[[],[["result",6],["option",4]]]],[11,"produce","","",31,[[],[["result",6],["datetime",3]]]],[11,"produce","","",31,[[],[["result",6],["option",4]]]],[11,"produce","connector_agent::data_sources::dummy","",32,[[],[["result",6],["u64",15]]]],[11,"produce","","",32,[[],[["result",6],["option",4]]]],[11,"produce","","",32,[[],[["result",6],["i32",15]]]],[11,"produce","","",32,[[],[["result",6],["option",4]]]],[11,"produce","","",32,[[],[["i64",15],["result",6]]]],[11,"produce","","",32,[[],[["option",4],["result",6]]]],[11,"produce","","",32,[[],[["f64",15],["result",6]]]],[11,"produce","","",32,[[],[["option",4],["result",6]]]],[11,"produce","","",32,[[],[["string",3],["result",6]]]],[11,"produce","","",32,[[],[["result",6],["option",4]]]],[11,"produce","","",32,[[],[["bool",15],["result",6]]]],[11,"produce","","",32,[[],[["result",6],["option",4]]]],[11,"produce","","",32,[[],[["result",6],["datetime",3]]]],[11,"produce","","",32,[[],[["result",6],["option",4]]]],[11,"produce","","",32,[[],[["date",3],["result",6]]]],[11,"produce","","",32,[[],[["result",6],["option",4]]]],[11,"produce","connector_agent::data_sources::postgres","",7,[[],[["result",6],["i32",15]]]],[11,"produce","","",7,[[],[["result",6],["option",4]]]],[11,"produce","","",7,[[],[["i64",15],["result",6]]]],[11,"produce","","",7,[[],[["option",4],["result",6]]]],[11,"produce","","",7,[[],[["f32",15],["result",6]]]],[11,"produce","","",7,[[],[["option",4],["result",6]]]],[11,"produce","","",7,[[],[["f64",15],["result",6]]]],[11,"produce","","",7,[[],[["option",4],["result",6]]]],[11,"produce","","",7,[[],[["bool",15],["result",6]]]],[11,"produce","","",7,[[],[["result",6],["option",4]]]],[11,"produce","","",7,[[],[["result",6],["datetime",3]]]],[11,"produce","","",7,[[],[["result",6],["option",4]]]],[11,"produce","","",7,[[],[["naivedatetime",3],["result",6]]]],[11,"produce","","",7,[[],[["result",6],["option",4]]]],[11,"produce","","",7,[[],[["result",6],["naivedate",3]]]],[11,"produce","","",7,[[],[["result",6],["option",4]]]],[11,"produce","","",7,[[],[["result",6],["bytes",3]]]],[11,"produce","","",7,[[],[["option",4],["result",6]]]],[11,"dtype","connector_agent::writers::pandas","",15,[[],["str",15]]],[11,"npdtype","","",15,[[],["str",15]]],[11,"parse","","",15,[[["str",15]],[["connectoragenterror",4],["result",4]]]],[11,"allocate","connector_agent::writers::arrow","",12,[[["usize",15],["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"partition_writers","","",12,[[],[["result",4],["vec",3],["connectoragenterror",4]]]],[11,"schema","","",12,[[]]],[11,"allocate","connector_agent::writers::memory","",13,[[["usize",15],["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"partition_writers","","",13,[[],[["result",4],["vec",3],["connectoragenterror",4]]]],[11,"schema","","",13,[[]]],[11,"nrows","connector_agent::writers::arrow","",35,[[],["usize",15]]],[11,"ncols","","",35,[[],["usize",15]]],[11,"nrows","connector_agent::writers::memory","",36,[[],["usize",15]]],[11,"ncols","","",36,[[],["usize",15]]],[11,"consume","connector_agent::writers::arrow","",35,[[]]],[11,"consume_checked","","",35,[[],["result",6]]],[11,"consume","connector_agent::writers::memory","",36,[[]]],[11,"consume_checked","","",36,[[],["result",6]]],[11,"from","connector_agent","",28,[[["array",6]]]],[11,"from","connector_agent::data_sources::postgres","",4,[[["type",3]],["postgresdtypes",4]]],[11,"from","connector_agent","",20,[[["error",3]]]],[11,"from","","",20,[[["error",3]]]],[11,"from","","",20,[[["error",3]]]],[11,"from","","",20,[[["error",3]]]],[11,"from","","",20,[[["error",3]]]],[11,"clone","","",19,[[],["dataorder",4]]],[11,"clone","connector_agent::data_sources::postgres","",4,[[],["postgresdtypes",4]]],[11,"clone","connector_agent","",21,[[],["datatype",4]]],[11,"clone","connector_agent::writers::pandas","",15,[[],["pandastypes",4]]],[11,"cmp","connector_agent","",21,[[["datatype",4]],["ordering",4]]],[11,"cmp","connector_agent::writers::pandas","",15,[[["pandastypes",4]],["ordering",4]]],[11,"eq","connector_agent","",19,[[["dataorder",4]],["bool",15]]],[11,"eq","","",21,[[["datatype",4]],["bool",15]]],[11,"ne","","",21,[[["datatype",4]],["bool",15]]],[11,"eq","connector_agent::writers::pandas","",15,[[["pandastypes",4]],["bool",15]]],[11,"ne","","",15,[[["pandastypes",4]],["bool",15]]],[11,"partial_cmp","connector_agent","",21,[[["datatype",4]],[["ordering",4],["option",4]]]],[11,"partial_cmp","connector_agent::writers::pandas","",15,[[["pandastypes",4]],[["ordering",4],["option",4]]]],[11,"fmt","connector_agent","",19,[[["formatter",3]],["result",6]]],[11,"fmt","connector_agent::data_sources::postgres","",4,[[["formatter",3]],["result",6]]],[11,"fmt","connector_agent","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",21,[[["formatter",3]],["result",6]]],[11,"fmt","connector_agent::writers::pandas","",15,[[["formatter",3]],["result",6]]],[11,"fmt","connector_agent","",20,[[["formatter",3]],["result",6]]],[11,"hash","","",21,[[]]],[11,"hash","connector_agent::writers::pandas","",15,[[]]],[11,"source","connector_agent","",20,[[],[["error",8],["option",4]]]],[11,"check","","Check whether T is the same type as defined by self.",27,[[],["result",6]]],[11,"realize","","",22,[[]]],[11,"new","","",28,[[["array",6]]]],[11,"view","","",28,[[],["anyarrayview",3]]],[11,"view_mut","","",28,[[],["anyarrayviewmut",3]]],[11,"downcast_ref","","",28,[[],[["array",6],["option",4]]]],[11,"downcast_mut","","",28,[[],[["option",4],["array",6]]]],[11,"new","","",29,[[["arrayview",6]]]],[11,"downcast","","",29,[[],[["arrayview",6],["option",4]]]],[11,"udowncast","","",29,[[],["arrayview",6]]],[11,"split_at","","",29,[[["ix",6],["axis",3]]]],[11,"new","","",30,[[["arrayviewmut",6]]]],[11,"downcast","","",30,[[],[["option",4],["arrayviewmut",6]]]],[11,"udowncast","","",30,[[],["arrayviewmut",6]]],[11,"split_at","","",30,[[["ix",6],["axis",3]]]],[11,"reborrow","","",30,[[]]],[11,"new","","Create a new dispatcher by providing a source builder, …",34,[[]]],[11,"run_checked","","",34,[[],["result",6]]],[11,"run","","",34,[[],["result",6]]]],"p":[[3,"CSVSource"],[3,"CSVSourcePartition"],[3,"MixedSource"],[3,"MixedSourcePartition"],[4,"PostgresDTypes"],[3,"PostgresSource"],[3,"PostgresSourcePartition"],[3,"PostgresSourceParser"],[8,"Source"],[8,"PartitionedSource"],[8,"Parser"],[8,"Produce"],[3,"ArrowWriter"],[3,"MemoryWriter"],[8,"PandasDType"],[4,"PandasTypes"],[8,"Writer"],[8,"PartitionWriter"],[8,"Consume"],[4,"DataOrder"],[4,"ConnectorAgentError"],[4,"DataType"],[8,"ParameterizedFunc"],[8,"ParameterizedOn"],[8,"Realize"],[8,"TypeAssoc"],[8,"TypeConversion"],[8,"TypeSystem"],[3,"AnyArray"],[3,"AnyArrayView"],[3,"AnyArrayViewMut"],[3,"CSVSourceParser"],[3,"MixedSourceParser"],[3,"MyBinaryCopyOutRow"],[3,"Dispatcher"],[3,"ArrowPartitionWriter"],[3,"MemoryPartitionWriter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);