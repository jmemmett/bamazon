DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(5, 2),
    stock_quantity INTEGER(10) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Tablespoon", "Cookware", 1.50, 100), 
("Teaspoon", "Cookware", 1.25, 100), 
("Measuring Cup", "Cookware", 2.50, 100), 
("Comforter", "Bedroom", 50.00, 100), 
("Pillow", "Bedroom", 10.00, 100), 
("Bed Sheets", "Bedroom", 25.00, 100), 
("Area Rug", "Household", 30.00, 100), 
("Pet Bed", "Pets", 23.99, 100), 
("Chew Toy", "Pets", 3.99, 100), 
("Furby", "Toys", 17.95, 100);

SELECT * FROM products;