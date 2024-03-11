CREATE TABLE asignaturas (
    id_asignatura INT PRIMARY KEY AUTO_INCREMENT,
    nombre_asignatura VARCHAR(255) NOT NULL,
    profesor VARCHAR(255) NOT NULL,
    nivel INT NOT NULL,
    casa VARCHAR(50)
);