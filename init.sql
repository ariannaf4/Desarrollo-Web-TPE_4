
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(100),
    contraseña VARCHAR(100)
);


SELECT 'Tabla usuarios creada exitosamente' as mensaje;