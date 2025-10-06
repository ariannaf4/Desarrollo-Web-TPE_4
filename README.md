# 🚀 API REST con Node.js, Express y PostgreSQL

Una API REST simple para gestión de usuarios, desarrollada con Node.js, Express y PostgreSQL, ejecutándose en contenedores Docker.

## 📋 Características

- ✅ Servidor Express con endpoints REST
- ✅ Base de datos PostgreSQL
- ✅ Conteneurización completa con Docker
- ✅ CORS habilitado
- ✅ Validación de datos
- ✅ Manejo de errores

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **PostgreSQL** - Base de datos
- **Docker & Docker Compose** - Conteneurización
- **pg** - Cliente PostgreSQL para Node.js
- **cors** - Middleware para CORS

## 📁 Estructura del Proyecto

```
express/
├── server.js              # Servidor principal de Express
├── db.js                  # Configuración de conexión a PostgreSQL
├── init.sql               # Script de inicialización de la BD
├── package.json           # Dependencias y scripts de Node.js
├── docker-compose.yml     # Configuración de servicios Docker
├── Dockerfile             # Imagen personalizada de Node.js
├── .dockerignore          # Archivos ignorados por Docker
└── README.md              # Este archivo
```

## 🚀 Instalación y Ejecución

### Prerequisitos

- [Docker](https://www.docker.com/get-started) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### 1. Clonar o descargar el proyecto

```bash
# Si usas Git
git clone <url-del-repositorio>
cd express

# O simplemente descargar y extraer los archivos
```

### 2. Ejecutar con Docker (Recomendado)

```bash
# Construir y ejecutar todos los servicios
docker-compose up -d

# Verificar que los contenedores estén corriendo
docker ps
```

### 3. Instalación Manual (Sin Docker)

Si prefieres ejecutar sin Docker:

```bash
# Instalar dependencias
npm install

# Asegúrate de tener PostgreSQL corriendo localmente
# Crear base de datos y tabla manualmente

# Ejecutar la aplicación
npm start
```

## 🔧 Configuración

### Variables de Entorno

El proyecto está configurado para usar estas variables (definidas en `docker-compose.yml`):

```
DB_HOST=db
DB_PORT=5432
DB_NAME=usuarios_db
DB_USER=admin
DB_PASSWORD=a123
```

### Puertos

- **API Express**: http://localhost:3000
- **PostgreSQL**: localhost:5432

## 📡 Endpoints de la API

### 1. Verificar servidor
```http
GET /
```
**Respuesta:**
```json
{
  "message": "Servidor funcionando correctamente",
  "endpoints": {
    "root": "GET /",
    "usuarios": "GET /usuarios",
    "crearUsuario": "POST /usuarios"
  }
}
```

### 2. Probar conexión a la base de datos
```http
GET /test-db
```
**Respuesta:**
```json
{
  "success": true,
  "message": "Conexión a BD exitosa",
  "timestamp": "2025-10-06T16:05:38.900Z"
}
```

### 3. Listar todos los usuarios
```http
GET /usuarios
```
**Respuesta:**
```json
{
  "success": true,
  "count": 3,
  "usuarios": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "correo": "juan@ejemplo.com",
      "contraseña": "password123"
    }
  ]
}
```

### 4. Crear nuevo usuario
```http
POST /usuarios
Content-Type: application/json

{
  "nombre": "Ana Rodríguez",
  "correo": "ana@ejemplo.com",
  "contraseña": "password999"
}
```
**Respuesta:**
```json
{
  "success": true,
  "message": "Usuario creado exitosamente",
  "usuario": {
    "id": 4,
    "nombre": "Ana Rodríguez",
    "correo": "ana@ejemplo.com",
    "contraseña": "password999"
  }
}
```

## 🧪 Pruebas con cURL

```bash
# Verificar servidor
curl http://localhost:3000/

# Probar conexión BD
curl http://localhost:3000/test-db

# Listar usuarios
curl http://localhost:3000/usuarios

# Crear usuario
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Usuario Prueba",
    "correo": "prueba@test.com",
    "contraseña": "test123"
  }'
```

## 🛠️ Comandos Útiles de Docker

```bash
# Ver logs de los contenedores
docker-compose logs

# Ver logs solo del servidor Express
docker-compose logs app

# Ver logs solo de PostgreSQL
docker-compose logs db

# Parar los servicios
docker-compose down

# Reiniciar los servicios
docker-compose restart

# Entrar al contenedor de PostgreSQL
docker exec -it postgres_db psql -U admin -d usuarios_db

# Entrar al contenedor de Node.js
docker exec -it nodejs_app sh
```

## 🗃️ Base de Datos

### Esquema de la tabla `usuarios`

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(100),
    contraseña VARCHAR(100)
);
```

## 🔍 Solución de Problemas

### Error: "Container name already in use"
```bash
# Eliminar contenedores anteriores
docker rm postgres_db nodejs_app
docker-compose up -d
```

### Error: "Port already in use"
```bash
# Cambiar puertos en docker-compose.yml o detener servicios que usen esos puertos
docker-compose down
```

### Error de conexión a la base de datos
```bash
# Verificar que PostgreSQL esté saludable
docker-compose ps
# Debe mostrar "healthy" para postgres_db
```

## 📝 Logs y Debugging

```bash
# Ver todos los logs
docker-compose logs -f

# Solo logs de errores
docker-compose logs app | grep -i error
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

Desarrollado como práctica de Node.js + Express + PostgreSQL con Docker.

---

🎯 **¡Proyecto completamente funcional y listo para usar!**