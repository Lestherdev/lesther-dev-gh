# Portafolio Personal - Jordi Lesther

Este es el código fuente del portafolio personal de Jordi Lesther, un desarrollador web. El sitio está diseñado para mostrar sus habilidades, proyectos y experiencia de una manera moderna y responsiva.

## Características Principales

-   **Diseño Responsivo**: Adaptado para verse y funcionar perfectamente en dispositivos móviles, tabletas y computadoras de escritorio.
-   **Componentes Reutilizables**: Estructura modular basada en componentes de React para facilitar el mantenimiento y la escalabilidad.
-   **Estilos con Sass**: Utiliza Sass para una gestión de estilos eficiente, con variables, mixins y una paleta de colores definida.
-   **Animaciones Sutiles**: Incorpora animaciones con `framer-motion` para una experiencia de usuario dinámica y atractiva.
-   **Secciones Claras**: Incluye secciones dedicadas a la presentación (Hero), sobre mí (About), habilidades (Skills), proyectos (Projects), servicios (Services) y contacto (Contact).
-   **Enlaces de Contacto Directos**: Permite contactar directamente a través de email, WhatsApp y LinkedIn, con iconos integrados.

## Tecnologías Utilizadas

-   **React**: Biblioteca de JavaScript para construir interfaces de usuario.
-   **Vite**: Herramienta de construcción rápida para proyectos web modernos.
-   **Sass**: Preprocesador de CSS para estilos más potentes y organizados.
-   **Framer Motion**: Librería de React para animaciones.
-   **React Icons**: Biblioteca de iconos para integrar fácilmente iconos populares.

## Configuración y Ejecución Local

Para configurar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/Lestherdev/lesther-dev-gh.git
    cd lesther-dev-gh
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Esto iniciará la aplicación en modo de desarrollo, generalmente accesible en `http://localhost:5173`.

## Despliegue

El proyecto está configurado para ser desplegado automáticamente en GitHub Pages. Para desplegar los cambios, simplemente ejecuta:

```bash
npm run deploy
```

Este comando ejecutará el proceso de construcción (`npm run build`) y luego utilizará `gh-pages` para publicar el contenido de la carpeta `dist` en la rama `gh-pages` de tu repositorio.

## Enlaces

-   **Portafolio en Vivo**: [https://Lestherdev.github.io/lesther-dev-gh](https://Lestherdev.github.io/lesther-dev-gh)