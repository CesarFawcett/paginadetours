# ARQUITECTURA TÉCNICA: Tours Santa Marta Premium

## 1. Visión General de Arquitectura
**Modelo:** Monolito Moderno con SSR (Server-Side Rendering).
**Filosofía de Diseño:** "Simplicidad como el máximo grado de sofisticación". El sistema se diseñará para ser ultra-rápido, compatible con SEO y visualmente impactante sin depender de librerías externas de iconos.
**Diagrama Funcional:**
`Usuario` <---> `Frontend/Backend (Next.js)` <---> `PostgreSQL (Supabase/Docker)`

## 2. Stack Tecnológico Detallado

### Frontend
- **Framework:** Next.js 14+ (App Router).
- **Estilos:** Vanilla CSS con CSS Variables (Diseño de Lujo).
- **Justificación:** Next.js permite un SEO óptimo y tiempos de carga rápidos. Vanilla CSS garantiza un control artesanal del diseño, evitando el aspecto genérico de los frameworks de utilidades.

### Backend (API)
- **Lenguaje:** TypeScript.
- **Framework:** Next.js API Routes.
- **Justificación:** Para una landing informativa, los API Routes de Next.js son suficientes y reducen la complejidad de infraestructura.

### Base de Datos
- **Principal:** PostgreSQL.
- **Justificación:** Almacenamiento estructurado de tours, precios e itinerarios para futuras expansiones.
- **ORM:** Prisma (para facilitar la mantenibilidad).

### Infraestructura y Despliegue
- **Hosting:** Vercel (Recomendado).
- **Docker:** Configuración para entorno de desarrollo y staging local.
- **Almacenamiento:** Cloudinary (para imágenes de alta resolución optimizadas).

## 3. Modelo de Datos (ERD)
```sql
ENTITY Tour {
  id UUID PK
  name VARCHAR(255) NOT NULL
  description TEXT
  price DECIMAL(10, 2)
  duration VARCHAR(50)
  location VARCHAR(100)
  image_url VARCHAR(255)
  created_at TIMESTAMP
}

ENTITY ItineraryItem {
  id UUID PK
  tour_id FK -> Tour.id
  time_label VARCHAR(50)
  activity TEXT
  order INTEGER
}

ENTITY ContactRequest {
  id UUID PK
  name VARCHAR(100)
  email VARCHAR(100)
  message TEXT
  tour_interest_id FK -> Tour.id (Optional)
  created_at TIMESTAMP
}
```

## 4. Contenedores (Docker)
Se utilizará una configuración de `docker-compose` para levantar la aplicación junto con una base de datos PostgreSQL local para desarrollo.

## 5. Estructura de Carpetas
```text
/paginadetours
  /src
    /app            - Rutas de Next.js
    /components     - Componentes UI (Luxury styles)
    /styles         - Archivos CSS globales
    /lib            - Configuración de BD y Utilidades
  /public           - Imágenes y assets
  /prisma           - Esquema de base de datos
  Dockerfile
  docker-compose.yml
  .gitignore
```
