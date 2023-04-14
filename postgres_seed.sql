-- CREATE TABLE
CREATE TABLE IF NOT EXISTS accounts (id varchar(255), balance int);

-- SEED
INSERT INTO accounts (id, balance) VALUES 
('1', 1000),
('2', 2000),
('3', 3000),
('4', 4000);