# TP2 Proyecto React - MatrixDevs

### Enlace al deploy en Vercel: [Visitalo](https://tp-2-proyecto-react.vercel.app/)

## Descripción del Proyecto
Este proyecto representa el desafio de migrar nuestro Trabajo Práctico 1 hacia una arquitectura moderna basada en componentes utilizando **React**. Pasamos de un sitio estático en HTML/JS a una **Single Page Application (SPA)** completamente dinámica. Se aplicaron buenas prácticas de organización, enrutamiento, diseño adaptable(responsive) y consumo de datos locales y externos.

## Integrantes del Equipo
* **Maria Lopez** - [GitHub](https://github.com/Marialopez2020)
  * *Desarrolló el Sidebar, Home Dashboard, la integración de la API pública y el Árbol de Renderizado.*
* **Matias Contreras** - [GitHub](https://github.com/Matihp)
  * *Desarrolló el Layout principal, el Explorador de datos locales (JSON), la Galería de imágenes y el diseño responsive general.*

## Tecnologías Utilizadas
* **React**: Librería principal para la construcción de interfaces de usuario mediante componentes.
* **Vite**: Entorno de desarrollo ultrarrápido y empaquetador.
* **React Router DOM**: Gestión de rutas dinámicas para navegar sin recargar la página.
* **CSS3**: Se utilizaron estilos avanzados como Flexbox, Grid, Media Queries y animaciones.
* **Fetch API**: Consumo asíncrono de API externa.
* **JSON Local**: Renderización en tiempo real de una base de datos local.
* **Git/GitHub**: Control de versiones y trabajo colaborativo.

## Guía de Estilos (MatrixDevs)
* **Temática**: Estilo claro y minimalista, contrastando con tonos cálidos tipo "Caramelo/Toffee" (`#db8b3b`, `#a85812`) en la barra lateral y cabeceras.
* **Tipografía**: Fuentes modernas sans-serif (`Inter`, `system-ui`).
* **Efectos Visuales**: 
  * **Glassmorphism**: Fondos translúcidos con `backdrop-filter: blur()`.
  * **Micro-animaciones**: Transformaciones al hacer hover (`scale`, `translateY`), botones interactivos y sombras dinámicas.
* **Diseño Responsivo**: Implementación de un menú hamburguesa y grillas adaptables para garantizar una correcta visualización en dispositivos móviles (`max-width: 768px`).

## Estructura de Archivos
* `/`: `index.html`, `package.json`, `vite.config.js` y `README.md`.
* `/src`: `App.jsx` (Enrutador principal) y `main.jsx` (Punto de entrada).
* `/src/components`: Componentes estructurales reutilizables.
  * `/Layout`: Contenedor principal responsive con menú hamburguesa.
  * `/Sidebar`: Menú lateral de navegación.
  * `/Navbar`: Barra superior.
* `/src/views`: Vistas de la aplicación (HomeDashboard, Perfiles, DataExplorer, ApiIntegration, Gallery, Bitacora, RenderTree).
* `/src/data`: `datos.json` (base de datos simulada con 20 objetos).
* `/public`: Recursos estáticos e imágenes.

## Funcionalidades Implementadas (Requerimientos)

1. **Navegación Estilo Dashboard**: Sidebar lateral con iconos, que indica visualmente la ruta activa y se oculta inteligentemente en dispositivos móviles.
2. **Panel Central (Home)**: Vista principal con una vista detallada de las tecnologías utilizadas y accesos rápidos a los perfiles con avatares dinámicos.
3. **Perfiles Profesionales**: Páginas individuales con barras de progreso de habilidades **animadas**, un **carrusel de proyectos** funcional e iconos de tecnologías.
4. **Explorador de Datos Locales**: Consumo de un JSON con 20 objetos, incluyendo un buscador con lógica de **filtro en tiempo real**.
5. **Integración de API Externa**: Consumo asíncrono de una API pública con manejo de estados (`Cargando...`, `Error`) y un sistema de **paginación** completo.
6. **Galería Interactiva**: Grilla de imágenes con un **Lightbox** integrado que permite hacer zoom, navegar entre fotos y cerrar con la tecla ESC.
7. **Bitácora y Árbol de Renderizado**: Documentación interna justificando la migración a React, el flujo de trabajo en Git y un diagrama esquemático de la jerarquía de componentes.

## Capturas de Pantalla
En esta sección se presentan las vistas principales del sitio web:

### Vistas Generales
![Vista del Home Dashboard](capturas/home.png)
*Dashboard principal con una vista detallada de tecnologías y acceso rápido a perfiles.*

![Vista Móvil y Responsive](capturas/media-query-mobile.png)
*Demostración del diseño responsive en dispositivos móviles con el menú hamburguesa.*

![Vista de Perfil Personal](capturas/perfil-matias.png)
*Vista del perfil con barras animadas y carrusel de proyectos funcionales.*

![Buscador de Datos Locales](capturas/data-json.png)
*Explorador de datos JSON con filtro de búsqueda en tiempo real.*

![Consumo de API Externa](capturas/api-rickandmortys.png)
*Integración asíncrona de la API pública de Rick and Morty con paginación.*

![Galería Interactiva](capturas/galeria.png)
*Galería de imágenes responsiva.*

![Bitácora del Proyecto](capturas/bitacora.png)
*Documentación interna y justificación técnica de la migración a React.*

![Árbol de Componentes](capturas/arbol-de-componentes.png)
*Esquema visual detallando la jerarquía del Árbol de Renderizado de la aplicación.*

## Uso de Inteligencia Artificial
* **Herramientas**: IA Gemini y UI-Avatars.
* **Uso en Código**: Se consultó para diseñar la estructura de los componente ApiIntegration y DataExplorer(el buscador y la paginación), mejorar el diseño responsive y redactar este archivo `README.md` en formato markdown.


