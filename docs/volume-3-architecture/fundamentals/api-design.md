---
sidebar_position: 2
---

# API Design

## Resumen Ejecutivo

Las APIs son contratos entre sistemas. Un buen diseño de API es inversión a largo plazo.

## Principios clave

### 1. Versionado
Siempre versiona tu API desde día 1
```
/api/v1/users
/api/v2/users  # Breaking change
```

### 2. Consistencia
Todos los endpoints deben sentirse iguales
```
GET    /api/v1/users       # list
POST   /api/v1/users       # create
GET    /api/v1/users/:id   # get
PUT    /api/v1/users/:id   # update
DELETE /api/v1/users/:id   # delete
```

### 3. Errores claros
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": {
      "field": "email",
      "reason": "required"
    }
  }
}
```

### 4. Paginación
```
GET /api/v1/users?page=1&limit=20&sort=created_at:desc
```

## REST vs GraphQL

- **REST**: Simple, cacheable, stateless. Bueno para la mayoría.
- **GraphQL**: Flexible, query language. Para clientes complejos.
