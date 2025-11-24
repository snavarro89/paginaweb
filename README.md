# Insquid Marketing Website

Sitio web de marketing para Insquid, software de gestión de servicios en campo y activos.

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **ESLint + Prettier** - Linting y formateo de código

## Requisitos Previos

- Node.js 18+ 
- npm o yarn

## Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint

## Estructura del Proyecto

```
/app
  /(marketing)/     - Páginas de marketing
  /(auth)/          - Páginas de autenticación
  /layout.tsx       - Layout global
  /globals.css      - Estilos globales
/components
  /ui/              - Componentes reutilizables
/lib
  /seo.ts           - Helpers de SEO
/public             - Assets estáticos
```

## Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Las variables de entorno se configuran en el dashboard de Vercel
4. El despliegue se realiza automáticamente en cada push

## Variables de Entorno

Crea un archivo `.env.local` con:

```
NEXT_PUBLIC_BASE_URL=https://insquid.com
```

## Notas

- Todas las páginas de autenticación son placeholders sin lógica de backend
- El formulario de contacto requiere configuración de backend para funcionar
- Las imágenes son placeholders; reemplázalas con assets reales
- Agrega un favicon.ico o icon.png en la carpeta /app para el favicon del sitio

