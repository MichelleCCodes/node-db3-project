-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select c.categoryName, p.ProductName
from category as c 
join product as p 
on c.Id = p.CategoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select s.CompanyName company, o.Id
from [order] as o
join shipper as s 
on o.Shipvia = s.Id
where o.OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select od.orderid, p.productname 
from orderdetail as od 
join product as p
on od.ProductId = p.Id
where od.OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select 
o.Id, c.CompanyName, e.LastName
from [order] as o 
join customer as c 
on o.CustomerId = c.Id
join employee as e 
on o.EmployeeId = e.Id