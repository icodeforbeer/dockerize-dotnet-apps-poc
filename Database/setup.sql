DROP DATABASE IF EXISTS DemoData;
GO
CREATE DATABASE DemoData;
GO
USE DemoData;
GO
CREATE TABLE Products (ID int IDENTITY(1,1) PRIMARY KEY, ProductName nvarchar(200), ProductDescription nvarchar(500), ProductPrice decimal(10,2), UpdatedDate datetime);
GO
CREATE TABLE Employees (ID int, EmployeeName nvarchar(max));
GO