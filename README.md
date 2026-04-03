# Tours Santa Marta - Premium Luxury Experiences 🌴✨

Una plataforma digital de ultra-lujo diseñada para la exploración exclusiva de la Sierra Nevada y el Caribe colombiano. Este proyecto ha sido curado con una estética minimalista ("Quiet Luxury") que prioriza la tipografía refinada y la fotografía de alta resolución sobre el ruido visual.

## 💎 Filosofía de Diseño

- **Cero Iconos:** Toda la interfaz se basa en estructura, tipografía y espacio negativo. No se utilizan librerías de iconos externos.
- **Tipografía Premium:** Uso de *Playfair Display* para encabezados elegantes e *Inter* para una lectura técnica fluida.
- **Micro-animaciones:** Transiciones suaves de 0.5s con curvas Bézier para una experiencia táctil y visual premium.
- **Glassmorphism:** Efectos de desenfoque de fondo sutiles para tarjetas y menús flotantes.

## 🛠️ Stack Tecnológico

- **Frontend:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** Vanilla CSS con Variables de Entorno (Design System a medida)
- **Contenedores:** [Docker](https://www.docker.com/) & Docker Compose
- **Base de Datos:** PostgreSQL (con Prisma ORM)

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18.x o superior
- Docker (opcional, para base de datos local)

### Instalación

1. Clona el repositorio y navega a la carpeta:
   ```bash
   cd paginadetours
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. (Opcional) Levanta el entorno con Docker:
   ```bash
   docker-compose up -d
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) para ver la experiencia.

## 📂 Estructura del Proyecto

```text
/paginadetours
  ├── /src
  │   ├── /app            # Rutas, layouts y páginas principales
  │   ├── /components     # Componentes UI (Luxury components)
  │   └── /styles         # Globals.css (Design System)
  ├── /public             # Assets de alta resolución
  ├── PRD.md              # Documento de requisitos
  ├── ARCHITECTURE.md     # Especificación técnica
  ├── Dockerfile          # Configuración de contenedor
  └── docker-compose.yml  # Orquestación de servicios
```

## 📜 Documentación Adicional

- [Requisitos del Producto (PRD)](PRD.md)
- [Arquitectura Técnica](ARCHITECTURE.md)
- [Historias de Usuario](historias_usuario.md)

---
*Elite Experiences. Sierra Nevada & Caribbean Sea. Created by Antigravity Studio.*
