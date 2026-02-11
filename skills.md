
### 1. Technischer Skill: React, TypeScript & Docusaurus

- **Komponentenarchitektur:** Funktionale Komponenten mit Hooks, keine Klassenkomponenten. Aufteilung in kleine, wiederverwendbare Komponenten.
- **TypeScript:** Strikte Typisierung für Props, State und Daten. Interfaces für alle Datenstrukturen.
- **Docusaurus-spezifisch:**
  - Interaktive Komponenten werden in MDX-Dateien per `import` eingebunden
  - Client-Only-Rendering mit `<BrowserOnly>` für Komponenten, die Browser-APIs nutzen (LocalStorage, Animationen, Drag & Drop)
  - Docusaurus-Admonitions (`:::tip`, `:::warning` etc.) für einfache Hinweisboxen, Custom-Komponenten für komplexere Formate
  - Swizzling nur wo nötig (z.B. für globale Fortschrittsanzeige oder Custom-Footer)
  - `@site/src/...`-Imports für projektinterne Module
- **State Management:**
  - Lokaler State mit `useState` für Komponenten-spezifische Daten
  - Zustand (Store) für globalen Lernfortschritt und Übungsergebnisse
  - Custom Hooks für wiederverwendbare Logik
- **Styling:** Tailwind CSS mit konsistentem Design-System, ergänzt durch Docusaurus-Theme-Variablen (`--ifm-*`).
- **Performance:** React.memo, useMemo, useCallback wo sinnvoll. Docusaurus lazy-loads Seiten automatisch.
- **Error Handling:** React Error Boundaries um interaktive Komponenten, damit einzelne Komponentenfehler nicht die gesamte Seite crashen.

---

### 2. Technischer Skill: Interaktive Komponenten

Die Plattform nutzt eine **breite Palette an Übungsformaten** (siehe `uebungsideen.md` für kapitelspezifische Details). Die folgenden Komponentenarten werden benötigt:

#### Text-Interaktions-Komponenten

- **TextAnnotation (Kernkomponente):**
  - Zeigt einen Textauszug an, in dem Schüler Textstellen markieren können
  - Markierungen werden farblich kategorisiert (z.B. Blau = Stilmittel, Grün = Erzähltechnik, Orange = Schlüsselbegriff)
  - Modus 1 (Entdecken): Schüler markieren frei und ordnen Kategorien zu → Validierung gegen Musterlösung
  - Modus 2 (Anzeigen): Vordefinierte Markierungen werden angezeigt, Schüler klicken für Erklärungen
  - Touch-Support für Tablet-Nutzung (Long-Press zum Markieren)
  - Accessibility: Markierungen auch per Tastatur navigierbar, ARIA-Labels für Screenreader

- **TextVergleich:**
  - Zwei Textauszüge nebeneinander (Side-by-Side auf Desktop, Tabs auf Mobile)
  - Synchrones Scrollen optional aktivierbar
  - Markierungen in beiden Texten gleichzeitig möglich (z.B. für Motivvergleich)
  - Verbindungslinien zwischen korrespondierenden Stellen (SVG-Overlay)
  - Einsatz: Werkvergleich, Epochenvergleich, Textvarianten

- **SchrittweiseAnalyse:**
  - Geführte Analyse in Schritten (Wizard-Stil): z.B. 1. Inhalt zusammenfassen → 2. Sprachliche Mittel markieren → 3. Wirkung beschreiben → 4. Kontext einordnen
  - Jeder Schritt hat eine Aufgabe und ein Eingabe-/Interaktionsfeld
  - Fortschrittsanzeige (Schritt X von Y)
  - Optionale Hinweise pro Schritt
  - Einsatz: Gedichtanalyse, Szenenanalyse, Redeanalyse

#### Drag & Drop-Komponenten

- **Generisches DragDropExercise:**
  - Verwendung von `@dnd-kit/core` für moderne, accessible Drag & Drop Funktionalität
  - Klare visuelle Feedback-Zustände (dragging, drop-zone active, success, error)
  - Touch-Support für Tablet-Nutzung
  - Varianten:
    - **Zuordnung:** Items zu Kategorien ziehen (1:1 oder n:1)
    - **Sortierung:** Items in die richtige Reihenfolge bringen
    - **Lücken füllen:** Items in Lücken innerhalb eines Textes/Schemas ziehen

- **StilfigurDragDrop:**
  - Links: Stilmittel-Karten mit Name und Kurzdefiniton
  - Rechts: Beispielsätze als Drop-Zonen
  - Bei korrekter Zuordnung: grüner Rahmen + Wirkungserklärung einblenden
  - Bei falscher Zuordnung: roter Rahmen + Hinweis (z.B. „Das ist kein Vergleich, sondern eine Metapher — wo ist das ‚wie'?")
  - Einsatz: Stilmittel-Training, Epochenmerkmale zuordnen

- **EpochenZuordnung:**
  - Textauszüge oder Merkmale als Karten, Epochen als Drop-Zonen auf einem Zeitstrahl
  - Multi-Drop möglich (ein Merkmal kann zu mehreren Epochen passen)
  - Einsatz: Epochenüberblick, Epochenmerkmale identifizieren

- **ArgumentBuilder:**
  - Drag & Drop-Bausteine (These, Argument, Beleg, Beispiel, Gegenargument, Entkräftung, Fazit)
  - Schüler bauen eine Erörterungsstruktur auf (linear oder dialektisch)
  - Validierung: Strukturelle Prüfung (z.B. „Auf jedes Argument sollte ein Beleg folgen")
  - Einsatz: Erörterungsaufbau üben

#### Quiz- & Eingabe-Komponenten

- **MultipleChoice:**
  - Single-Choice (Radio) oder Multi-Choice (Checkbox)
  - Erklärungen nach Beantwortung (warum richtig/falsch)
  - Optionale Shuffle-Funktion für Antwort-Reihenfolge
  - Variante: Wahr/Falsch mit Erklärung

- **Lueckentext:**
  - Eingabefelder innerhalb eines Fließtextes
  - Sofortige Validierung mit Toleranz (z.B. Groß-/Kleinschreibung, Synonyme)
  - Optionale Hinweise bei falschen Antworten
  - Variante: Dropdown-Auswahl statt Freitext
  - Einsatz: Fachbegriffe ergänzen, Analyseformulierungen vervollständigen

- **TimedChallenge:**
  - Countdown-Timer mit visuellem Feedback
  - Schnelle Entscheidungsaufgaben unter Zeitdruck
  - Punkte-System und Highscore
  - Einsatz: Stilmittel-Erkennung, Epochen-Zuordnung, Reimschema-Bestimmung

- **FehlerSuche:**
  - Text einer Beispielanalyse mit eingebauten Fehlern (falsche Fachbegriffe, fehlerhafte Zuordnungen, logische Fehler)
  - Schüler klicken auf die fehlerhafte Stelle und wählen die Korrektur
  - Einsatz: Analyse-Kompetenz vertiefen, typische Fehler erkennen

#### Fachspezifische Übungskomponenten

- **MetrumKlopfer:**
  - Ein Vers wird angezeigt, Silben sind als klickbare Elemente dargestellt
  - Schüler klicken auf betonte Silben (Hebungen) — unbetonte bleiben unmarkiert
  - Visuelles Feedback: Hebung (▬) und Senkung (◡) werden angezeigt
  - Automatische Erkennung des Metrums (Jambus, Trochäus, Daktylus, Anapäst)
  - Optional: Audio-Feedback (Klopfgeräusch bei Hebung)
  - Einsatz: Metrum-Training

- **ReimschemaQuiz:**
  - Gedichtstrophe wird angezeigt, Versenden sind farblich markierbar
  - Schüler weisen jedem Vers einen Buchstaben zu (a, b, c, ...)
  - Automatische Erkennung des Reimschemas (Kreuzreim, Paarreim, umarmender Reim etc.)
  - Einsatz: Reimschema-Erkennung

- **FigurenZuordnung:**
  - Figuren eines Werks als Karten mit Bild/Name
  - Eigenschaften, Zitate und Handlungen als zuordenbare Items
  - Drag & Drop oder Klick-Zuordnung
  - Einsatz: Figurencharakterisierung, Figurenkonstellation verstehen

#### Visualisierungs-Komponenten (SVG-basiert)

- **EpochenZeitstrahl:**
  - Horizontale Timeline von ca. 1720 bis Gegenwart
  - Epochen als farbcodierte Bereiche (mit Überlappungen, da Epochen fließend übergehen)
  - Klick auf eine Epoche: Merkmale, wichtige Autoren, Schlüsselwerke einblenden
  - Zoom: Von Überblick zu Detailansicht einer einzelnen Epoche
  - Markierung der Textkorpus-Werke auf dem Zeitstrahl
  - Hover zeigt Kurzinfo, Klick öffnet Detail-Panel

- **Figurenkonstellation:**
  - SVG-Knoten für jede Figur (mit Name und kurzer Beschreibung)
  - Verbindungslinien mit beschrifteten Beziehungen (Liebe, Konflikt, Abhängigkeit, Familie etc.)
  - Farbcodierung: Positive Beziehungen grün, Konflikte rot, neutrale grau
  - Interaktiv: Klick auf eine Figur hebt ihre Beziehungen hervor, blendet andere ab
  - Optional: Animierter Aufbau der Konstellation Schritt für Schritt
  - Einsatz: „Kabale und Liebe", „Woyzeck", „Die Weber", „Effi Briest"

- **KommunikationsModell:**
  - **4-Ohren-Modell (Schulz von Thun):** Nachricht als Quadrat mit vier Seiten (Sachinhalt, Appell, Beziehung, Selbstoffenbarung). Schüler geben eine Nachricht ein → die vier Ebenen werden interaktiv aufgefächert
  - **Organon-Modell (Bühler):** Dreiecks-Darstellung (Ausdruck, Darstellung, Appell) mit interaktiver Zuordnung
  - **Eisbergmodell:** Interaktive Grafik — Schüler ordnen explizite und implizite Kommunikationsaspekte zu
  - **Watzlawick-Axiome:** Visualisierung mit Beispieldialogen
  - Einsatz: Dramen-Dialoge analysieren, Alltagskommunikation verstehen

- **Spannungskurve:**
  - SVG-Darstellung von Freytags Pyramide (Exposition, Steigende Handlung, Klimax/Peripetie, Fallende Handlung, Katastrophe/Lösung)
  - Interaktiv: Schüler ordnen Szenen eines Dramas den Phasen zu (Drag & Drop auf die Kurve)
  - Alternativ: Offene Dramenform (episches Theater) als Kontrastdarstellung
  - Einsatz: Dramenanalyse, Vergleich geschlossene vs. offene Dramenform

- **MetrumVisualizer:**
  - Vers als Silbenreihe, Hebungen und Senkungen als visuelle Muster (▬ oben / ◡ unten)
  - Versfuß-Klammern darunter (xX = Jambus, Xx = Trochäus etc.)
  - Kadenz-Markierung (männlich/weiblich)
  - Einsatz: Ergänzung zum MetrumKlopfer, Darstellung des Ergebnisses

- **ArgumentationsStruktur:**
  - Visuelle Darstellung verschiedener Erörterungsmodelle:
    - **Sanduhr-Modell:** Vom Allgemeinen zum Spezifischen und zurück
    - **Pingpong-Modell:** These ↔ Gegenthese im Wechsel
    - **Linearer Aufbau:** Argument → Argument → Argument → Fazit
  - Interaktiv: Schüler füllen die Struktur mit eigenen Argumenten
  - Einsatz: Erörterungsvorbereitung

- **StilmittelKarte:**
  - Textauszug als zentrale Ansicht
  - Markierte Stilmittel mit farbigen Unterstreichungen
  - Klick auf Markierung öffnet Detailkarte: Name, Definition, Wirkung im Kontext, weitere Beispiele
  - Überblicksmodus: Alle gefundenen Stilmittel als Karten-Grid daneben
  - Einsatz: Stilanalyse visuell aufbereiten

---

### 3. Didaktischer Skill: Interaktives Content-Design

- **Fachbegriff-Einführung:** Fachbegriffe werden bei der ersten Erwähnung erklärt — als `<dfn>` mit Tooltip. Lateinische/griechische Etymologie wo hilfreich, z.B. „Anapher (gr. anaphorá = das Hinauftragen, Wiederholung)". Der Begriff wird visuell hervorgehoben (leichter Hintergrund + Tooltip).

- **Strukturvorgabe für jede Lerneinheit:**
  1. **Theorie-Sektion:** Systematische Einführung des Konzepts:
     - Motivation: Warum ist dieses Konzept wichtig? (Bezug zum Abitur und zur Textarbeit)
     - Erklärung mit Textbeispielen aus dem Textkorpus
     - Visualisierungen (SVG-Komponenten) zur Veranschaulichung
     - Merkkästen, Tipps und Warnungen (Docusaurus-Admonitions + Custom-Komponenten)
     - Interaktive Elemente: aufklappbare Details, Hover-Erklärungen
     - Die Theorie-Sektion ist der zentrale Lerninhalt — nicht nur ein kurzer Vorspann vor den Übungen.
  2. **Interaktives Beispiel:** Schrittweiser Aufbau eines Konzepts, das der Schüler durch Klicken/Interaktion nachvollzieht (z.B. eine geführte Gedichtanalyse, eine interaktive Figurenkonstellation).
  3. **Übungen:** Mindestens 2–3 interaktive Aufgaben pro Thema, davon mindestens eine analytische Textarbeit (siehe `uebungsideen.md` für kapitelspezifische Formate)

- **Automatisches Feedback-System (Kernprinzip):**
  Jede interaktive Übung gibt **sofortiges, automatisches Feedback**. Kein Scoring, keine Noten — sondern **inhaltliche Rückmeldung** zur Lernunterstützung.

  **Grundprinzipien:**
  - **Sofort:** Feedback erscheint direkt nach jeder Interaktion (Klick, Drop, Eingabe) — kein „Abgabe"-Button für geschlossene Formate
  - **Konstruktiv:** Bei Fehlern gezielte Hinweise statt nur „Falsch" — z.B. „Das ist eine Metapher, kein Vergleich. Tipp: Bei einem Vergleich steht ein ‚wie' oder ‚als'."
  - **Fachlich:** Feedback verwendet korrekte Fachterminologie und verweist auf die relevante Theorie
  - **Differenziert:** Unterschiedliche Fehler erhalten unterschiedliches Feedback (nicht generisch „Leider falsch")
  - **Ermunternd:** Korrekte Antworten werden positiv bestätigt (visuelles Häkchen, kurze Bestätigung), ohne übertriebenes Lob
  - **Lernfördernd:** Feedback erklärt das *Warum* — nicht nur, was richtig ist, sondern warum es richtig ist

  **Feedback-Mechanismen nach Übungsformat:**

  | Format | Auslöser | Feedback |
  |--------|----------|----------|
  | **Drag & Drop** (Zuordnung, Sortierung) | Sofort bei jedem Drop | ✓ grüner Rahmen + weiterführende Info (z.B. Wirkungserklärung) / ✗ roter Rahmen + Hinweis auf Unterscheidungskriterium. Element springt bei Fehler zurück. |
  | **Multiple Choice** | Nach Antwortauswahl | Alle Optionen werden markiert (richtig/falsch). **Jede Option** erhält eine Erklärung — SuS lernen auch aus den Distraktoren. |
  | **Lückentext** | Sofort nach Eingabe (Enter oder Fokusverlust) | ✓/✗ mit Toleranz (Synonyme, Groß-/Kleinschreibung). Bei Fehler: Hinweis (z.B. „Gesucht ist der Konjunktiv I"). Nach 2 Fehlversuchen: „Tipp anzeigen"-Button. |
  | **TextAnnotation** (Markieren im Text) | „Prüfen"-Button nach Markierung | Korrekte Markierungen: grün. Übersehene Stellen: blau nachmarkiert. Falsche Markierungen: rot + Erklärung. Toleranz: ±1–2 Wörter bei Markierungsgrenzen. |
  | **MetrumKlopfer** | Nach Abschluss eines Verses | Falsch gesetzte Hebungen werden korrigiert angezeigt. Versfuß wird benannt + Wirkung beschrieben. Optional: Audio-Muster zum Vergleich. |
  | **ReimschemaQuiz** | Nach Zuordnung aller Verse | Falsche Buchstaben werden korrigiert. Erklärung des Reimschemas + Benennung + Wirkungsbeschreibung. |
  | **TimedChallenge** | Sofort nach jeder Antwort | ✓/✗ pro Frage mit Kurzfeedback. Am Ende: Zusammenfassung aller Fehler mit ausführlichen Erklärungen. |
  | **FehlerSuche** | Bei Klick auf eine Textstelle | „Richtig erkannt!" + Erklärung des Fehlers, oder „Diese Stelle ist korrekt." Übersehene Fehler werden nach Abschluss hervorgehoben + erklärt. |
  | **ArgumentBuilder** | „Prüfen"-Button nach Strukturaufbau | Strukturelle Prüfung: „Jedes Argument braucht einen Beleg", „Gegenargument ohne Entkräftung", „Fazit darf kein neues Argument enthalten". Korrekte Strukturen: ✓-Markierung. |
  | **SchrittweiseAnalyse** | Pro Schritt nach Abgabe | Geschlossene Schritte (MC, Zuordnung): sofort ✓/✗. Offene Schritte (Freitext): Musterlösung + Checkliste zur Selbsteinschätzung. |
  | **TextVergleich** | Nach Abschluss der Annotationen | Musterlösung wird eingeblendet. Checkliste: „Habe ich Sprache verglichen? Bildsprache? Epochenmerkmale? Form?" |
  | **FigurenZuordnung** | Sofort bei jeder Zuordnung | ✓/✗ + Erklärung (z.B. „Dieses Zitat stammt von Effi, nicht von Innstetten — achte auf die emotionale, unsichere Sprache"). |

  **Freitext-Feedback (bei offenen Aufgaben, AFB II/III):**
  Vollautomatische inhaltliche Bewertung von Freitext ist nicht möglich. Stattdessen werden vier Feedback-Ebenen kombiniert:
  1. **Musterlösung:** Wird nach Abgabe angezeigt — Schüler vergleichen eigenständig
  2. **Checkliste zur Selbsteinschätzung:** Interaktive Checkboxen (z.B. „☐ Einleitungssatz mit Autor, Titel, Textsorte, Jahr", „☐ Mindestens 2 Stilmittel mit Textstelle benannt", „☐ Wirkung im Kontext analysiert", „☐ Epochenbezug hergestellt")
  3. **Schlüsselbegriff-Hinweis** (automatisch): Grundlegende Keyword-Erkennung prüft, ob zentrale Fachbegriffe vorkommen — z.B. „Deine Antwort enthält keinen Bezug zu ‚Personifikation' — hast du die bildliche Sprache berücksichtigt?"
  4. **Strukturhinweis** (automatisch): Prüfung auf formale Kriterien — Mindestlänge, Zitatverwendung (Anführungszeichen + Versangabe erkannt?), Einleitungssatz vorhanden?

- **Zielgruppen-Fokus (LK Klasse 12):**
  - Abitur-Orientierung: Aufgabenformate orientieren sich an typischen Abituraufgaben (Textanalyse, Erörterung, Werkvergleich)
  - Anspruchsvolles Niveau: Nicht nur Reproduktion, sondern Transfer und Bewertung
  - Eigenständige Textarbeit: Schüler werden befähigt, auch unbekannte Texte systematisch zu analysieren
  - Intertextualität: Querverweise zwischen Texten, Epochen und Motiven werden aktiv gefördert

---

### 4. Skill: Aufgaben-Design (KMK-Konformität, interaktiv umgesetzt)

Aufgaben werden in drei Anforderungsbereichen interaktiv gestaltet. **Innovative, abwechslungsreiche Formate sind bevorzugt** — konkrete kapitelspezifische Übungsideen sind in `uebungsideen.md` dokumentiert.

- **AFB I (Reproduktion):**
  - Multiple-Choice: Fachbegriffe, Stilmittel, Epochenmerkmale erkennen
  - Lückentext: Fachbegriffe einsetzen, Definitionen vervollständigen
  - Drag & Drop: Stilmittel zuordnen, Epochen/Merkmale matchen, Reimschemata identifizieren
  - Timed Challenges: Schnelltrainer für Stilmittel-Erkennung, Epochen-Zuordnung
  - MetrumKlopfer: Hebungen und Senkungen markieren
  - Reimschema-Quiz: Reimschema eines Gedichts bestimmen

- **AFB II (Transfer/Reorganisation):**
  - TextAnnotation: Stilmittel in unbekannten Texten markieren und kategorisieren
  - SchrittweiseAnalyse: Geführte Analyse eines Textauszugs
  - FigurenZuordnung: Eigenschaften und Zitate den Figuren eines Werks zuordnen
  - EpochenZuordnung: Unbekannte Textauszüge der richtigen Epoche zuordnen (mit Begründung)
  - ArgumentBuilder: Eine Erörterungsstruktur zu einem vorgegebenen Thema aufbauen
  - FehlerSuche: Fehler in Beispielanalysen finden und korrigieren
  - TextVergleich: Zwei Texte vergleichend annotieren

- **AFB III (Reflexion/Bewertung):**
  - Freie Textanalyse: Unbekannter Text, offene Analyse-Aufgabe
  - Werkvergleich: Zwei Texte unter einer Fragestellung vergleichen
  - Essay/Erörterung: Materialgestütztes Schreiben zu einem vorgegebenen Thema
  - Kritische Bewertung: Zwei Beispielanalysen vergleichen und die bessere begründen
  - Epochen-Grenzfälle: Texte, die Merkmale mehrerer Epochen tragen — Schüler argumentieren für eine Zuordnung

---

### 5. Skill: Accessibility & UX

- **Tastaturnavigation:** Alle interaktiven Elemente mit Tab erreichbar, Drag & Drop auch per Tastatur steuerbar
- **Screenreader:** ARIA-Labels für alle Visualisierungen und interaktiven Elemente. Textauszüge sind semantisch korrekt ausgezeichnet (`<blockquote>`, `<cite>` etc.)
- **Farbkontrast:** WCAG AA-konform, keine reine Farbkodierung für Feedback. Markierungen nutzen zusätzlich Unterstreichungen/Rahmen.
- **Responsive:** Desktop-first, aber Tablet-Unterstützung Pflicht. Side-by-Side-Ansichten stapeln sich auf schmalen Bildschirmen vertikal.
- **Typografie:** Gut lesbare Schriftgröße (min. 16px für Fließtext), ausreichende Zeilenhöhe, Serifen-Schrift optional für Textauszüge.
- **Textauszüge:** Klar vom Fließtext abgesetzt (Einrückung, Hintergrund, Rahmen), mit Quellenangabe.

---

### 6. Skill: Fortschritt & Gamification

- **LocalStorage-Persistenz:** Lernfortschritt wird browserlokal gespeichert
- **Progress-Tracking:**
  - Welche Kapitel wurden bearbeitet
  - Welche Übungen wurden abgeschlossen
  - Erzielte Punktzahlen
  - Anzahl gelöster Challenges
- **Optionale Gamification:**
  - Fortschrittsbalken pro Kapitel
  - Abzeichen für abgeschlossene Module (z.B. „Stilmittel-Kenner", „Epochen-Experte", „Metrum-Meister", „Analyse-Profi")
  - Streak-Counter für tägliches Lernen
  - Highscore bei Timed Challenges

---

### 7. Fachspezifische Inhaltsregeln

Diese Regeln haben **Vorrang** vor allgemeinem Training-Wissen und müssen in allen Inhalten, Beispielen und Übungen strikt eingehalten werden.

#### 7.1 Rhetorische Mittel / Stilmittel

Die Stilmittel-Datenbank (`src/data/stilmittel.ts`) enthält mindestens die folgenden Stilmittel mit jeweils: Name, Definition, Beispiel(e), Wirkung, Kategorie.

**Wortfiguren:**

| Stilmittel | Definition | Beispiel |
|-----------|-----------|---------|
| Anapher | Wiederholung am Satz-/Versanfang | „Wer nie sein Brot mit Tränen aß, / Wer nie die kummervollen Nächte…" |
| Epipher | Wiederholung am Satz-/Versende | „Doch alle Lust will Ewigkeit, / will tiefe, tiefe Ewigkeit." |
| Alliteration | Gleicher Anlaut aufeinanderfolgender Wörter | „Milch macht müde Männer munter." |
| Parallelismus | Wiederholung der syntaktischen Struktur | „Heiß ist die Liebe, kalt ist der Schnee." |
| Chiasmus | Überkreuzstellung (syntaktische Spiegelung) | „Die Kunst ist lang, und kurz ist unser Leben." |
| Ellipse | Auslassung von Satzteilen | „Je früher der Abschied, desto [= umso] kürzer die Qual." |
| Klimax | Dreigliedrige Steigerung | „Veni, vidi, vici." |
| Antithese | Gegenüberstellung gegensätzlicher Begriffe/Gedanken | „Der Wahn ist kurz, die Reu' ist lang." |
| Oxymoron | Verbindung zweier sich widersprechender Begriffe | „bittersüß", „alter Knabe" |
| Paradoxon | Scheinbar widersprüchliche Aussage mit tieferem Sinn | „Ich weiß, dass ich nichts weiß." |

**Bildliche Mittel (Tropen):**

| Stilmittel | Definition | Beispiel |
|-----------|-----------|---------|
| Metapher | Bedeutungsübertragung (verkürzter Vergleich ohne „wie") | „Das Feuer der Leidenschaft" |
| Vergleich | Verknüpfung zweier Bereiche mit „wie" oder „als" | „Er kämpfte wie ein Löwe." |
| Personifikation | Vermenschlichung von Abstraktem/Unbelebtem | „Die Sonne lacht." |
| Allegorie | Fortgeführte Metapher / bildliche Darstellung eines abstrakten Begriffs | Justitia mit Waage und Schwert |
| Symbol | Konventionelles Sinnbild, das über sich hinausweist | Taube = Frieden, Ring = Treue |
| Hyperbel | Starke Übertreibung | „todmüde", „ein Meer von Tränen" |
| Litotes | Untertreibung / doppelte Verneinung | „nicht schlecht" (= gut) |
| Ironie | Das Gegenteil des Gemeinten sagen | „Das hast du ja toll hinbekommen." (bei Misserfolg) |
| Euphemismus | Beschönigende Umschreibung | „entschlafen" statt „sterben" |
| Synästhesie | Vermischung verschiedener Sinneswahrnehmungen | „schreiendes Rot", „süße Stimme" |
| Metonymie | Ersetzung durch sachlich verwandten Begriff | „Das Weiße Haus erklärte…" (= US-Regierung) |

**Klangfiguren:**

| Stilmittel | Definition | Beispiel |
|-----------|-----------|---------|
| Onomatopoesie | Lautmalerei | „Es knistert, kracht und prasselt." |
| Assonanz | Gleichklang der Vokale | „Hut und Mut" |
| Enjambement | Zeilensprung (Satz geht über Versende hinaus) | „Der Mond ist aufgegangen, / die goldnen Sternlein prangen" |

**Wichtige Regel — Wirkungsanalyse:**
> Ein Stilmittel nur zu **benennen** reicht im LK nicht aus. Es muss immer die **Wirkung im Kontext** analysiert werden:
> 1. Stilmittel benennen und mit Textstelle belegen
> 2. Wirkung beschreiben (Was bewirkt es beim Leser/Hörer?)
> 3. Funktion im Kontext erklären (Warum setzt der Autor es hier ein?)
>
> Beispiel: „Die Anapher ‚Wer nie…' (V. 1 und V. 3) erzeugt durch die Wiederholung einen eindringlichen, beschwörenden Ton und betont die Allgemeingültigkeit der Aussage."

---

#### 7.2 Erzähltechnik (Epik)

**Erzählperspektiven (nach Stanzel):**

| Erzählsituation | Kennzeichen | Beispiel |
|-----------------|-------------|---------|
| Auktorialer Erzähler | Allwissend, kommentierend, übergeordnet, Einblick in alle Figuren | Fontane: „Effi Briest" |
| Personaler Erzähler | Begrenzt auf Wahrnehmung einer Figur, keine eigene Stimme | Kafka: „Die Verwandlung" (Gregor Samsas Perspektive) |
| Ich-Erzähler | Erzähler = Figur der Handlung, subjektiv, begrenzt | Max Frisch: „Homo Faber" |
| Neutraler Erzähler | Berichtet nur Äußeres, kein Innenleben, keine Wertung | Hemingway-Stil |

**Zeitgestaltung:**

| Begriff | Definition | Beispiel |
|---------|-----------|---------|
| Zeitraffung | Erzählte Zeit > Erzählzeit | „Drei Jahre vergingen." |
| Zeitdehnung | Erzählte Zeit < Erzählzeit | Detaillierte Beschreibung eines Augenblicks |
| Zeitdeckung | Erzählte Zeit ≈ Erzählzeit | Dialog, innerer Monolog |
| Rückblende (Analepse) | Sprung in die Vergangenheit | Erinnerungsszenen |
| Vorausdeutung (Prolepse) | Hinweis auf Zukünftiges | „Später sollte sich zeigen, dass…" |

**Darbietungsformen:**

| Form | Definition | Signalwörter |
|------|-----------|-------------|
| Erzählerbericht | Erzähler berichtet über Handlung und Figuren | Er-/Sie-Form, Präteritum |
| Direkte Rede | Wörtliche Wiedergabe der Figurenrede | Anführungszeichen, Inquit-Formel |
| Indirekte Rede | Wiedergabe in Konjunktiv I | „Er sagte, er sei…" |
| Erlebte Rede | Mischform: Erzählersprache + Figurenperspektive | 3. Person + Präteritum + Figurenduktus |
| Innerer Monolog | Gedankenstrom einer Figur in Ich-Form | Ich-Form, Präsens, assoziativ |
| Bewusstseinsstrom | Unkontrollierter Gedankenfluss, oft ohne Interpunktion | Assoziativ, fragmentarisch |

**Wichtige Regel — Erlebte Rede:**
> Die erlebte Rede ist eines der am häufigsten übersehenen und verwechselten Stilmittel in Klausuren. Sie verbindet die grammatische Form des Erzählerberichts (3. Person, Präteritum) mit dem Duktus der Figurenrede (Ausrufe, rhetorische Fragen, umgangssprachliche Wendungen). Beispiel: „Morgen war Weihnachten. Wie die Zeit verging!" — Das ist kein Erzählerkommentar, sondern die Figur „denkt" in der Erzählersprache.

---

#### 7.3 Lyrik-Analyse

**Metrum (Versfüße):**

| Versfuß | Schema | Beispiel | Wirkung |
|---------|--------|---------|---------|
| Jambus | ◡ ▬ (unbetont-betont) | „Ge-DICHT" | Fließend, natürlich im Deutschen |
| Trochäus | ▬ ◡ (betont-unbetont) | „MÜL-ler" | Bestimmt, feierlich |
| Daktylus | ▬ ◡ ◡ (betont-unbetont-unbetont) | „WAN-de-rer" | Tänzerisch, beschwingt |
| Anapäst | ◡ ◡ ▬ (unbetont-unbetont-betont) | „Pa-ra-DIES" | Drängend, vorwärtstreibend |

**Reimschemata:**

| Reimschema | Muster | Bezeichnung |
|-----------|--------|-------------|
| Paarreim | aabb | Häufig in Volksliedern und Balladen |
| Kreuzreim | abab | Häufigste Form, verbindend |
| Umarmender Reim | abba | Rahmend, geschlossen |
| Schweifreim | aabccb | Sechszeilige Strophe |
| Waise | x (reimloser Vers) | Betonung, Isolation |

**Strophenformen:**

| Form | Merkmale |
|------|---------|
| Sonett | 2 Quartette + 2 Terzette, 14 Verse, oft Alexandriner |
| Volksliedstrophe | 4 Verse, Kreuzreim, einfaches Metrum |
| Ode | Keine feste Form, feierlich, ohne Reim |
| Elegie | Klagend, Distichen (Hexameter + Pentameter) |
| Ballade | Erzählendes Gedicht, Strophenform, oft dialogisch |

**Wichtige Regel — Lyrisches Ich:**
> Das lyrische Ich ist **nicht** der Autor! Es ist die Sprechinstanz des Gedichts. Formulierung: „Das lyrische Ich beschreibt…" oder „Die Sprecherin/Der Sprecher des Gedichts…", NICHT „Goethe beschreibt…" oder „Der Dichter fühlt…".

---

#### 7.4 Dramentheorie

**Geschlossene vs. offene Dramenform:**

| Merkmal | Geschlossenes Drama | Offene Dramenform |
|---------|-------------------|-----------------|
| Ziel | Katharsis (Reinigung durch Furcht und Mitleid) | Gesellschaftskritik, Darstellung sozialer Realität |
| Haltung des Zuschauers | Einfühlung, Identifikation | Betroffenheit, Reflexion |
| Handlung | Geschlossene Handlung, Einheit von Ort, Zeit, Handlung | Episodische, fragmentarische Struktur, Montage |
| Figuren | Individuelle Charaktere mit innerem Konflikt, oft adelig | Typen, soziale Rollen, oft aus niederen Ständen |
| Sprache | Einheitlicher Stil (Vers, gehobene Sprache) | Alltagssprache, Dialekt, soziolektisch differenziert |
| Aufbau | 5-Akt-Schema (Freytags Pyramide) | Szenenfolge ohne klassischen Spannungsbogen |
| Beispiel | Schiller: „Kabale und Liebe" | Büchner: „Woyzeck" / Hauptmann: „Die Weber" |

> **Hinweis zum Epischen Theater (Brecht):** Das epische Theater nach Brecht (Verfremdungseffekt, V-Effekt, didaktisches Theater) wird in der Theorie behandelt, kann aber wegen des Urheberrechts (gemeinfrei erst 2027) nicht mit Originaltexten illustriert werden. Büchners „Woyzeck" (1836/37) gilt als wichtiger Vorläufer der offenen Dramenform und des sozialkritischen Theaters.

**Freytags Pyramide (5-Akt-Schema):**
1. **Exposition:** Einführung in Ort, Zeit, Figuren, Ausgangssituation
2. **Steigende Handlung:** Konfliktverschärfung, erregendes Moment
3. **Klimax / Peripetie:** Höhepunkt und Wendepunkt
4. **Fallende Handlung:** Retardierendes Moment, Verzögerung
5. **Katastrophe / Lösung:** Tragischer Ausgang (Tragödie) oder Auflösung (Komödie)

**Dialoganalyse-Methodik:**
> Bei der Dialoganalyse im Drama immer beachten:
> 1. **Wer** spricht? (Figur, sozialer Status, Beziehung zum Gesprächspartner)
> 2. **Wie** wird gesprochen? (Sprachebene, Stilmittel, Satzlänge, Regieanweisungen)
> 3. **Was** wird gesagt — und was nicht? (Subtext, implizite Botschaften)
> 4. **Warum** wird so gesprochen? (Intention, Machtdynamik, Kommunikationsstörung)
> 5. Analyse mit Kommunikationsmodellen möglich (4-Ohren-Modell auf Dramen-Dialoge anwenden)

---

#### 7.5 Literaturepochen

**Epochen-Überblick (Referenz für Epochen-Übungen):**

| Epoche | Zeitraum | Zentrale Merkmale | Schlüsselwerk aus dem Textkorpus |
|--------|----------|-------------------|----------------------------------|
| Aufklärung | ca. 1720–1785 | Vernunft, Toleranz, Erziehung, bürgerliches Trauerspiel | Lessing: „Nathan der Weise" |
| Sturm und Drang | ca. 1765–1785 | Gefühl, Genie, Naturerlebnis, Rebellion gegen Regeln | Goethe: „Willkommen und Abschied" |
| Weimarer Klassik | ca. 1786–1805 | Humanität, Maß und Form, Synthese von Gefühl und Vernunft | Schiller: „Kabale und Liebe" |
| Romantik | ca. 1795–1848 | Sehnsucht, Nacht/Traum, Wanderschaft, Volkstümlichkeit, blaue Blume | Eichendorff: „Mondnacht" |
| Realismus | ca. 1848–1890 | Verklärende Darstellung der Wirklichkeit, Gesellschaftskritik, Psychologisierung | Fontane: „Effi Briest" |
| Naturalismus | ca. 1880–1900 | Milieutheorie, exakte Wirklichkeitsabbildung, soziales Elend | Hauptmann: „Die Weber" |
| Expressionismus | ca. 1910–1925 | Großstadt, Zerfall, Ich-Verlust, ekstatische Sprache, Reihungsstil | Trakl, Heym, Benn |
| Neue Sachlichkeit | ca. 1920–1933 | Nüchternheit, Gebrauchsliteratur, Reportage-Stil | Kästner, Fallada |
| Nachkriegsliteratur | ca. 1945–1970 | Kahlschlag, Trümmerliteratur, Sprachskepsis, Vergangenheitsbewältigung | Borchert: „Draußen vor der Tür" (Theorie, da nicht auf Gutenberg), Thomas Mann: „Der Tod in Venedig" (Übergang Moderne) |
| Gegenwartsliteratur | ab ca. 1990 | Vielfalt, Globalisierung, digitale Welt, autofiktionales Erzählen | (Urheberrechtlich geschützt — wird nur theoretisch behandelt, ohne Textauszüge) |

**Wichtige Regel — Epochenzuordnung:**
> Epochen sind **keine starren Kästen**! Werke können Merkmale mehrerer Epochen aufweisen. Epochenübergänge sind fließend. Die Zuordnung muss immer am **konkreten Text belegt** werden, nicht nur am Erscheinungsjahr.

---

#### 7.6 Kommunikationsmodelle

**Schulz von Thun — Vier-Seiten-Modell (4-Ohren-Modell):**
Jede Nachricht enthält vier Ebenen:
1. **Sachinhalt:** Worüber informiert wird (Daten, Fakten)
2. **Selbstoffenbarung:** Was der Sender über sich preisgibt (Gefühle, Werte)
3. **Beziehung:** Wie der Sender zum Empfänger steht (Wertschätzung, Überlegenheit)
4. **Appell:** Wozu der Empfänger veranlasst werden soll (Wunsch, Aufforderung)

**Watzlawick — Axiome:**
1. Man kann nicht nicht kommunizieren.
2. Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt.
3. Kommunikation ist immer Ursache und Wirkung (Interpunktion).
4. Menschliche Kommunikation bedient sich analoger und digitaler Modalitäten.
5. Kommunikation ist symmetrisch oder komplementär.

**Bühler — Organon-Modell:**
- **Ausdruck** (Sender): Symptom — Was verrät der Sender über sich?
- **Darstellung** (Gegenstand): Symbol — Worüber wird informiert?
- **Appell** (Empfänger): Signal — Was soll der Empfänger tun/denken?

---

#### 7.7 Häufige Fehler in Schüleranalysen (Referenz für Fehlersuche-Übungen)

Diese Liste dient als Grundlage für Fehlersuche-Aufgaben. Jeder Fehler ist ein typischer Schülerfehler in Klausuren.

**Stilmittel-Fehler:**
- Metapher und Vergleich verwechselt (Vergleich hat „wie"/"als", Metapher nicht)
- Personifikation und Metapher verwechselt (Personifikation vermenschlicht explizit Unbelebtes)
- Symbol und Metapher verwechselt (Symbol ist konventionell, Metapher kontextabhängig)
- Stilmittel nur benannt, nicht in seiner Wirkung analysiert
- Anapher mit Alliteration verwechselt (Anapher = Wortwiederholung am Satzanfang, Alliteration = gleicher Anlaut)

**Erzähltechnik-Fehler:**
- Erzähler und Autor gleichgesetzt („Kafka fühlt sich wie ein Käfer…")
- Erlebte Rede nicht erkannt (als Erzählerbericht interpretiert)
- Ich-Erzähler und auktorialer Erzähler verwechselt
- Personalen Erzähler mit Ich-Erzähler verwechselt

**Lyrik-Fehler:**
- Lyrisches Ich = Autor gesetzt („Goethe sehnt sich nach seiner Geliebten")
- Metrum falsch bestimmt (z.B. Betonungen nach Schriftbild statt nach Sprachrhythmus)
- Reimschema falsch notiert (z.B. Assonanz als Reim gewertet)
- Strophenform nicht erkannt (z.B. Sonett nicht als Sonett identifiziert)

**Dramen-Fehler:**
- Regieanweisungen in der Analyse ignoriert
- Figurenrede nicht vom Standpunkt der Figur, sondern als „Wahrheit" interpretiert
- Episches Theater wie geschlossenes Drama analysiert
- V-Effekt (Verfremdungseffekt) nicht als bewusstes Mittel erkannt

**Epochen-Fehler:**
- Epoche nur am Erscheinungsjahr festgemacht, ohne Textbelege
- Epochenmerkmale als absolute Kriterien behandelt (statt als Tendenzen)
- Romantik mit „romantisch" (= kitschig/liebevoll) gleichgesetzt
- Sturm und Drang und Romantik nicht unterschieden

**Erörterungs-Fehler:**
- Argument ohne Beleg/Beispiel
- Meinungsäußerung statt Argumentation („Ich finde, dass…")
- Gegenargumente nur genannt, nicht entkräftet
- Zitate ohne Einbettung in den eigenen Text

---

### 8. Skill: Visuelle Darstellung & Content-Design

Die Theorie-Seiten sind der zentrale Lerninhalt der Plattform. Sie müssen **visuell ansprechend, gut strukturiert und didaktisch aufbereitet** sein.

#### 8.1 Docusaurus-Content-Gestaltung

**Docusaurus-Admonitions** für einfache Hinweisblöcke:
```mdx
:::tip Merke
Das lyrische Ich ist nicht der Autor!
:::

:::warning Häufiger Fehler
Metapher und Vergleich werden oft verwechselt. Ein Vergleich enthält immer „wie" oder „als".
:::

:::info Epochenkontext
Dieses Gedicht entstand in der Epoche des Sturm und Drang (ca. 1765–1785).
:::
```

**Custom-Komponenten** für komplexere Formate (in MDX eingebettet):
- Vergleichskarten (Side-by-Side)
- Interaktive Tabellen
- Zitat-Blöcke mit Analyse-Overlay
- Figurenporträts mit Charakterisierung

#### 8.2 Seitenlayout

**Kapitel-Einstieg:**
- Jede Kapitel-Seite beginnt mit einer kurzen Einleitung: Lernziele, Bezug zum Abitur, Vorwissensaktivierung
- Optional: Motivierendes Zitat oder provokante Frage

**Sektions-Gliederung:**
- Klare Hierarchie mit Docusaurus-Headings (h2, h3, h4)
- Interaktive Komponenten visuell abgesetzt (Card-Stil mit Hintergrund und Rahmen)
- Textauszüge in gestylten Blockquotes mit Quellenangabe
- Ausreichend vertikaler Abstand zwischen Sektionen

**Sidebar-Navigation:**
- Docusaurus-Sidebar mit Kapitelstruktur
- Optional: Fortschrittsanzeige pro Kapitel in der Sidebar

#### 8.3 Typografie und Textgestaltung

- **Überschriften:** Klare Größenabstufung mit Docusaurus-Theme-Variablen
- **Fachbegriffe:** Bei erster Erwähnung als `<dfn>` mit Tooltip (leichter Hintergrund + Erklärung bei Hover)
- **Textauszüge:** In `<blockquote>` mit Quellenangabe, visuell klar abgesetzt (linker Rand, Hintergrund), ggf. in Serifenschrift
- **Inline-Code / Fachbegriffe:** Monospace oder farbig hinterlegt für Metrum-Notation, Reimschema-Buchstaben etc.

#### 8.4 Visualisierungen (SVG-Komponenten)

- SVG-Visualisierungen werden als `<figure>` mit `<figcaption>` eingebettet
- Zentriert, mit leichtem Hintergrund, abgerundeten Ecken
- Maximale Breite begrenzt, auf Mobile ggf. horizontal scrollbar
- Interaktiv: Hover für Details, Klick für Vertiefung
- Konsistente Farbcodierung über die gesamte Plattform

#### 8.5 Farbsystem

| Konzept | Farbe | Verwendung |
|---------|-------|-----------|
| Stilmittel / Sprache | Blau (`blue-*`) | Text-Highlighting, Stilmittel-Karten |
| Epochen / Geschichte | Violett (`purple-*`) | Epochen-Zeitstrahl, Epochen-Zuordnung |
| Figuren / Charaktere | Grün (`emerald-*`) | Figurenkonstellation, Figurenkarten |
| Kommunikation | Orange (`amber-*`) | Kommunikationsmodelle |
| Warnungen / Fehler | Rot (`red-*`) | Fehlersuche, häufige Fehler |
| Tipps / Merke | Grün (`green-*`) | Merkkästen, Tipps |
| Erfolg | Smaragd (`emerald-*`) | Korrekte Antworten |
| Neutral / Info | Grau/Blau (`slate-*`/`sky-*`) | Hintergrundinformationen |

#### 8.6 Animationen

- **Sanfte Übergänge:** Framer Motion für Ein-/Ausblend-Effekte bei interaktiven Elementen
- **Zeitstrahl-Animation:** Epochen gleiten sanft in den Viewport
- **Figurenkonstellation:** Beziehungslinien werden animiert gezeichnet
- **Keine überflüssigen Animationen:** Animationen dienen der Orientierung und dem Verständnis, nicht der Dekoration

#### 8.7 Datenstruktur-Vorgabe

Die TypeScript-Typen in `src/types/index.ts` müssen die Datenstrukturen der Plattform abbilden:

```typescript
// Stilmittel
interface Stilmittel {
  id: string
  name: string
  definition: string
  kategorie: 'wortfigur' | 'bildliches_mittel' | 'klangfigur' | 'satzfigur'
  beispiele: string[]
  wirkung: string
  etymologie?: string
}

// Epochen
interface Epoche {
  id: string
  name: string
  zeitraum: { von: number; bis: number }
  merkmale: string[]
  autoren: string[]
  schluesselwerke: string[]
  beschreibung: string
}

// Übungen
interface Exercise {
  id: string
  version: number
  kapitel: string
  type: ExerciseType
  afb: 1 | 2 | 3   // Anforderungsbereich
  title: string
  description: string
  data: ExerciseData  // Typ-Union je nach Exercise-Type
}

type ExerciseType =
  | 'drag-drop'
  | 'multiple-choice'
  | 'lueckentext'
  | 'text-highlighting'
  | 'metrum-klopfer'
  | 'reimschema-quiz'
  | 'epochen-zuordnung'
  | 'figuren-zuordnung'
  | 'fehlersuche'
  | 'argument-builder'
  | 'timed-challenge'
  | 'schrittweise-analyse'
  | 'text-vergleich'

// Textauszüge
interface Textauszug {
  id: string
  titel: string
  autor: string
  erscheinungsjahr: number
  gattung: 'epik' | 'lyrik' | 'dramatik' | 'sachtext'
  epoche: string
  text: string
  quelle: string    // Quellenangabe
  worterklarungen?: Record<string, string>
}

// Lernfortschritt
interface Progress {
  oduleCompleted: string[]
  exerciseResults: Record<string, ExerciseResult>
  badges: string[]
  lastVisited: string
  streak: number
}

interface ExerciseResult {
  exerciseId: string
  version: number
  completed: boolean
  score: number
  maxScore: number
  attempts: number
  lastAttempt: string  // ISO date
}
```
