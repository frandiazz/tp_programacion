# TP1 — Portfolio personal en React

**Nombre y apellido:** Augusto Francisco Díaz
**Asignatura:** Programación 4 — Trabajo Práctico Nº 1
**Repositorio:** https://github.com/frandiazz/tp_programacion

## Descripción

Portfolio personal de una sola página desarrollado con **React** y **Vite**. Presenta
información sobre el estudiante (presentación, habilidades y proyectos) y está
dividido en componentes reutilizables, con interacción mediante estado local
(`useState`), renderizado dinámico a partir de arrays (`map()`) y diseño responsive.

## Tecnologías utilizadas

- [React 19](https://react.dev/) — componentes, props, `useState` y renderizado condicional
- [Vite 8](https://vite.dev/) — servidor de desarrollo y build de producción
- JavaScript (ES6+) — módulos, arrays, `map()`, funciones flecha y desestructuración
- HTML5 — estructura semántica (`header`, `section`, `article`, `footer`)
- CSS3 — Flexbox, Grid, variables, animaciones y media queries
- [oxlint](https://oxc.rs/) — linter para revisión estática del código
- Git / GitHub — control de versiones y publicación del repositorio

## Instalación

Necesitás tener [Node.js](https://nodejs.org/) (v20 o superior) y npm instalados.

```bash
git clone https://github.com/frandiazz/tp_programacion.git
cd tp_programacion
npm install
```

`git clone` copia el repositorio a tu computadora y `npm install` instala las
dependencias listadas en `package.json`.

## Ejecución local

```bash
npm run dev
```

Se levanta el servidor de desarrollo en **http://localhost:5173/**.

Otros comandos disponibles:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Mira localmente el build de producción |
| `npm run lint` | Revisa el código en busca de errores |

## Estructura del proyecto

```
tp_programacion/
├── index.html              ← punto de entrada HTML
├── vite.config.js          ← configuración de Vite + plugin React
├── package.json            ← dependencias y scripts
└── src/
    ├── main.jsx            ← conecta React con el DOM
    ├── App.jsx             ← compone todas las secciones
    ├── index.css           ← estilos globales y variables
    └── components/
        ├── Header.jsx / .css   ← navegación superior
        ├── Hero.jsx / .css     ← presentación (recibe props)
        ├── About.jsx / .css    ← "Sobre mí" (useState + onClick + renderizado condicional)
        ├── Skills.jsx / .css   ← habilidades (array + map + key)
        ├── Projects.jsx / .css ← proyectos (array + map)
        ├── ProjectCard.jsx/.css← tarjeta reutilizable (recibe props)
        └── Footer.jsx / .css   ← contacto
```

## Secciones del portfolio

1. **Header** — navegación con enlaces a cada sección
2. **Hero** — nombre, profesión y presentación
3. **Sobre mí** — texto ampliable con botón "Ver más / Ver menos"
4. **Habilidades** — tarjetas generadas desde un array con `map()`
5. **Proyectos** — tarjetas generadas con el componente `ProjectCard`
6. **Footer** — contacto (GitHub, LinkedIn y email)

## Enlaces

- Repositorio: https://github.com/frandiazz/tp_programacion
- LinkedIn: https://www.linkedin.com/in/augusto-francisco-diaz-186359403
