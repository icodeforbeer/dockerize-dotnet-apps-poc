#wait for the SQL Server to come up
sleep 10s

#run the setup script to create the DB and the schema in the DB
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Passw0rd -d master -i /app/setup.sql

#import the data from the csv file
/opt/mssql-tools/bin/bcp DemoData.dbo.Products in "/app/Products.csv" -c -t',' -S localhost -U sa -P Passw0rd
/opt/mssql-tools/bin/bcp DemoData.dbo.Employees in "/app/Employees.csv" -c -t',' -S localhost -U sa -P Passw0rd
