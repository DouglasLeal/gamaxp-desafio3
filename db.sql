CREATE DATABASE IF NOT EXISTS gama_desafio3;

USE gama_desafio3;

CREATE TABLE IF NOT EXISTS pacientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS psicologos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    apresentacao VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
) ENGINE = InnoDB;

CREATE TABLE atendimentos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    psicologo_id INT NOT NULL,
    observacao TEXT NOT NULL,
    data_atendimento TIMESTAMP NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    CONSTRAINT fk_paciente FOREIGN KEY (paciente_id) REFERENCES pacientes (id),
    CONSTRAINT fk_psicologo FOREIGN KEY (psicologo_id) REFERENCES psicologos (id)
) ENGINE = InnoDB;