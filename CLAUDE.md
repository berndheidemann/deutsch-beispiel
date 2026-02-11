# Deutsch LK Lernsituation — Projektkontext

## Ziel
Erstellung einer **interaktiven Lernplattform** für den Deutsch-Leistungskurs (Klasse 12) als Docusaurus-basierte Website mit eingebetteten React-Komponenten. Die Schüler sollen literarische Analyse, Sprachreflexion und Textproduktion nicht nur theoretisch lernen, sondern durch **aktive Interaktion** — inklusive Text-Annotation, Drag & Drop, interaktiven Visualisierungen und gamifizierten Übungen — ein tiefes Verständnis für Textarbeit und literaturwissenschaftliche Methoden entwickeln.

## Zielgruppe
- Gymnasium, Klasse 12, **Leistungskurs Deutsch**
- Orientierung am KMK-Rahmenlehrplan / Kernlehrplan Deutsch Sek II
- Didaktisch: kompetenzorientiert, handlungsorientiert, mit **interaktiven Übungen und analytischen Werkzeugen**
- Vorkenntnisse: Grundlagen der Textanalyse (Epik, Lyrik, Dramatik), gängige rhetorische Mittel, Basiswissen zu literarischen Epochen aus der Mittelstufe und EF/Q1

## Tech-Stack
- **Framework:** Docusaurus 3 mit React 18+ und TypeScript
- **Content-Format:** MDX (Markdown mit eingebetteten React-Komponenten)
- **Styling:** Tailwind CSS (via Docusaurus-Plugin) + Docusaurus-Theme-Customization
- **Interaktive Komponenten:**
  - Drag & Drop: `@dnd-kit/core` + `@dnd-kit/sortable`
  - Animationen: Framer Motion
  - Text-Annotation: Eigene React-Komponenten für interaktive Textmarkierung
- **Syntax/Code:** Docusaurus built-in Code-Blocks (für Beispielanalysen und Textauszüge)
- **Visualisierungen:** Eigene React/SVG-Komponenten für Epochen-Zeitstrahl, Figurenkonstellationen, Kommunikationsmodelle, Argumentationsstrukturen etc.
- **State Management:** Zustand für globalen State (Lernfortschritt, Übungsergebnisse), `useState` für lokalen Komponenten-State
- **Hosting:** GitHub Pages (Docusaurus built-in Deployment)
- **Testing:** Vitest + React Testing Library
- **Suche:** Docusaurus Algolia Search oder lokale Suche

## Docusaurus-Integration
Docusaurus bietet ein statisches Site-Framework mit nativem MDX-Support, sodass React-Komponenten direkt in Markdown-Inhalte eingebettet werden können. Dies ermöglicht:

### Technische Details
- **MDX-Seiten:** Jedes Kapitel ist ein MDX-Dokument, das neben Fließtext auch interaktive React-Komponenten enthält
- **Docs-Plugin:** Kapitel werden als Docusaurus-Docs mit Sidebar-Navigation organisiert
- **Custom Components:** Alle interaktiven Übungen sind React-Komponenten, die per `import` in MDX eingebunden werden
- **Swizzling:** Docusaurus-Theme-Komponenten werden bei Bedarf angepasst (z.B. für Custom-Layout, Fortschrittsanzeige)
- **Static Assets:** Textauszüge, Bilder und Mediendateien liegen im `static/`-Verzeichnis
- **Client-Only Components:** Interaktive Komponenten mit Browser-APIs (LocalStorage, Animationen) werden mit `<BrowserOnly>` oder `useIsBrowser()` geschützt

### MDX-Beispiel
```mdx
import { StilfigurDragDrop } from '@site/src/components/exercises/StilfigurDragDrop';
import { TextAnnotation } from '@site/src/components/interactive/TextAnnotation';

# Rhetorische Mittel erkennen

Lesen Sie den folgenden Textauszug und identifizieren Sie die sprachlichen Mittel:

<TextAnnotation
  text="Die Sonne lachte vom Himmel, während die Bäume ihre Arme gen Himmel streckten."
  annotations={[
    { start: 4, end: 16, label: "Personifikation", color: "blue" },
    { start: 30, end: 62, label: "Personifikation", color: "blue" }
  ]}
/>

Ordnen Sie nun die Stilfiguren den passenden Beispielen zu:

<StilfigurDragDrop exercises={stilfigurExercises} />
```

## Interaktive Didaktik-Elemente
Die Plattform nutzt die Möglichkeiten von React-in-MDX für folgende Lernformate. **Innovative, abwechslungsreiche Übungsformate sind ausdrücklich erwünscht** — über Standard-Quizze hinaus. Konkrete Ideen und Anforderungen für kapitelspezifische Übungen sind in `uebungsideen.md` dokumentiert.

### Text-Analyse-Werkzeuge (Kernformat)
- **Text-Annotation:** Interaktive Textmarkierung — Schüler markieren Textstellen und ordnen ihnen Kategorien zu (Stilmittel, Erzähltechnik, Argumentationstyp)
- **Vergleichsansicht:** Zwei Texte nebeneinander mit synchronem Scrollen und Vergleichsmarkierungen
- **Zitat-Analyse:** Textauszug mit ausklappbaren Analyse-Ebenen (sprachlich, inhaltlich, kontextuell)
- **Schrittweise Analyse:** Geführte Textanalyse, bei der Schüler Schritt für Schritt durch die Analyse-Methodik geführt werden

### Visuelle Darstellungen (SVG-basiert)
- **Epochen-Zeitstrahl:** Interaktive Timeline der Literaturepochen mit Merkmalen, Autoren und Werken
- **Figurenkonstellation:** SVG-Diagramm der Beziehungen zwischen Figuren eines Werks
- **Kommunikationsmodell-Visualizer:** Interaktives 4-Ohren-Modell (Schulz von Thun), Eisbergmodell, Organon-Modell
- **Argumentationsstruktur:** Visuelle Darstellung von Argumentationsketten (Sanduhr, Pingpong, etc.)
- **Spannungskurve:** Interaktive Darstellung des dramatischen Aufbaus (Freytags Pyramide, offene Dramenform)
- **Metrum-Visualizer:** Rhythmus-Darstellung mit Hebungen und Senkungen

### Interaktive Übungen
- **Drag & Drop:** Stilmittel zuordnen, Epochenmerkmale sortieren, Argumentationsbausteine ordnen, Reimschema-Puzzle
- **Text-Highlighting:** Bestimmte sprachliche Mittel im Text markieren
- **Lückentext:** Fachbegriffe ergänzen, Analyseformulierungen vervollständigen
- **Metrum-Klopfer:** Interaktives Metrum-Training — Schüler klicken den Rhythmus eines Verses
- **Epochen-Zuordnung:** Textauszüge der richtigen Epoche zuordnen (mit Begründung)
- **Figurencharakterisierung:** Eigenschaften und Zitate den richtigen Figuren zuordnen
- **Timed Challenges:** Schnelltrainer für Stilmittel-Erkennung, Epochen-Zuordnung, Reimschema-Bestimmung

### Quiz-Formate
- Multiple-Choice zu Epochenmerkmalen, Stilmitteln, Kommunikationsmodellen
- Wahr/Falsch-Fragen mit Erklärungen zu Analysekonzepten
- Fehlersuche in Beispielanalysen (fehlerhafte Fachbegriffe, falsche Zuordnungen)

### Schreibwerkstatt-Komponenten
- **Formulierungshilfen:** Interaktive Auswahl von Analyse-Bausteinen (Einleitung, Überleitung, Schluss)
- **Argumentations-Builder:** Schüler bauen per Drag & Drop eine Erörterungsstruktur auf
- **Textüberarbeitungs-Tool:** Schüler identifizieren Schwachstellen in Beispieltexten und verbessern sie

### Fortschrittssystem
- Speicherung des Lernfortschritts (LocalStorage)
- Badges/Achievements für abgeschlossene Module
- Übersicht über bearbeitete Aufgaben und gelöste Challenges

## Sprache
- Alle Inhalte auf **Deutsch**
- Fachbegriffe werden beim ersten Auftreten erklärt, z.B. „Anapher (Wiederholung eines Wortes/einer Wortgruppe am Satzanfang)"
- Lateinische/griechische Fachbegriffe werden etymologisch erläutert, wo es dem Verständnis dient
- Zitate und Textauszüge im Original (ggf. mit Worterklärungen bei älteren Texten)

## Themen-Kapitel (Scope)
1. **Sprachliche Mittel & Stilistik** — Rhetorische Mittel systematisch, Wirkungsanalyse, Stilebenen, Bildsprache (Metapher, Allegorie, Symbol)
2. **Textanalyse Epik** — Erzähltechnik (Erzählperspektive, Zeitgestaltung, Raumgestaltung), Figurenanalyse, Erzählerbericht vs. Figurenrede, Erzählsituationen nach Stanzel
3. **Textanalyse Lyrik** — Metrum & Rhythmus, Reimschema, Strophenformen, Bildsprache in der Lyrik, lyrisches Ich, Epochenzuordnung von Gedichten
4. **Textanalyse Dramatik** — Dramentheorie (aristotelisch vs. episches Theater), Figurenkonstellation, Dialoganalyse, Regieanweisungen, Spannungskurve
5. **Literaturepochen** — Aufklärung, Sturm und Drang, Weimarer Klassik, Romantik, Realismus, Naturalismus, Expressionismus, Neue Sachlichkeit, Nachkriegsliteratur, Gegenwartsliteratur
6. **Kommunikation & Sprache** — Kommunikationsmodelle (Schulz von Thun, Watzlawick, Bühler), Sprachfunktionen, Sprachwandel, Sprachkritik, Mehrsprachigkeit
7. **Erörterung & Materialgestütztes Schreiben** — Argumentationstypen, Erörterungsformen (linear, dialektisch), Essay, materialgestütztes Schreiben, Zitiertechnik
8. **Werkvergleich & Motivanalyse** — Vergleichende Analyse, Motivgeschichte, epochenübergreifende Themen (Identität, Natur, Gesellschaft, Liebe), intertextuelle Bezüge

## Konventionen
- **Komponentenstruktur:** Eine React-Komponente pro Übungsformat/Feature
- **Dateinamen:** PascalCase für Komponenten (`StilfigurDragDrop.tsx`), kebab-case für Utilities
- **Content-Dateien:** MDX-Dateien im `docs/`-Verzeichnis, eine pro Kapitel/Unterkapitel
- **Visualisierungen:** Eigene React/SVG-Komponenten, keine externen Charting-Bibliotheken
- **Jedes Kapitel enthält:** Theorie-Abschnitte (MDX), visuelles/interaktives Beispiel, interaktive Übungen, mindestens eine vertiefte Analyse-Aufgabe
- **Aufgaben** sind praxisnah und beziehen sich auf Abitur-relevante Kompetenzen

## Projektstruktur (Docusaurus)
```
deutsch_lk_lernsituation/
├── CLAUDE.md
├── skills.md
├── uebungsideen.md
├── package.json
├── docusaurus.config.ts
├── tsconfig.json
├── sidebars.ts
├── tailwind.config.js
├── static/
│   ├── img/
│   └── texte/                          # Textauszüge als Referenzmaterial
├── docs/
│   ├── intro.mdx                       # Startseite / Übersicht
│   ├── 01-sprachliche-mittel/
│   │   ├── index.mdx                   # Kapitelübersicht
│   │   ├── rhetorische-mittel.mdx      # Theorie + Übungen
│   │   ├── bildsprache.mdx             # Metapher, Allegorie, Symbol
│   │   └── wirkungsanalyse.mdx         # Stilanalyse in der Praxis
│   ├── 02-epik/
│   │   ├── index.mdx
│   │   ├── erzaehltechnik.mdx
│   │   ├── figurenanalyse.mdx
│   │   └── zeitgestaltung.mdx
│   ├── 03-lyrik/
│   │   ├── index.mdx
│   │   ├── metrum-reimschema.mdx
│   │   ├── bildsprache-lyrik.mdx
│   │   └── gedichtanalyse.mdx
│   ├── 04-dramatik/
│   │   ├── index.mdx
│   │   ├── dramentheorie.mdx
│   │   ├── dialoganalyse.mdx
│   │   └── figurenkonstellation.mdx
│   ├── 05-epochen/
│   │   ├── index.mdx
│   │   ├── aufklaerung-sturm-und-drang.mdx
│   │   ├── klassik-romantik.mdx
│   │   ├── realismus-naturalismus.mdx
│   │   ├── expressionismus-moderne.mdx
│   │   └── nachkrieg-gegenwart.mdx
│   ├── 06-kommunikation/
│   │   ├── index.mdx
│   │   ├── kommunikationsmodelle.mdx
│   │   ├── sprachwandel.mdx
│   │   └── sprachreflexion.mdx
│   ├── 07-schreiben/
│   │   ├── index.mdx
│   │   ├── eroerterung.mdx
│   │   ├── essay.mdx
│   │   └── materialgestuetztes-schreiben.mdx
│   └── 08-werkvergleich/
│       ├── index.mdx
│       ├── vergleichende-analyse.mdx
│       └── motivgeschichte.mdx
├── src/
│   ├── css/
│   │   └── custom.css
│   ├── pages/
│   │   └── index.tsx                   # Landing Page
│   ├── components/
│   │   ├── common/
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── ContentBlock.tsx        # Wiederverwendbare Content-Blöcke (Info, Tip, Warning etc.)
│   │   ├── exercises/
│   │   │   ├── DragDropExercise.tsx     # Generische Drag & Drop Übung
│   │   │   ├── MultipleChoice.tsx
│   │   │   ├── Lueckentext.tsx
│   │   │   ├── TimedChallenge.tsx
│   │   │   ├── TextHighlighting.tsx    # Stilmittel/Textstellen markieren
│   │   │   ├── StilfigurDragDrop.tsx   # Stilmittel ↔ Beispiele zuordnen
│   │   │   ├── EpochenZuordnung.tsx    # Texte/Merkmale ↔ Epochen
│   │   │   ├── ArgumentBuilder.tsx     # Erörterungsstruktur aufbauen
│   │   │   ├── MetrumKlopfer.tsx       # Interaktives Metrum-Training
│   │   │   ├── ReimschemaQuiz.tsx      # Reimschema erkennen und zuordnen
│   │   │   ├── FehlerSuche.tsx         # Fehler in Beispielanalysen finden
│   │   │   └── FigurenZuordnung.tsx    # Eigenschaften/Zitate ↔ Figuren
│   │   ├── interactive/
│   │   │   ├── TextAnnotation.tsx      # Interaktive Textmarkierung
│   │   │   ├── TextVergleich.tsx       # Zwei Texte nebeneinander
│   │   │   ├── SchrittweiseAnalyse.tsx # Geführte Analyse
│   │   │   └── SchreibAssistent.tsx    # Formulierungshilfen
│   │   └── visualizations/
│   │       ├── EpochenZeitstrahl.tsx   # Interaktive Timeline
│   │       ├── Figurenkonstellation.tsx # SVG-Beziehungsdiagramm
│   │       ├── KommunikationsModell.tsx # 4-Ohren-Modell, Eisberg etc.
│   │       ├── Spannungskurve.tsx      # Dramatischer Aufbau
│   │       ├── MetrumVisualizer.tsx    # Hebungen/Senkungen
│   │       ├── ArgumentationsStruktur.tsx # Argumentationsketten
│   │       └── StilmittelKarte.tsx     # Visualisierung von Stilmitteln im Kontext
│   ├── hooks/
│   │   ├── useProgress.ts
│   │   └── useExercise.ts
│   ├── store/
│   │   └── progressStore.ts            # Zustand Store
│   ├── data/
│   │   ├── stilmittel.ts              # Stilmittel-Datenbank
│   │   ├── epochen.ts                 # Epochen-Daten
│   │   ├── exercises/                 # Übungsdaten pro Kapitel
│   │   └── texte/                     # Textauszüge als Datenstrukturen
│   └── types/
│       └── index.ts
└── tests/
```

## Durchgängige Textbasis
Alle Aufgaben und Beispiele beziehen sich auf eine kuratierte Auswahl von Texten, die sich wie ein roter Faden durch die Kapitel ziehen. Diese Texte decken verschiedene Gattungen und Epochen ab und ermöglichen epochenübergreifende Vergleiche:

- **Textkorpus (alle Texte gemeinfrei, Quelle: Project Gutenberg):**
  - **Epik:**
    - Franz Kafka – „Die Verwandlung" ([gutenberg.org #22367](https://www.gutenberg.org/ebooks/22367)) — Expressionismus/Moderne
    - Theodor Fontane – „Effi Briest" ([gutenberg.org #5323](https://www.gutenberg.org/ebooks/5323)) — Poetischer Realismus
    - E.T.A. Hoffmann – „Der Sandmann" ([gutenberg.org #6341](https://www.gutenberg.org/ebooks/6341), in „Nachtstücke") — Romantik
    - Franz Kafka – „Der Prozess" ([gutenberg.org #7849](https://www.gutenberg.org/ebooks/7849)) — Moderne (für Werkvergleich)
    - Theodor Storm – „Der Schimmelreiter" ([gutenberg.org #74008](https://www.gutenberg.org/ebooks/74008)) — Realismus
    - Thomas Mann – „Der Tod in Venedig" (gemeinfrei seit 2026, [projekt-gutenberg.org](https://www.projekt-gutenberg.org)) — Moderne
  - **Lyrik:**
    - Goethe – „Willkommen und Abschied" ([projekt-gutenberg.org](https://www.projekt-gutenberg.org/goethe/gedichte/index.html)) — Sturm und Drang
    - Goethe – „Wandrers Nachtlied" ([projekt-gutenberg.org](https://www.projekt-gutenberg.org/goethe/gedichte/index.html)) — Klassik
    - Eichendorff – „Mondnacht" ([projekt-gutenberg.org](https://www.projekt-gutenberg.org/eichndrf/gedichte/gedichte.html)) — Romantik
    - Heine – Gedichte aus „Buch der Lieder" ([gutenberg.org #3498](https://www.gutenberg.org/ebooks/3498)) — Spätromantik
    - Novalis – „Hymnen an die Nacht" ([gutenberg.org #43821](https://www.gutenberg.org/ebooks/43821)) — Frühromantik
    - Georg Trakl – Gedichte ([projekt-gutenberg.org](https://www.projekt-gutenberg.org/trakl/gedichte/gedichte.html)) — Expressionismus
    - Rilke – „Neue Gedichte" ([gutenberg.org #33863](https://www.gutenberg.org/ebooks/33863)) — Moderne
    - Mörike – „Er ist's" u.a. ([gutenberg.org #56641](https://www.gutenberg.org/ebooks/56641)) — Biedermeier/Realismus
  - **Dramatik:**
    - Schiller – „Kabale und Liebe" ([gutenberg.org #6498](https://www.gutenberg.org/ebooks/6498)) — Sturm und Drang / Klassik
    - Lessing – „Nathan der Weise" ([gutenberg.org #9186](https://www.gutenberg.org/ebooks/9186)) — Aufklärung
    - Goethe – „Faust I" ([gutenberg.org #2229](https://www.gutenberg.org/ebooks/2229)) — Klassik
    - Büchner – „Woyzeck" ([projekt-gutenberg.org](https://www.projekt-gutenberg.org/buechner/woyzeck/woyzeck.html)) — Vormärz
    - Hauptmann – „Die Weber" ([projekt-gutenberg.org](https://www.projekt-gutenberg.org/hauptmag/weberdia/weberdia.html)) — Naturalismus
  - **Sachtexte:** Gemeinfreie Reden, Essays und Abhandlungen (z.B. Schiller: „Was heißt und zu welchem Ende studiert man Universalgeschichte?", Lessing: Hamburgische Dramaturgie)

- **Analyse-Aufgaben durch die Kapitel hindurch:**
  - **Kap. 1 (Sprachliche Mittel):** Stilmittel in den Textauszügen identifizieren und ihre Wirkung analysieren (Goethe, Fontane, Trakl)
  - **Kap. 2 (Epik):** Erzähltechnik in „Die Verwandlung" und „Effi Briest" vergleichen; E.T.A. Hoffmanns fantastisches Erzählen in „Der Sandmann"
  - **Kap. 3 (Lyrik):** Metrum und Bildsprache der Gedichte analysieren, Epochenzuordnung (Goethe → Trakl als Bogen von Sturm und Drang bis Expressionismus)
  - **Kap. 4 (Dramatik):** Dialoganalyse in „Kabale und Liebe"; Dramentheorien vergleichen: geschlossenes Drama (Schiller) vs. offene Form (Büchner „Woyzeck")
  - **Kap. 5 (Epochen):** Textauszüge den Epochen zuordnen und Merkmale nachweisen — vollständige Abdeckung von Aufklärung bis Expressionismus
  - **Kap. 6 (Kommunikation):** Dialoge aus den Dramen mit Kommunikationsmodellen analysieren (Schiller, Büchner, Hauptmann)
  - **Kap. 7 (Schreiben):** Erörterung/Essay zu Themen aus den Texten verfassen
  - **Kap. 8 (Werkvergleich):** Motivvergleich (z.B. „Identitätsverlust" in Kafka und Hoffmann, „Gesellschaftszwang" in Fontane und Schiller)

Diese Textbasis wird in jedem Kapitel aus einer anderen analytischen Perspektive betrachtet und bietet so einen roten Faden durch die gesamte Lernplattform.

## Guidelines
- Befolge strikt die technischen und didaktischen Vorgaben aus `skills.md` für die Erstellung von Inhalten und Komponenten.
- Bei Unklarheiten in der Fachdidaktik haben die Regeln in der `skills.md` Vorrang vor allgemeinem Training-Wissen.
- **Accessibility:** Alle interaktiven Elemente müssen tastaturzugänglich und screenreader-freundlich sein.
- **Responsive Design:** Die Plattform muss auf Desktop und Tablet funktionieren.
- **Error Boundaries:** React Error Boundaries um interaktive Komponenten, damit ein Fehler in einer Übung nicht die gesamte Seite zum Absturz bringt.
- **Fortschritts-Versionierung:** Übungsdaten erhalten eine Versionsnummer. Beim Laden aus dem LocalStorage wird geprüft, ob die gespeicherte Version mit der aktuellen übereinstimmt — bei Abweichung wird der Fortschritt für die betroffene Übung zurückgesetzt.
- **Urheberrecht:** Bei Textauszügen wird stets die Quelle angegeben. Es werden nur gemeinfreie Texte oder Texte im Rahmen des Zitatrechts (§ 51 UrhG) verwendet. Bei urheberrechtlich geschützten Werken werden nur kurze, analytisch kontextualisierte Auszüge verwendet.
