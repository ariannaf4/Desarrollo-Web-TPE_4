### 1. Clonar el proyecto

```bash
git clone <url-del-repositorio>
cd express
```

### 2. Ejecutar con Docker

```bash
# Construir y ejecutar todos los servicios
docker-compose up -d

# Verificar que los contenedores estén corriendo
docker ps
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
