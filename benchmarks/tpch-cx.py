"""
Usage:
  tpch-cx.py [--protocol=<protocol>] [--conn=<conn>] <num>

Options:
  --protocol=<protocol>  The protocol to use [default: binary].
  --conn=<conn>          The connection url to use [default: POSTGRES_URL].
  -h --help              Show this screen.
  --version              Show version.
"""
import os

import connectorx as cx
from contexttimer import Timer
from docopt import docopt

if __name__ == "__main__":

    args = docopt(__doc__, version="Naval Fate 2.0")
    conn = os.environ[args["--conn"]]
    table = os.environ["TPCH_TABLE"]

    with Timer() as timer:
        df = cx.read_sql(
            conn,
            f"""SELECT * FROM {table}""",
            partition_on="L_ORDERKEY",
            partition_num=int(args["<num>"]),
            protocol=args["--protocol"],
        )
    print("time in total:", timer.elapsed)

    print(df.head())
    print(df.tail())
    print(len(df))
