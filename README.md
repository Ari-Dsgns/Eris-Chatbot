## Eris - Chatbot FAQ Universitario

Eris es un chatbot diseñado para responder preguntas frecuentes de estudiantes universitarios. Con un diseño inspirado en el sistema solar, busca ofrecer una experiencia moderna, accesible y atractiva para jóvenes amantes de la tecnología.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)

## Identidad visual
- Paleta de colores y UI Kit disponibles en la presentación de Canva: (https://www.canva.com/design/DAGqgfFeEIE/Ig9oPM-rnQnSBh4hio-7tg/view).

- Logotipo creado dinámicamente con React y Tailwind CSS (`src/components/LogoErisRotating.jsx`)

## Accesibilidad

La aplicación cumple con estándares básicos de accesibilidad (WCAG 2.1 AA):
- Colores con contraste adecuado.
- Navegación por teclado (tabindex, roles, aria-labels).
- Elementos interactivos accesibles (`<button>`, `aria-*`).
- Compatible con lectores de pantalla.

## Demo online

[Ver app en Vercel](https://eris-chatbot.vercel.app/)


## Documentación de la propuesta

Presentacion: (https://www.canva.com/design/DAGqgfFeEIE/Ig9oPM-rnQnSBh4hio-7tg/edit?utm_content=DAGqgfFeEIE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)



## Cómo instalar y correr el proyecto

//--Clona el repositorio--//

git clone https://github.com/Ari-Dsgns/Eris-Chatbot.git
cd eris-chatbot

//--instala las dependencias--//
npm install

//--Lanza la app en modo desarrollo--//
npm run dev



****Desarrollado por Ari Sanchez **** www.arisanpala.com




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
