DROP DATABASE IF EXISTS DemoData;
GO
CREATE DATABASE DemoData;
GO
USE DemoData;
GO
CREATE TABLE Products (ID int, ProductName nvarchar(max));
GO
CREATE TABLE Employees (ID int, EmployeeName nvarchar(max));
GO