#!/bin/bash

set -e

/opt/mssql/bin/sqlservr & /app/import-data.sh