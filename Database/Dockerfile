FROM microsoft/mssql-server-linux:2017-latest
COPY . /app
WORKDIR /app
RUN chmod +x ./db-start.sh
RUN chmod +x ./import-data.sh
CMD ./db-start.sh ; sleep infinity