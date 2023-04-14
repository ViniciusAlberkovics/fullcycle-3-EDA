USE wallet;

Create table clients (id varchar(255), name varchar(255), email varchar(255), created_at date);
Create table accounts (id varchar(255), client_id varchar(255), balance int, created_at date);
Create table transactions (id varchar(255), account_id_from varchar(255), account_id_to varchar(255), amount int, created_at date);

INSERT INTO clients (id, name, email, created_at) VALUES 
("1", "John", "john@teste.com", NOW()),
("2", "Mary", "mary@teste.com", NOW()),
("3", "Peter", "peter@asd.com", NOW()),
("4", "Paul", "paul@aaaaa.com", NOW());

INSERT INTO accounts (id, client_id, balance, created_at) VALUES 
("1", "1", 1000, NOW()),
("2", "2", 2000, NOW()),
("3", "3", 3000, NOW()),
("4", "4", 4000, NOW());