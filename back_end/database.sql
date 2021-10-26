CREATE DATABASE academic_module;

CREATE TABLE STUDENTS(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    ra VARCHAR(255) NOT NULL UNIQUE,
    cpf VARCHAR(11) NOT NULL,
    PRIMARY KEY (id)
);