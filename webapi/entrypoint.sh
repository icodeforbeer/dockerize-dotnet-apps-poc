#!/bin/bash

set -e
run_cmd="dotnet run --server.urls http://*:80"

sleep 1

exec $run_cmd