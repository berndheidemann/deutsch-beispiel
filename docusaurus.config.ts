import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Deutsch LK Lernplattform',
  tagline: 'Interaktiv lernen für den Deutsch-Leistungskurs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://berndheidemann.github.io',
  baseUrl: '/deutsch-beispiel/',

  organizationName: 'berndheidemann',
  projectName: 'deutsch-beispiel',

  onBrokenLinks: 'throw',

  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap',
  ],

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Deutsch LK',
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Übersicht',
        },
        {
          type: 'dropdown',
          label: 'Kapitel',
          position: 'left',
          items: [
            { label: '1 — Sprachliche Mittel', to: '/docs/sprachliche-mittel/' },
            { label: '2 — Epik', to: '/docs/epik/' },
            { label: '3 — Lyrik', to: '/docs/lyrik/' },
            { label: '4 — Dramatik', to: '/docs/dramatik/' },
            { label: '5 — Epochen', to: '/docs/epochen/' },
            { label: '6 — Kommunikation', to: '/docs/kommunikation/' },
            { label: '7 — Schreiben', to: '/docs/schreiben/' },
            { label: '8 — Werkvergleich', to: '/docs/werkvergleich/' },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Kapitel 1–4',
          items: [
            { label: 'Sprachliche Mittel', to: '/docs/sprachliche-mittel/' },
            { label: 'Epik', to: '/docs/epik/' },
            { label: 'Lyrik', to: '/docs/lyrik/' },
            { label: 'Dramatik', to: '/docs/dramatik/' },
          ],
        },
        {
          title: 'Kapitel 5–8',
          items: [
            { label: 'Epochen', to: '/docs/epochen/' },
            { label: 'Kommunikation', to: '/docs/kommunikation/' },
            { label: 'Schreiben', to: '/docs/schreiben/' },
            { label: 'Werkvergleich', to: '/docs/werkvergleich/' },
          ],
        },
        {
          title: 'Mehr',
          items: [
            { label: 'Einführung', to: '/docs/intro' },
          ],
        },
      ],
      copyright: `Deutsch LK Lernplattform — ${new Date().getFullYear()}. Alle Textauszüge stammen aus gemeinfreien Quellen (Project Gutenberg).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
