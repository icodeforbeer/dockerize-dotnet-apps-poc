#!/bin/bash

set -e
chmod +x /app/import-data.sh
/opt/mssql/bin/sqlservr & /app/import-data.sh
sleep infinity