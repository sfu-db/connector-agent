"""
Usage:
  test-tpch.py <num>

Options:
  -h --help     Show this screen.
  --version     Show version.
"""
import os
import time

from connector_agent_python import read_sql
from contexttimer import Timer
from docopt import docopt

if __name__ == "__main__":
    args = docopt(__doc__, version="Naval Fate 2.0")
    conn = os.environ["POSTGRES_URL"]

    with Timer() as timer:
        df = read_sql(
            conn,
            """SELECT 
              l_orderkey,
              l_partkey,
              l_suppkey,
              l_linenumber,
              l_quantity::float8,
              l_extendedprice::float8,
              l_discount::float8,
              l_tax::float8,
              l_returnflag,
              l_linestatus,
              l_shipdate,
              l_commitdate,
              l_receiptdate,                
              l_shipinstruct,
              l_shipmode,
              l_comment
            FROM lineitem_s10""",
            partition_on="l_orderkey",
            partition_range=(0, 60000000),
            partition_num=int(args["<num>"]),
        )
    print("time in total:", timer.elapsed)

    print(df.head())
    print(len(df))