import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Engineering Knowledge System',
  tagline: 'Tu plataforma de conocimiento profesional para los próximos 10 años',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Ahora en 'throw': con la estructura actual el build está 100% limpio.
  // Lo dejamos estricto para detectar links rotos en el momento en que
  // se introducen, no meses después cuando ya sea difícil rastrear cuál
  // de docenas de temas nuevos rompió qué.
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Habilita el renderizado real de diagramas Mermaid dentro de bloques
  // ```mermaid. Sin esto, Docusaurus los muestra como texto/código plano
  // — es exactamente lo que te estaba pasando.
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          // EKS es un sitio 100% de documentación — no hay contenido fuera
          // de /docs, así que lo servimos directamente en la raíz. Esto
          // también es lo que hace que `slug: "/"` en intro.md funcione
          // como página de inicio real (antes resolvía a "/docs/", no a "/").
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Ox18/docusaurus-personal/tree/main/',
        },
        // Sin blog: EKS no lo necesita, y dejarlo activo con contenido
        // placeholder solo añade rutas y links rotos sin valor real.
        blog: false,
        // Sin pages: el homepage placeholder de Docusaurus (src/pages/index.tsx)
        // competía por la ruta "/" con intro.md. Desactivar el plugin de
        // pages es más seguro que borrar esos archivos a mano vía el
        // puente remoto — simplemente deja de construirlos.
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '📚 EKS',
      logo: {
        alt: 'EKS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Conocimiento',
        },
        {
          // Los objetivos responden "¿y ahora qué hago?" — la pregunta que
          // aparece justo después de estudiar un tema. Si vive solo dentro
          // del árbol del sidebar se consulta una vez y se olvida; como
          // link fijo se vuelve el punto de retorno entre tema y tema.
          to: '/objetivos',
          label: '🎯 Objetivos',
          position: 'left',
        },
        {
          // Link directo y siempre visible al glosario técnico. Antes solo
          // vivía dentro del árbol del sidebar (fácil de no ver nunca) —
          // como es la página que resuelve "no entiendo esta palabra", debe
          // ser imposible de perder desde cualquier tema.
          to: '/glosario',
          label: '📖 Glosario',
          position: 'left',
        },
        {
          href: 'https://github.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Enlaces',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Engineering Knowledge System. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
