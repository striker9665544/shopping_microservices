USE product_db;

CREATE TABLE mobile (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

select * from mobile;

CREATE TABLE laptop (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

select * from laptop;

CREATE TABLE shoes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

select * from shoes;

-- Insert sample data
INSERT INTO mobile (name, price) VALUES ('iPhone 15', 999.00), ('Samsung Galaxy S24', 899.50);
INSERT INTO mobile (name, price) VALUES ('Moto g82', 20000.00);
INSERT INTO laptop (name, price) VALUES ('MacBook Air M3', 1299.00), ('Dell XPS 15', 1550.00);
INSERT INTO laptop (name, price) VALUES ('HP', 129000.00);
INSERT INTO shoes (name, price) VALUES ('Nike Air Max', 120.00), ('Adidas Ultraboost', 180.75);
INSERT INTO shoes (name, price) VALUES ('Sparx', 999.00);

USE product_db;

SET SQL_SAFE_UPDATES = 0;

-- Update Mobile Brands
UPDATE mobile SET brand = 'Apple' WHERE name LIKE 'iPhone%';
UPDATE mobile SET brand = 'Samsung' WHERE name LIKE 'Samsung%';
UPDATE mobile SET brand = 'Motorola' WHERE name LIKE 'Moto%';

UPDATE mobile SET price = '189000' WHERE brand = 'Apple';
UPDATE mobile SET price = '129000' WHERE brand = 'Samsung';
UPDATE mobile SET price = '69000' WHERE brand = 'Motorola';

-- Update Laptop Brands
UPDATE laptop SET brand = 'Apple' WHERE name LIKE 'MacBook%';
UPDATE laptop SET brand = 'Dell' WHERE name LIKE 'Dell%';
UPDATE laptop SET brand = 'HP' WHERE name LIKE 'HP%';

UPDATE mobile SET price = '289000' WHERE brand = 'Apple';
UPDATE mobile SET price = '129000' WHERE brand = 'Dell';
UPDATE mobile SET price = '69000' WHERE brand = 'HP';

-- Update Shoe Brands
UPDATE shoes SET brand = 'Nike' WHERE name LIKE 'Nike%';
UPDATE shoes SET brand = 'Adidas' WHERE name LIKE 'Adidas%';
UPDATE shoes SET brand = 'Sparx' WHERE name LIKE 'Sparx%';

UPDATE mobile SET price = '9000' WHERE brand = 'Nike';
UPDATE mobile SET price = '5000' WHERE brand = 'Dell';
UPDATE mobile SET price = '2000' WHERE brand = 'Sparx';


USE product_db;
ALTER TABLE mobile ADD COLUMN brand VARCHAR(255);
ALTER TABLE laptop ADD COLUMN brand VARCHAR(255);
ALTER TABLE shoes ADD COLUMN brand VARCHAR(255);

-- Update existing data with brands
UPDATE mobile SET brand = 'Apple' WHERE name LIKE '%iPhone%';
UPDATE mobile SET brand = 'Samsung' WHERE name LIKE '%Galaxy%';
UPDATE laptop SET brand = 'Apple' WHERE name LIKE '%MacBook%';
UPDATE laptop SET brand = 'Dell' WHERE name LIKE '%Dell%';
UPDATE shoes SET brand = 'Nike' WHERE name LIKE '%Nike%';
UPDATE shoes SET brand = 'Adidas' WHERE name LIKE '%Adidas%';