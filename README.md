# Dockerize dotnet core apps

## Pre Requisites

You need to have [Docker](https://www.docker.com/community-edition#/download) installed on your machine.

## Running the code

navigate to the folder where the code is cloned and run

`docker-compose up`

To stop the running instances just hit `ctrl + c`

## Cleanup

This project leaves a lot of mess in terms of stopped docker containers, built docker images, and intermediate docker images used through the build process.

For Linux/Mac OSX users I have a shell script [*Cleanup.sh*](cleanup.sh) to cleanup this mess. Please use the docker commands in [*Cleanup.sh*](cleanup.sh) as a cue to clean up on a windows machine.

`sh cleanup.sh`