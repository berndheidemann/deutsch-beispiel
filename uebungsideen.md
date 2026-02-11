# Übungsideen — Interaktive Deutsch-LK-Lernplattform

> **Textkorpus-Kontext:** Alle Übungen basieren auf der durchgängigen Textbasis (siehe CLAUDE.md). Texte stammen aus gemeinfreien Quellen (Project Gutenberg / projekt-gutenberg.org) und sind urheberrechtlich unbedenklich.
>
> **Legende:**
> - `[MVP]` = Must-have für die erste Version der Plattform
> - `[Erweiterung]` = Nice-to-have, wird nach dem MVP umgesetzt
>
> **Automatisches Feedback:** Jede Übung gibt sofortiges, automatisches Feedback (kein Scoring/Noten). Die generellen Feedback-Mechanismen pro Komponententyp sind in `skills.md` (Abschnitt 3, „Automatisches Feedback-System") definiert. Dieses Dokument beschreibt zusätzlich das **übungsspezifische Feedback** unter `**Feedback:**` — also die konkreten Hinweistexte, Musterlösungen und Erklärungen, die über das generische Format-Feedback hinausgehen.

---

## Kapitelübergreifend

### 1. Stilmittel-Schnelltrainer [AFB I — Reproduktion] [MVP]
Timed Challenge: Beispielsätze werden angezeigt, Schüler wählen per Klick das richtige Stilmittel aus einer Liste (4 Optionen). 15 Fragen in 90 Sekunden. Highscore wird gespeichert.
**Variante mit Tiefgang:** Jede 3. Frage fragt nicht nach dem Namen des Stilmittels, sondern nach seiner **Wirkung** (z.B. „Welche Wirkung erzielt die Wiederholung am Versanfang hier?" → „Eindringlichkeit / Nachdruck"). Damit wird nicht nur Benennen, sondern auch Wirkungsverständnis trainiert.
**Textbeispiele:** Sätze aus dem Textkorpus (Goethe, Schiller, Fontane, Eichendorff etc.)
**Feedback:** Sofort nach jeder Antwort: ✓/✗ + korrektes Stilmittel mit Kurzdefinition. Bei Wirkungsfragen: Erklärung der Wirkung im Kontext des Beispielsatzes. Am Ende der Runde: Zusammenfassung aller Fehler mit ausführlicher Erklärung — welches Stilmittel wurde verwechselt und warum?

### 2. Analyse-Fehler-Spotter [AFB II — Transfer] [MVP]
Eine Beispielanalyse (2–3 Absätze) wird angezeigt, die typische Schülerfehler enthält (aus skills.md Abschnitt 7.7). Schüler klicken auf die fehlerhaften Stellen und wählen die Korrektur aus einer Liste. Trainiert metakognitive Fähigkeiten — SuS müssen wissen, was richtig wäre, um Fehler zu erkennen.
**Beispiel:**
> „Goethe beschreibt in ‚Willkommen und Abschied' seine Sehnsucht nach Friederike Brion. Die Alliteration ‚Schon stand im Nebelkleid die Eiche' verstärkt die romantische Stimmung…"
> Fehler 1: „Goethe beschreibt" → Lyrisches Ich, nicht Autor!
> Fehler 2: „Alliteration" → Das ist keine Alliteration, sondern eine Personifikation (Eiche im Nebelkleid)
> Fehler 3: „romantische Stimmung" → Gedicht ist Sturm und Drang, nicht Romantik
**Mehrere Schwierigkeitsstufen:** Leicht (offensichtliche Fehler wie Autor/lyrisches Ich), Mittel (falsche Stilmittel-Benennung), Schwer (fehlerhafte Wirkungsanalyse, falsche Epochenzuordnung).
**Feedback:** Bei Klick auf korrekte Fehlerstelle: „Richtig erkannt!" + Fehlertyp (z.B. „Verwechslung Autor/lyrisches Ich") + korrekte Formulierung. Bei Klick auf fehlerfreie Stelle: „Diese Stelle ist korrekt." Nach Abschluss: Alle übersehenen Fehler werden hervorgehoben mit Erklärung des Fehlertyps und Verweis auf die entsprechende Regel (z.B. „→ Regel: Das lyrische Ich ist nicht der Autor, siehe Kap. 3").

### 3. Operator-Training [AFB I — Reproduktion] [MVP]
Abitur-Operatoren (analysieren, erörtern, vergleichen, interpretieren, erläutern, einordnen, beurteilen) werden systematisch trainiert. Zwei Übungsformate:
1. **Zuordnung:** Aufgabenstellungen werden angezeigt → Schüler wählen den zentralen Operator und beschreiben, was konkret verlangt wird (z.B. „Analysieren Sie die sprachliche Gestaltung" → Stilmittel benennen, belegen UND in ihrer Wirkung deuten).
2. **Abgrenzung:** Paare von Operatoren werden gegenübergestellt (z.B. „analysieren" vs. „erörtern", „vergleichen" vs. „gegenüberstellen") — Schüler ordnen Beispiel-Aufgaben dem richtigen Operator zu.
**Dieses Training ist klausurentscheidend**, weil SuS häufig an der falschen Aufgabenbearbeitung scheitern, nicht am fehlenden Wissen.
**Feedback:** Bei Zuordnung: sofort ✓/✗ + Erklärung, was der Operator konkret verlangt (z.B. „‚Analysieren' verlangt: Benennen + Belegen + Wirkung deuten. ‚Beschreiben' verlangt nur: Benennen + Belegen."). Bei Abgrenzung: Erklärung des Unterschieds zwischen den verwechselten Operatoren. Zusätzlich: Formulierungsbeispiel für den korrekten Operator (z.B. „Eine Analyse könnte so beginnen: ‚Die Metapher „Feuer der Leidenschaft" (V. 3) verdeutlicht…'").

### 4. Fachbegriff-Karteikarten [AFB I — Reproduktion] [Erweiterung]
Spaced-Repetition-Karteikarten: Fachbegriffe werden in steigenden Intervallen abgefragt. Korrekt beantwortete Karten erscheinen seltener, fehlerhafte häufiger. Effektiver als ein statisches Glossar.
**Feedback:** Sofort nach Aufdecken: ✓/✗ + korrekte Definition + Beispiel aus dem Textkorpus. Bei häufig verwechselten Begriffen: zusätzlicher Hinweis auf die Verwechslungsgefahr (z.B. „Nicht verwechseln mit ‚Personifikation' — eine Metapher vermenschlicht nicht zwingend").

---

## Kapitel 1: Sprachliche Mittel & Stilistik

### 1. Stilmittel-Zuordnung (Drag & Drop) [AFB I — Reproduktion] [MVP]
Links: Stilmittel-Karten mit Name und Kurzdefinition. Rechts: Beispielsätze aus dem Textkorpus als Drop-Zonen. Schüler ziehen die passenden Stilmittel zu den Beispielen. Bei korrekter Zuordnung erscheint die Wirkungserklärung.
**Textbeispiele aus Gutenberg-Texten:**
- „Ich sah des Sommers letzte Rose stehn" (Eichendorff) → Personifikation
- „Die Kunst ist lang, und kurz ist unser Leben" (Goethe, Faust) → Chiasmus / Antithese
- „Es schlug mein Herz, geschwind zu Pferde!" (Goethe, „Willkommen und Abschied") → Inversion, Ausruf
- „Über allen Gipfeln / Ist Ruh" (Goethe, „Wandrers Nachtlied") → Enjambement
**Feedback:** Bei korrektem Drop: grüner Rahmen + Wirkungserklärung im Kontext (z.B. „Richtig! Der Chiasmus ‚Die Kunst ist lang, und kurz ist unser Leben' betont durch die Überkreuzstellung den Gegensatz zwischen Kunst und menschlicher Vergänglichkeit."). Bei falschem Drop: roter Rahmen + gezielter Hinweis (z.B. „Das ist kein Enjambement — ein Enjambement liegt vor, wenn ein Satz über das Versende hinausgeht. Hier endet der Satz mit dem Vers.").

### 2. Bildliche Mittel differenzieren — Sortierspiel [AFB I — Reproduktion] [MVP]
Verschiedene Textstellen werden als Karten angezeigt. **Fünf Kategorien:** Metapher, Vergleich, Personifikation, Symbol, Metonymie. Schüler sortieren per Drag & Drop. Bei Fehlern erscheint ein gezielter Hinweis auf das Unterscheidungskriterium.
**Textbeispiele:**
- „Er kämpfte wie ein Löwe" → Vergleich (Signalwort „wie")
- „Das Feuer der Leidenschaft" → Metapher (Bedeutungsübertragung ohne „wie")
- „Die Sonne lacht" → Personifikation (Unbelebtes wird vermenschlicht)
- „Die Krone verlangt Gehorsam" → Metonymie (Krone steht für den König)
- „Das Kreuz am Wegesrand" → Symbol (konventionelles Sinnbild)
- „Sein Blick war hart wie Stahl" → Vergleich (Signalwort „wie")
**Stolperfallen sind bewusst eingebaut** (z.B. Personifikation sieht aus wie Metapher, Metonymie wie Symbol).
**Feedback:** Bei Fehler: gezielter Hinweis auf das **Unterscheidungskriterium** der verwechselten Kategorien. Z.B. Metapher↔Vergleich: „Ein Vergleich enthält immer ‚wie' oder ‚als' — fehlt dieses Wort, ist es eine Metapher." Personifikation↔Metapher: „Eine Personifikation vermenschlicht explizit etwas Unbelebtes (menschliche Handlung/Eigenschaft). Nicht jede Metapher ist eine Personifikation." Metonymie↔Symbol: „Ein Symbol ist konventionell (Kreuz = Glaube), eine Metonymie ersetzt durch einen sachlich verwandten Begriff (Krone = König)."

### 3. Stilmittel im Text markieren (TextAnnotation) [AFB II — Transfer] [MVP]
Ein Textauszug wird angezeigt. Schüler markieren Stilmittel durch Textauswahl und ordnen sie einer Kategorie zu. Validierung gegen Musterlösung mit Toleranz (ein Stilmittel kann z.B. als Metapher ODER Personifikation gewertet werden, wenn beides vertretbar ist).
**Text:** Goethe, „Willkommen und Abschied" (1. Strophe, Gutenberg):
> „Es schlug mein Herz, geschwind zu Pferde! / Es war getan fast eh gedacht. / Der Abend wiegte schon die Erde, / Und an den Bergen hing die Nacht;"
- „Es schlug mein Herz" → Inversion (ungewöhnliche Satzstellung betont die Unmittelbarkeit)
- „Der Abend wiegte schon die Erde" → Personifikation (Abend als mütterliche Figur)
- „an den Bergen hing die Nacht" → Personifikation / Metapher (Nacht als greifbare Substanz)
**Feedback:** Nach Klick auf „Prüfen": Korrekte Markierungen grün, übersehene Stellen blau nachmarkiert, falsche Markierungen rot. Zu jeder Stelle: Erklärung mit Stilmittel-Name + Wirkung (z.B. „Übersehen: ‚Der Abend wiegte schon die Erde' — Personifikation. Der Abend wird als mütterliche Figur dargestellt, die die Erde in den Schlaf wiegt."). Bei vertretbaren Doppelzuordnungen (z.B. Metapher oder Personifikation): beide akzeptiert mit Hinweis „Beide Zuordnungen sind hier vertretbar."

### 4. Wirkungsanalyse üben (Schrittweise Analyse) [AFB II — Transfer] [MVP]
Geführte Übung in drei Schritten — dem Dreischritt, der in jeder Klausur erwartet wird:
1. **Benennen:** „Welches Stilmittel liegt vor?" (Multiple Choice aus 4 Optionen)
2. **Wirkung:** „Welche Wirkung erzielt es?" (Multiple Choice + Freitext: Schüler wählen eine Grundwirkung und formulieren eine präzise Wirkungsbeschreibung)
3. **Funktion im Kontext:** „Warum setzt der Autor es hier ein?" (Freitext → Vergleich mit Musterlösung, die SuS selbst bewerten: „Wie nah ist meine Formulierung an der Musterlösung?")
**Texte:** Ausgewählte Stellen aus Schiller, Goethe oder Fontane (Gutenberg).
**Didaktischer Hinweis:** Die Selbstbewertung im dritten Schritt trainiert Reflexionskompetenz — SuS lernen, ihre eigene Analyse einzuschätzen.
**Feedback:** Schritt 1: Sofort ✓/✗ + Erklärung, warum die anderen Optionen nicht zutreffen. Schritt 2: MC-Teil sofort ✓/✗. Freitext: Musterlösung wird eingeblendet. Schritt 3: Musterlösung + Checkliste zur Selbsteinschätzung (☐ Stilmittel benannt, ☐ Textstelle zitiert, ☐ Wirkung beschrieben, ☐ Kontextbezug hergestellt). Schlüsselbegriff-Erkennung prüft, ob zentrale Begriffe vorkommen (z.B. „Deine Antwort enthält keinen Textstellen-Beleg — hast du mit Versangabe zitiert?").

### 5. Stilebenen-Quiz [AFB I — Reproduktion] [Erweiterung]
Multiple-Choice: Textauszüge werden gezeigt, Schüler bestimmen die Stilebene (gehoben, neutral, umgangssprachlich) und ordnen sie einer Gattung/Epoche zu.
**Feedback:** ✓/✗ + Erklärung der Stilebene mit konkreten Signalwörtern aus dem Textauszug (z.B. „Gehobene Stilebene — erkennbar an: Inversionen, langen Satzperioden, Fremdwörtern. Typisch für Klassik und Weimarer Klassik.").

### 6. Sachtextanalyse — Sprachliche Mittel in Reden [AFB II — Transfer] [MVP]
TextAnnotation auf einem **Sachtext** statt einem literarischen Text. Schüler markieren rhetorische Mittel in einer Rede oder einem Essay und analysieren ihre persuasive Funktion. Trainiert den Transfer von Stilmittel-Wissen auf nicht-literarische Texte.
**Text:** Schiller, „Was heißt und zu welchem Ende studiert man Universalgeschichte?" (Antrittsvorlesung, Gutenberg) — enthält Klimax, rhetorische Fragen, Antithesen, Appelle.
**Didaktischer Mehrwert:** Sachtextanalyse ist ein eigenständiges Klausurformat in vielen Bundesländern und wird hier erstmals geübt.
**Feedback:** TextAnnotation-Feedback wie bei Übung 3, aber mit zusätzlicher Erklärung der **persuasiven Funktion** (nicht nur ästhetische Wirkung). Z.B.: „Richtig! Die rhetorische Frage ‚Welcher Denkende…' appelliert direkt an das Selbstverständnis des Publikums und macht eine Verneinung psychologisch unmöglich — ein typisches Mittel der Überzeugungsrede."

---

## Kapitel 2: Textanalyse Epik

### 1. Erzählperspektiven-Zuordnung (Drag & Drop) [AFB I — Reproduktion] [MVP]
Textauszüge aus verschiedenen Erzähltexten werden angezeigt. Schüler ordnen sie den Erzählperspektiven zu (auktorial, personal, Ich-Erzähler, neutral). Mindestens **6 Auszüge**, damit jede Perspektive mindestens einmal vorkommt.
**Textbeispiele aus Gutenberg:**
- Fontane, „Effi Briest" (Anfang: „In Front des schon seit Kurfürst Georg Wilhelm von der Familie von Briest bewohnten Herrenhauses…") → auktorialer Erzähler (kommentierend, allwissend)
- Kafka, „Die Verwandlung" (Anfang: „Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte…") → personaler Erzähler (begrenzt auf Gregors Wahrnehmung)
- E.T.A. Hoffmann, „Der Sandmann" (Anfang: „Gewiß seid Ihr alle voll Unruhe…") → Ich-Erzähler (Nathanael im Brief)
- Storm, „Der Schimmelreiter" (Rahmenerzählung) → Ich-Erzähler + verschachtelte Erzählebenen
- Kafka, „Der Prozess" (Auszug mit reiner Handlungsbeschreibung) → neutraler Erzähler (annähernd)
**Feedback:** Bei Drop: ✓ + Erklärung der Erkennungsmerkmale (z.B. „Richtig: Personaler Erzähler — der Text ist begrenzt auf Gregors Wahrnehmung, es gibt keine Kommentare oder Einblicke in andere Figuren."). Bei Fehler: gezielter Hinweis auf das Unterscheidungsmerkmal (z.B. „Auktorial ≠ personal: Ein auktorialer Erzähler kann in ALLE Figuren blicken und kommentiert — hier sehen wir nur Gregors Perspektive."). Bei Verwechslung Ich-Erzähler/personal: „Ich-Erzähler = Erzähler ist selbst Figur (‚Ich…'). Personaler Erzähler = 3. Person, aber auf eine Figur begrenzt."

### 2. Erlebte Rede erkennen (TextHighlighting) [AFB II — Transfer] [MVP]
Ein Textauszug enthält verschiedene Darbietungsformen (Erzählerbericht, direkte Rede, erlebte Rede, innerer Monolog). Schüler markieren die **erlebte Rede** farblich und unterscheiden sie von anderen Formen. Mehrere Durchgänge mit steigender Schwierigkeit.
**Text:** Fontane, „Effi Briest" — Auszüge mit erlebter Rede (Gutenberg).
Beispiel: „Ja, Instetten hatte recht gehabt, und wie klug er alles wußte. Aber was half ihr das jetzt?" → Erlebte Rede (3. Person, Präteritum, aber Figurenperspektive durch rhetorische Frage und wertende Haltung).
**Didaktischer Hinweis:** Erlebte Rede ist DER typische Stolperstein in Klausuren. Diese Übung adressiert genau dieses Problem.
**Feedback:** Korrekt markierte erlebte Rede: grün + Erklärung der Erkennungsmerkmale an dieser Stelle (z.B. „Richtig! Erkennbar an: 3. Person + Präteritum (= Erzählerform), ABER rhetorische Frage + wertende Formulierung (= Figurenperspektive)."). Fälschlich markierter Erzählerbericht: rot + „Das ist Erzählerbericht — hier fehlen die typischen Merkmale der Figurensprache (Ausrufe, rhetorische Fragen, umgangssprachliche Wendungen)." Übersehene Stellen: blau nachmarkiert mit Erklärung.

### 3. Zeitgestaltung analysieren (TextHighlighting + Zuordnung) [AFB II — Transfer] [MVP]
Ein Textauszug wird angezeigt. Schüler markieren Passagen farblich und ordnen sie den Kategorien zu: **Zeitraffung** (blau), **Zeitdehnung** (orange), **Zeitdeckung** (grün). Zusätzlich: Rückblende und Vorausdeutung identifizieren.
**Text:** Fontane, „Effi Briest" — Kapitel mit Zeitsprung („Drei Jahre waren vergangen…") gefolgt von einer detaillierten Gesprächsszene (Zeitdeckung).
**Konkretes Beispiel:** Kapitelanfang (Zeitraffung: „Es verging Woche um Woche…") → Dialogszene mit Innstetten (Zeitdeckung) → Effis Reflexion, in der ein Augenblick innerer Erkenntnis über mehrere Absätze gedehnt wird (Zeitdehnung).
**Feedback:** Bei korrekter Zuordnung: ✓ + Erklärung des Verhältnisses Erzählzeit/erzählte Zeit (z.B. „Richtig: Zeitraffung — in einem Satz vergeht ‚Woche um Woche'. Die erzählte Zeit ist viel länger als die Erzählzeit."). Bei Verwechslung: Hinweis auf das Kriterium (z.B. „Zeitdehnung ≠ Zeitdeckung: Bei Zeitdehnung wird ein kurzer Moment ausführlich beschrieben — hier dauert die Passage länger als der beschriebene Augenblick."). Übersehene Rückblenden/Vorausdeutungen: blau hervorgehoben + Signalwörter markiert (z.B. „Signalwort für Vorausdeutung: ‚Später sollte sich zeigen, dass…'").

### 4. Figurencharakterisierung (FigurenZuordnung) [AFB II — Transfer] [MVP]
Figuren aus „Effi Briest" werden als Karten angezeigt (Effi, Innstetten, Crampas, Briest/Eltern, Roswitha). **Echte Zitate** aus dem Gutenberg-Text, Eigenschaften und Handlungen müssen den Figuren zugeordnet werden.
**Zitate aus „Effi Briest" (Gutenberg):**
- „Ich habe keine rechte Furcht, aber ich habe Angst" → Effi (Kap. 14)
- „Effi, du bist mir zu fein" → Frau von Briest
- „Kein Mensch ist ein einzelner, er gehört einem Ganzen an" → Innstetten (sinngemäß — Pflichtbewusstsein)
- Lebhaft, verspielt, naturverbunden → Effi
- Korrekt, pflichtbewusst, karriereorientiert → Innstetten
- Leichtlebig, charmant, unbekümmert → Crampas
**Feedback:** Bei korrekter Zuordnung: ✓ + Erklärung, was das Zitat/die Eigenschaft über die Figur verrät (z.B. „Richtig! Dieses Zitat zeigt Effis feines Gespür für die Unterscheidung zwischen rationaler Furcht und diffuser Angst — typisch für ihre Sensibilität."). Bei Fehler: Hinweis auf die sprachlichen/inhaltlichen Merkmale (z.B. „Dieses Zitat stammt nicht von Innstetten — Innstetten spricht sachlich und pflichtorientiert. Die emotionale, suchende Sprache ist typisch für Effi.").

### 5. Figurenkonstellation (Interaktive Visualisierung) [AFB II — Transfer] [MVP]
SVG-basierte Figurenkonstellation für „Effi Briest": Figuren als Knoten, Beziehungen als beschriftete Linien. Schüler können Beziehungsarten selbst einzeichnen (Liebe, Konflikt, Abhängigkeit, Loyalität) und ihre Zuordnung mit der Musterlösung vergleichen.
**Feedback:** Nach Abschluss: Musterlösung wird als Overlay eingeblendet. Korrekte Beziehungen: grün bestätigt. Fehlende Beziehungen: blau gestrichelt ergänzt mit Erklärung (z.B. „Zwischen Crampas und Innstetten besteht eine Rivalitäts-Beziehung — beide Offiziere, Crampas verkörpert alles, was Innstetten unterdrückt."). Falsch eingezeichnete: rot mit Korrektur.

### 6. Erzähltechnik-Vergleich (TextVergleich) [AFB III — Bewertung] [MVP]
Zwei Textanfänge nebeneinander: Fontane „Effi Briest" und Kafka „Die Verwandlung" (beide Gutenberg). Schüler markieren und vergleichen die unterschiedlichen Erzähltechniken: auktorial vs. personal, Distanz vs. Nähe, kommentierende vs. mitfühlende Erzählhaltung.
**Leitfragen:** „Wie wird der Leser in die Handlung eingeführt?", „Welches Verhältnis hat der Erzähler zu den Figuren?", „Welche Wirkung hat die Erzählperspektive auf die Leseridentifikation?"
**Feedback:** Musterlösung mit vormarkierten Stellen wird nach Abschluss eingeblendet. Checkliste zur Selbsteinschätzung: ☐ Erzählperspektive in beiden Texten benannt, ☐ Unterschied in der Erzählhaltung (Distanz vs. Nähe) beschrieben, ☐ Wirkung auf den Leser verglichen, ☐ Konkreke Textstellen als Belege markiert. Schlüsselbegriff-Hinweis: Warnung, falls zentrale Begriffe fehlen (z.B. „Dein Vergleich erwähnt nicht die Erzählperspektive — das ist der wichtigste Vergleichsaspekt hier.").

### 7. Textsortenbestimmung (Multiple Choice + Merkmale) [AFB I — Reproduktion] [Erweiterung]
Textanfänge werden angezeigt. Schüler bestimmen die Textsorte (Novelle, Kurzgeschichte, Parabel, Roman, Fabel) und begründen ihre Wahl durch Auswahl der zutreffenden Gattungsmerkmale (z.B. Novelle: „unerhörte Begebenheit", Dingsymbol, mittlere Länge, Wendepunkt).
**Texte aus Gutenberg:** Storm „Der Schimmelreiter" (Novelle), Kafka „Die Verwandlung" (Erzählung/Novelle?), Kafka „Vor dem Gesetz" (Parabel).
**Feedback:** ✓/✗ bei Textsortenwahl + Erklärung. Bei den Gattungsmerkmalen: jedes Merkmal wird einzeln bewertet mit Erklärung, ob es auf den vorliegenden Text zutrifft. Bei Grenzfällen (z.B. „Die Verwandlung"): „Beide Zuordnungen sind diskutierbar. Novelle: ‚unerhörte Begebenheit' liegt vor. Erzählung: Die typische Novellenstruktur fehlt. In der Klausur: Begründung entscheidet!"

---

## Kapitel 3: Textanalyse Lyrik

### 1. Metrum-Klopfer [AFB I — Reproduktion] [MVP]
Verse aus dem Textkorpus werden silbenweise angezeigt. Schüler klicken auf die betonten Silben (Hebungen). Das Metrum wird automatisch erkannt und der Versfuß benannt.
**Verse aus Gutenberg-Texten:**
- „Es schlug mein Herz, geschwind zu Pferde" (Goethe, „Willkommen und Abschied") → Jambus (◡▬◡▬◡▬◡▬◡)
- „Über allen Gipfeln ist Ruh" (Goethe, „Wandrers Nachtlied") → freier Rhythmus
- „Es war, als hätt der Himmel" (Eichendorff, „Mondnacht") → Jambus mit Auftakt
- „Verfall" / „Die schöne Stadt" (Trakl) → wechselnde Metren, Expressionismus
**Schwierigkeitsstufen:** Leicht (regelmäßiges Metrum), Mittel (Abweichungen), Schwer (freie Rhythmen, Expressionismus).
**Feedback:** Nach Abschluss eines Verses: Korrekte und falsche Betonungen werden visuell gegenübergestellt (Schema: ◡▬◡▬ neben dem eigenen Versuch). Versfuß wird benannt + Wirkung erklärt (z.B. „Jambus — fließender, vorwärtstreibender Rhythmus, der Goethes stürmischen Ritt unterstützt."). Bei Fehlern: betroffene Silben rot markiert + Hinweis (z.B. „‚geschwind' wird auf der zweiten Silbe betont: ge-SCHWIND.").

### 2. Reimschema-Quiz [AFB I — Reproduktion] [MVP]
Gedichtstrophen werden angezeigt. Schüler markieren reimende Versenden farblich (Klick auf Zeilenende vergibt Farbe/Buchstabe) und bestimmen das Reimschema. Mindestens **6 Strophen** mit verschiedenen Schemata.
**Gedichte aus Gutenberg:**
- Eichendorff, „Mondnacht": abab (Kreuzreim)
- Goethe, „Willkommen und Abschied": abab (Kreuzreim)
- Mörike, „Er ist's": aabb (Paarreim)
- Goethe, „Nähe des Geliebten": abba (umarmender Reim)
- Heine, „Buch der Lieder" — Strophe mit Schweifreim (aabccb)
- Rilke, „Der Panther" — Terzinen / Reimstruktur
**Feedback:** Falsch zugeordnete Verse werden farblich korrigiert. Nach Abschluss: Benennung des Reimschemas + Wirkungsbeschreibung (z.B. „Kreuzreim (abab) — wirkt verbindend und fortlaufend, typisch für erzählende und lyrische Texte."). Bei häufigem Fehler (z.B. unreiner Reim nicht erkannt): Hinweis „‚Erde'/‚Pferde' ist ein reiner Reim (Gleichklang ab dem letzten betonten Vokal)."

### 3. Bildsprache in der Lyrik (TextAnnotation) [AFB II — Transfer] [MVP]
Ein vollständiges Gedicht wird angezeigt. Schüler markieren bildliche Mittel (Metaphern, Personifikationen, Symbole, Vergleiche) und ordnen sie der richtigen Kategorie zu.
**Gedicht:** Eichendorff, „Mondnacht" (Gutenberg):
> „Es war, als hätt der Himmel / Die Erde still geküsst, / Dass sie im Blütenschimmer / Von ihm nun träumen müsst."
- „der Himmel die Erde geküsst" → Personifikation (Himmel und Erde als handelnde Wesen)
- „Blütenschimmer" → Metapher (Kompositum verbindet Blüten mit Lichtphänomen)
- „träumen müsst" → Personifikation (Erde als träumendes Wesen)
- „Die Ähren wogten sacht" (Str. 2) → Personifikation (Ähren als Wellen)
- „meine Seele spannte / Weit ihre Flügel aus" (Str. 3) → Metapher (Seele als Vogel)
**Feedback:** Wie bei Kap. 1, Übung 3 (TextAnnotation-Standard). Zusätzlich: Bei jeder korrekt markierten Stelle wird die **Wirkung im Gedichtkontext** erklärt (z.B. „Die Personifikation ‚der Himmel die Erde geküsst' schafft ein Bild kosmischer Harmonie — Himmel und Erde verschmelzen in einer zärtlichen Geste, die den romantischen Wunsch nach Einheit von Mensch und Natur ausdrückt.").

### 4. Gedichtanalyse (Schrittweise Analyse) [AFB II — Transfer] [MVP]
Geführte Gedichtanalyse in 5 Schritten, die die Klausur-Methodik abbilden:
1. **Einleitungssatz:** Autor, Titel, Erscheinungsjahr, Thema in einem Satz (Lückentext mit Feedback)
2. **Inhalt und Aufbau:** Strophenweiser Inhalt zusammenfassen (Freitext mit Musterlösung)
3. **Formale Aspekte:** Metrum, Reimschema, Kadenz, Strophenform bestimmen (interaktiv: MetrumKlopfer + ReimschemaQuiz eingebettet)
4. **Sprachliche Mittel:** Stilmittel markieren (TextAnnotation) und Wirkung in Dreischritt formulieren
5. **Epochenzuordnung und Deutung:** Epoche bestimmen, Merkmale nachweisen, Gesamtdeutung formulieren
**Gedicht:** Goethe, „Willkommen und Abschied" (Gutenberg, vollständig).
**Didaktischer Mehrwert:** Schüler lernen die Methodik der Gedichtanalyse als wiederholbaren Prozess.
**Feedback:** Pro Schritt individuell: Schritt 1 (Lückentext): Sofort ✓/✗ pro Lücke. Schritt 2 (Freitext): Musterlösung + Checkliste (☐ Jede Strophe berücksichtigt, ☐ Inhalt nicht interpretiert, ☐ Kernaussage erfasst). Schritt 3 (MetrumKlopfer/ReimschemaQuiz): Interaktives Feedback wie in den jeweiligen Einzelübungen. Schritt 4 (TextAnnotation): Wie TextAnnotation-Standard. Schritt 5 (Freitext): Musterlösung + Checkliste (☐ Epoche benannt, ☐ Merkmale mit Textstellen belegt, ☐ Gesamtdeutung formuliert) + Schlüsselbegriff-Prüfung.

### 5. Gedichtvergleich (TextVergleich) [AFB III — Bewertung] [MVP]
**DAS zentrale Abiturformat** — zwei Gedichte werden nebeneinander angezeigt. Schüler analysieren beide und erarbeiten Vergleichsaspekte. Geführt in 4 Schritten:
1. **Einzelanalyse Text A:** Stilmittel markieren, Metrum bestimmen (eingebettete Tools)
2. **Einzelanalyse Text B:** Dasselbe für den zweiten Text
3. **Vergleichsaspekte identifizieren:** Schüler wählen aus vorgeschlagenen Aspekten (Thema, Sprachstil, Bildsprache, Metrum, Stimmung, Epochenzugehörigkeit) und ergänzen eigene
4. **Vergleichendes Fazit:** Gemeinsamkeiten und Unterschiede benennen, Bezug zu den Epochen herstellen
**Vergleichspaare aus Gutenberg:**
- Goethe, „Willkommen und Abschied" (Sturm und Drang) vs. Eichendorff, „Mondnacht" (Romantik) — **Motiv: Naturerlebnis** in zwei Epochen
- Goethe, „Wandrers Nachtlied" (Klassik) vs. Trakl, „Verfall" (Expressionismus) — **Motiv: Vergänglichkeit** in zwei radikal verschiedenen Sprachstilen
- Heine, „Das Fräulein stand am Meere" (Spätromantik/Ironie) vs. Eichendorff, „Mondnacht" (Romantik) — **Romantik-Kritik** vs. aufrichtige Romantik
**Feedback:** Schritte 1 + 2: TextAnnotation- und MetrumKlopfer-Feedback wie in den Einzelübungen. Schritt 3: Bei Aspektwahl wird zu jedem gewählten Aspekt ein Hinweis angezeigt, was dazu verglichen werden könnte (z.B. „Bildsprache: Achte auf die Art der Naturbilder — werden sie beschreibend oder symbolisch eingesetzt?"). Schritt 4 (Freitext): Musterlösung + Checkliste (☐ Beide Texte berücksichtigt, ☐ Gemeinsamkeiten UND Unterschiede benannt, ☐ Vergleich auf Epochenmerkmale bezogen, ☐ Textstellen als Belege verwendet). Schlüsselbegriff-Prüfung: Warnung bei fehlendem Epochenbezug.

### 6. Lyrisches Ich vs. Autor — Formulierungstraining [AFB I — Reproduktion] [MVP]
Verschiedene Aussagen über Gedichte werden gezeigt. Schüler entscheiden: Korrekte Formulierung oder fehlerhaft? Bei Fehler müssen sie die Aussage umformulieren.
**Beispiele:**
- „Goethe reitet nachts zu seiner Geliebten" → Falsch! → „Das lyrische Ich reitet nachts zu seiner Geliebten"
- „Das lyrische Ich schildert ein intensives Naturerlebnis" → Richtig!
- „Der Dichter drückt seine Trauer über die Vergänglichkeit aus" → Falsch! → „Das lyrische Ich drückt Trauer über die Vergänglichkeit aus"
- „Eichendorff verwendet in seinem Gedicht eine Personifikation" → Richtig! (Autor als Verfasser nennen ist korrekt — nur bei Inhaltsaussagen darf man nicht Autor = lyrisches Ich setzen)
**Didaktischer Hinweis:** Die letzte Unterscheidung (Autor als Verfasser vs. Autor als Erlebender) ist subtil und wird in Klausuren häufig nicht verstanden.
**Feedback:** ✓/✗ sofort + Erklärung der Regel. Bei Fehler: korrekte Umformulierung wird angezeigt + Erklärung des Prinzips (z.B. „Falsch! Das lyrische Ich ≠ der Autor. ‚Goethe reitet' setzt den Autor mit der Sprechinstanz gleich. Richtig: ‚Das lyrische Ich reitet…'"). Bei der subtilen Unterscheidung (Verfasser vs. Erlebender): „‚Eichendorff verwendet eine Personifikation' ist korrekt — hier wird Eichendorff als Verfasser des Textes benannt, nicht als erlebende Person im Gedicht. ABER: ‚Eichendorff sehnt sich nach der Natur' wäre falsch."

### 7. Strophenform erkennen [AFB I — Reproduktion] [Erweiterung]
Gedichte werden angezeigt. Schüler bestimmen die Strophenform (Sonett, Volksliedstrophe, Ode, Ballade, Distichon) anhand von Merkmalen (Versanzahl, Reimschema, Metrum).
**Texte aus Gutenberg:** Rilke-Sonette, Goethe-Oden, Heine-Volksliedstrophen, Schiller-Balladen.
**Feedback:** ✓/✗ + Erklärung der Formmerkmale (z.B. „Richtig: Sonett — erkennbar an 14 Versen, 2 Quartetten + 2 Terzetten, oft mit Volta (Wendepunkt) zwischen Quartetten und Terzetten."). Bei Fehler: Gegenüberstellung der verwechselten Formen mit Merkmalen.

---

## Kapitel 4: Textanalyse Dramatik

### 1. Geschlossene vs. offene Dramenform (Drag & Drop) [AFB I — Reproduktion] [MVP]
Merkmale werden als Karten angezeigt. Zwei Kategorien: „Geschlossene Dramenform" und „Offene Dramenform". Schüler sortieren per Drag & Drop.
**Merkmale:**
- „Katharsis" → Geschlossene Form
- „Einheit von Ort, Zeit, Handlung" → Geschlossene Form
- „Einfühlung des Zuschauers" → Geschlossene Form
- „5-Akt-Schema (Freytags Pyramide)" → Geschlossene Form
- „Ständeklausel" → Geschlossene Form (historisch)
- „Episodische Struktur / Szenenfolge" → Offene Form
- „Fragmentarischer Aufbau" → Offene Form
- „Figuren aus niederen Ständen als Protagonisten" → Offene Form
- „Mischung von Tragischem und Komischem" → Offene Form
- „Dialektische Sprache, Alltagssprache" → Offene Form
**Feedback:** Bei Drop: ✓ grün + Kurzerklärung mit Textbeispiel aus dem Korpus (z.B. „Richtig! ‚Einheit von Ort, Zeit, Handlung' — geschlossene Form. In Schillers ‚Kabale und Liebe' spielt die Handlung an wenigen Orten in wenigen Tagen."). Bei Fehler: ✗ rot + Erklärung + Kontrastbeispiel (z.B. „‚Episodische Struktur' gehört zur offenen Form — Büchners ‚Woyzeck' besteht aus lose verbundenen Szenen ohne linearen Handlungsverlauf.").

### 2. Spannungskurve zuordnen (Interaktive Visualisierung) [AFB II — Transfer] [MVP]
Freytags Pyramide wird als SVG angezeigt. Szenen aus Schillers „Kabale und Liebe" (Gutenberg) werden als Karten dargestellt. Schüler ziehen die Szenen auf die passende Position der Spannungskurve.
**Szenen-Zuordnung (mit Aktnummern aus dem Gutenberg-Text):**
- I. Akt, 1. Szene: Miller und seine Frau → **Exposition** (Figurenvorstellung, Ausgangssituation)
- I. Akt, 7. Szene: Präsident und Ferdinand → **Erregendes Moment** (Konflikt wird deutlich)
- III. Akt: Intrige des Wurm, erzwungener Brief → **Steigende Handlung** (Konfliktverschärfung)
- IV. Akt: Luises erzwungener Brief wird Ferdinand übergeben → **Peripetie** (Wendepunkt)
- V. Akt: Vergiftungsszene → **Katastrophe**
**Feedback:** Bei korrektem Drop auf die Pyramide: ✓ + Erklärung der dramaturgischen Funktion (z.B. „Richtig! Die Vergiftungsszene ist die Katastrophe — der unumkehrbare tragische Ausgang, der aus der Peripetie folgt."). Bei Fehler: Hinweis auf die korrekte Phase + Erklärung des Unterschieds (z.B. „Diese Szene ist nicht die Peripetie, sondern die steigende Handlung — der Wendepunkt kommt erst, als Ferdinand den Brief liest und seine Liebe in Hass umschlägt.").

### 3. Szenenanalyse (Schrittweise Analyse) [AFB II — Transfer] [MVP]
**Geführte Szenenanalyse** — das zweite zentrale Klausurformat neben der Gedichtanalyse. 5 Schritte:
1. **Einordnung:** Wo steht die Szene im Drama? Vorgeschichte, Akt/Szene, Position in der Spannungskurve (Multiple Choice)
2. **Inhalt:** Was geschieht in der Szene? Wer spricht mit wem? (Freitext-Zusammenfassung)
3. **Dialoganalyse:** Redeverteilung, Gesprächsdynamik, Machtverhältnisse analysieren. Wer dominiert? Wer weicht aus? (TextHighlighting: dominante Repliken markieren)
4. **Sprachliche Gestaltung:** Stilmittel, Sprachebene, Regieanweisungen analysieren (TextAnnotation)
5. **Deutung:** Funktion der Szene für die Gesamthandlung, Bezug zum Konflikt (Freitext mit Musterlösung)
**Text:** Schiller, „Kabale und Liebe", I. Akt, 7. Szene (Ferdinand vs. Präsident) — Gutenberg.
**Didaktischer Mehrwert:** Analog zur Gedichtanalyse (Kap. 3) wird hier eine wiederholbare Methodik trainiert.
**Feedback:** Schritt 1 (MC): Sofort ✓/✗ + Erklärung der Einordnung (z.B. „Richtig: I,7 steht in der Exposition — der Grundkonflikt (Standesdenken vs. Liebe) wird hier erstmals offen ausgesprochen."). Schritt 2 (Freitext): Musterlösung + Checkliste (☐ Gesprächspartner benannt, ☐ Kernkonflikt der Szene erfasst, ☐ Ergebnis des Gesprächs formuliert). Schritt 3 (TextHighlighting): Dominante Repliken mit Musterlösung verglichen + Erklärung der Gesprächsdynamik. Schritt 4 (TextAnnotation): Standard-TextAnnotation-Feedback. Schritt 5 (Freitext): Musterlösung + Checkliste (☐ Funktion für Gesamthandlung benannt, ☐ Bezug zum Grundkonflikt, ☐ Textstellen als Belege).

### 4. Dialoganalyse mit 4-Ohren-Modell (Interaktiv) [AFB II — Transfer] [MVP]
Ein Dramen-Dialog aus „Kabale und Liebe" (Gutenberg) wird angezeigt. Zu jeder Replik können Schüler die vier Ebenen des 4-Ohren-Modells ausfüllen. **Brückenübung zu Kapitel 6 (Kommunikation).**
**Dialog-Beispiel:** Ferdinand und sein Vater (Präsident) in „Kabale und Liebe", I. Akt, 7. Szene:
- Präsident: „Du wirst dich entschließen müssen, eine Dame vom Stande zu heiraten."
  - Sachinhalt: Ankündigung einer arrangierten Heirat
  - Selbstoffenbarung: Der Präsident hält Standesdenken für wichtiger als Liebe
  - Beziehung: Autoritär, bevormundend — Vater bestimmt über den Sohn
  - Appell: Gehorche und heirate Lady Milford!
**Feedback:** Pro Ebene Freitext-Eingabe → Musterlösung wird nach Abgabe eingeblendet. Checkliste pro Ebene: z.B. Sachinhalt (☐ Kernaussage erfasst), Selbstoffenbarung (☐ Werte/Haltung des Sprechers benannt), Beziehung (☐ Machtverhältnis beschrieben), Appell (☐ Handlungsaufforderung formuliert). Schlüsselbegriff-Prüfung: Hinweis, wenn eine Ebene leer gelassen wurde oder zentrale Aspekte fehlen (z.B. „Du hast den Appell nicht ausgefüllt — was will der Präsident mit seiner Aussage erreichen?").

### 5. Figurenkonstellation „Kabale und Liebe" (Visualisierung) [AFB II — Transfer] [MVP]
Interaktive SVG-Figurenkonstellation: Ferdinand, Luise, Präsident, Wurm, Miller, Lady Milford. Schüler beschriften die Beziehungslinien (Art der Beziehung + Kurzcharakterisierung) und ordnen Zitate aus dem Gutenberg-Text den Figuren zu.
**Feedback:** Beziehungslinien-Beschriftung: Musterlösung nach Abschluss eingeblendet. Korrekte Beziehungstypen ✓ grün. Fehlende/falsche Beziehungen: blau/rot + Erklärung (z.B. „Zwischen Wurm und dem Präsidenten besteht eine Abhängigkeitsbeziehung — Wurm ist Werkzeug der Intrige, aber auch vom Präsidenten abhängig."). Zitat-Zuordnung: sofort ✓/✗ mit Erklärung.

### 6. Regieanweisungen analysieren (TextHighlighting) [AFB II — Transfer] [MVP]
Ein Dramenauszug mit Regieanweisungen wird angezeigt. Schüler markieren die Regieanweisungen und ordnen ihre Funktion zu: **Stimmung schaffen**, **Figur charakterisieren**, **Handlung vorausdeuten**, **inneren Zustand zeigen**.
**Text:** Schiller, „Kabale und Liebe" — Szenen mit aussagekräftigen Regieanweisungen (Gutenberg), z.B. „(mit einem Blick voll Verachtung)" oder „(blaß, mit bebender Stimme)".
**Feedback:** Bei korrekter Zuordnung: ✓ + Erklärung der Funktion (z.B. „Richtig: ‚blaß, mit bebender Stimme' zeigt den inneren Zustand — Luises Angst und Erschütterung werden körperlich sichtbar, bevor sie spricht."). Bei Fehler: Hinweis auf die korrekte Funktion + Abgrenzung (z.B. „‚Stimmung schaffen' bezieht sich auf Bühne/Licht/Geräusche — ‚blaß, mit bebender Stimme' ist eine Figurenanweisung, die den inneren Zustand zeigt.").

### 7. Offene vs. geschlossene Dramenform — Textvergleich [AFB III — Bewertung] [MVP]
Textauszüge aus Büchners „Woyzeck" (offene Form, fragmentarisch, Alltagssprache) werden mit Szenen aus Schillers „Kabale und Liebe" (geschlossene Form, Verssprache, 5-Akt-Struktur) verglichen. Schüler markieren strukturelle und sprachliche Unterschiede in beiden Texten und erklären deren Wirkung.
**Leitfragen:** „Wie unterscheidet sich die Sprache der Protagonisten?", „Welche Gesellschaftsschichten werden dargestellt?", „Wie ist die Handlung strukturiert — linear oder episodisch?"
**Feedback:** Musterlösung mit vormarkierten Stellen nach Abschluss. Checkliste: ☐ Sprachebene verglichen (gehobene Sprache vs. Alltagssprache/Dialekt), ☐ Figurenstatus verglichen (Adel vs. niedere Stände), ☐ Handlungsstruktur verglichen (linear vs. episodisch), ☐ Wirkung der Unterschiede beschrieben. Schlüsselbegriff-Prüfung: Warnung bei fehlendem Bezug zu „geschlossene/offene Form".

### 8. Monolog-Analyse [AFB II — Transfer] [Erweiterung]
Ein längerer Monolog (z.B. Ferdinands Monologe aus „Kabale und Liebe", Gutenberg) wird mit der SchrittweiseAnalyse-Komponente untersucht: Sprachliche Mittel, innerer Konflikt, Adressat des Monologs (Selbstgespräch oder ans Publikum gerichtet?).
**Feedback:** Pro Schritt: Musterlösung + Checkliste. Besonderer Fokus: Hinweis bei fehlendem Adressaten-Bezug (z.B. „Hast du die Frage beantwortet, ob Ferdinand zu sich selbst, zu Gott oder zum Publikum spricht? Das beeinflusst die Deutung des Monologs grundlegend.").

---

## Kapitel 5: Literaturepochen

### 1. Epochen-Zeitstrahl (Interaktive Visualisierung) [AFB I — Reproduktion] [MVP]
Interaktiver SVG-Zeitstrahl von 1720 bis Gegenwart. Epochen als farbige Bereiche mit Überlappungen. Klick auf eine Epoche blendet Merkmale, Autoren und Schlüsselwerke ein. Die Textkorpus-Werke sind als Marker auf dem Zeitstrahl platziert.
**Funktion:** Dient primär als **interaktive Referenz** und Nachschlagewerk, nicht als Übung.
**Feedback:** Kein Übungsfeedback — reine Informationskomponente. Hover zeigt Kurzinfo, Klick öffnet Detail-Panel.

### 2. Epochenmerkmale-Zuordnung (Drag & Drop) [AFB I — Reproduktion] [MVP]
Merkmale werden als Karten angezeigt. Epochen als Drop-Zonen. Schüler ordnen zu. Manche Merkmale passen zu mehreren Epochen (Multi-Drop möglich).
**Merkmale und Zuordnungen:**
- „Vernunft als höchstes Gut" → Aufklärung
- „Genie-Gedanke, Rebellion gegen Regeln" → Sturm und Drang
- „Humanität, Maß und Form" → Weimarer Klassik
- „Sehnsucht nach dem Unendlichen" → Romantik
- „Blaue Blume" → Romantik
- „Verklärung der Wirklichkeit" → Realismus
- „Milieutheorie, exakte Abbildung" → Naturalismus
- „Großstadt-Zerfall, Ich-Verlust" → Expressionismus
- „Reihungsstil, ekstatische Sprache" → Expressionismus
- „Kahlschlag-Literatur, Sprachskepsis" → Nachkriegsliteratur
**Feedback:** Bei Drop: ✓ + Erklärung + Textbeispiel aus dem Korpus (z.B. „Richtig! ‚Sehnsucht nach dem Unendlichen' — Romantik. Eichendorffs ‚Mondnacht': ‚Und meine Seele spannte / Weit ihre Flügel aus' drückt genau diese Sehnsucht aus."). Bei Fehler: ✗ + Erklärung, zu welcher Epoche das Merkmal gehört + Abgrenzung (z.B. „‚Genie-Gedanke' gehört zum Sturm und Drang, nicht zur Romantik. Unterschied: SuD betont individuelles Genie und Rebellion; Romantik betont Sehnsucht und Innerlichkeit."). Bei Multi-Drop-Merkmalen: Hinweis, dass mehrere Zuordnungen möglich sind.

### 3. Text der Epoche zuordnen (EpochenZuordnung) [AFB II — Transfer] [MVP]
Unbekannte Textauszüge (nicht aus dem Standardkorpus, sondern weitere Gutenberg-Texte) werden angezeigt. Schüler ordnen sie per Drag & Drop auf den Zeitstrahl und **begründen** ihre Entscheidung durch Auswahl der erkannten Epochenmerkmale.
**Gutenberg-Texte:**
- Novalis, „Hymnen an die Nacht" (Auszug) → Romantik (Nachtmotivik, Sehnsucht, mystische Sprache)
- Lessing, „Nathan der Weise" (Ringparabel) → Aufklärung (Toleranzgedanke, Vernunft)
- Storm, „Der Schimmelreiter" (Anfang) → Realismus (Landschaftsbeschreibung, Rahmenerzählung)
- Hauptmann, „Die Weber" (Auszug) → Naturalismus (Dialekt, Milieu, soziales Elend)
- Trakl, „Verfall" → Expressionismus (Zerfallsbilder, Reihungsstil)
- Goethe, „Faust I" (Szene „Nacht") → Sturm und Drang / Klassik (Grenzgänger-Text!)
**Feedback:** Bei korrekter Epochenzuordnung: ✓ + Bestätigung der erkannten Merkmale (z.B. „Richtig: Romantik! Du hast erkannt: Nachtmotivik, mystische Sprache, Sehnsucht."). Bei falscher Zuordnung: ✗ + Hinweis auf die korrekten Merkmale im Text (z.B. „Dieser Text zeigt typische Merkmale des Naturalismus: Dialekt, Milieuschilderung, soziales Elend — nicht der Romantik."). Bei Grenzgänger-Texten (z.B. Faust): „Beide Zuordnungen sind vertretbar! Faust wurde über Jahrzehnte geschrieben und enthält SuD- UND Klassik-Merkmale. In der Klausur: Begründung am Text entscheidet."

### 4. Epochenvergleich (TextVergleich) [AFB II — Transfer] [MVP]
Zwei Textauszüge aus verschiedenen Epochen werden nebeneinander angezeigt. Schüler markieren epochentypische Merkmale in beiden Texten und formulieren Unterschiede.
**Vergleichspaare aus Gutenberg:**
- Goethe, „Willkommen und Abschied" (Sturm und Drang) vs. Eichendorff, „Mondnacht" (Romantik) — Naturerlebnis in verschiedenen Epochen
- Schiller, „Kabale und Liebe" (Sturm und Drang) vs. Hauptmann, „Die Weber" (Naturalismus) — Soziale Thematik, unterschiedliche Darstellung
- Fontane, „Effi Briest" (Realismus) vs. Kafka, „Die Verwandlung" (Moderne) — Gesellschaftsbild, Erzähltechnik
**Feedback:** Musterlösung mit vormarkierten epochentypischen Stellen nach Abschluss. Pro Vergleichspaar: Erklärung, was die markierten Stellen über die jeweilige Epoche aussagen (z.B. „Im Sturm-und-Drang-Text: dynamische Naturbilder als Spiegel des Gefühls. Im Romantik-Text: stille, sehnsuchtvolle Naturbilder als Ausdruck der Innerlichkeit."). Checkliste: ☐ In beiden Texten Merkmale markiert, ☐ Epochen benannt, ☐ Unterschiede formuliert.

### 5. Epochen-Grenzfälle — Argumentationsübung [AFB III — Bewertung] [MVP]
Texte, die **Merkmale mehrerer Epochen** tragen, werden präsentiert. Schüler müssen sich für eine Zuordnung entscheiden und ihre Wahl **argumentativ begründen** (Freitext mit Musterlösung). Trainiert die Einsicht, dass Epochengrenzen fließend sind.
**Beispiele aus Gutenberg:**
- Schiller, „Kabale und Liebe" — Sturm und Drang ODER Klassik? (Gefühlsaufruhr vs. Formstrenge)
- Heine, „Das Fräulein stand am Meere" — Romantik ODER Anti-Romantik? (Romantische Bilder, aber ironische Brechung)
- Goethe, „Faust I" — Sturm und Drang, Klassik ODER beides? (entstanden über Jahrzehnte)
- Fontane, „Effi Briest" — Poetischer Realismus ODER schon Naturalismus? (gesellschaftliche Determination)
**Feedback:** Musterlösung mit zwei argumentativen Positionen (pro Zuordnung A und pro Zuordnung B). Checkliste: ☐ Eigene Zuordnung begründet, ☐ Textbelege angeführt, ☐ Gegenposition erwähnt, ☐ Fließende Epochengrenzen reflektiert. Schlüsselbegriff-Prüfung: Hinweis, falls keine Textbelege erkennbar sind. Wichtig: **Keine „richtige" Antwort** — beide Zuordnungen sind vertretbar, die Qualität der Argumentation entscheidet.

### 6. Epochen-Steckbrief erstellen [AFB I — Reproduktion] [Erweiterung]
Interaktives Formular: Schüler füllen für jede Epoche einen Steckbrief aus (Zeitraum, Merkmale, Autoren, Schlüsselwerke, Menschenbild). Die Steckbriefe werden gespeichert und bilden ein persönliches Nachschlagewerk.
**Feedback:** Felder werden mit Musterlösung verglichen. Korrekte Einträge: ✓. Fehlende zentrale Merkmale: Hinweis (z.B. „Dir fehlt ein zentrales Merkmal der Romantik: die ‚Blaue Blume' als Symbol der Sehnsucht."). Falsche Einträge: Korrektur + Erklärung.

---

## Kapitel 6: Kommunikation & Sprache

### 1. 4-Ohren-Modell-Simulator (Interaktive Visualisierung) [AFB I — Reproduktion] [MVP]
Ein literarisches Zitat aus dem Textkorpus wird angezeigt. Das Vier-Seiten-Quadrat wird als SVG dargestellt. Schüler füllen die Interpretation für jede Ebene ein. Vergleich mit Musterlösung.
**Beispielsätze aus Gutenberg-Dramen (statt Standard-Alltagsbeispiele):**
- Schiller, „Kabale und Liebe": Präsident zu Ferdinand: „Du wirst dich entschließen müssen, eine Dame vom Stande zu heiraten."
- Fontane, „Effi Briest": Innstetten zu Effi: „Du bist doch sonst eine so verständige, kleine Frau."
- Schiller, „Kabale und Liebe": Luise zu Ferdinand: „Mein Vater! — Die Geigen!"
**Didaktischer Mehrwert:** Literarische Zitate sind vielschichtiger als Alltagsbeispiele und trainieren gleichzeitig die Textkenntnis.
**Feedback:** Pro Ebene: Musterlösung nach Eingabe eingeblendet. Checkliste pro Ebene (z.B. Sachinhalt: ☐ Kernaussage erfasst, Selbstoffenbarung: ☐ Werte/Haltung des Sprechers benannt, Beziehung: ☐ Hierarchie/Machtverhältnis beschrieben, Appell: ☐ Implizite Aufforderung formuliert). Schlüsselbegriff-Prüfung: Hinweis bei leeren Feldern (z.B. „Du hast die Beziehungsebene nicht ausgefüllt — welches Machtverhältnis steckt in dieser Aussage?"). Zusätzlich: Hinweis, welche Ebene in diesem Zitat besonders aufschlussreich ist (z.B. „Besonders die Beziehungsebene ist hier wichtig: Der Präsident spricht von oben herab und betrachtet seinen Sohn als verfügbar.").

### 2. Watzlawick-Axiome zuordnen (Drag & Drop) [AFB I — Reproduktion] [MVP]
Die 5 Axiome von Watzlawick werden als Theoriekarten angezeigt. Daneben: Kommunikationssituationen aus dem Textkorpus. Schüler ordnen jeder Situation das passende Axiom zu.
**Beispiele:**
- Ferdinand schweigt auf die Frage seines Vaters → „Man kann nicht nicht kommunizieren" (Axiom 1)
- Innstetten und Effi reden über das Wetter, meinen aber ihre Beziehung → „Inhalts- und Beziehungsaspekt" (Axiom 2)
- Luise und Ferdinand beschuldigen sich gegenseitig, den Streit begonnen zu haben → „Interpunktion" (Axiom 3)
- Effis Tonfall widerspricht ihren Worten → „Analog und digital" (Axiom 4)
**Feedback:** Bei Drop: ✓ + Erklärung, wie das Axiom in dieser Situation wirkt (z.B. „Richtig: Axiom 1 — ‚Man kann nicht nicht kommunizieren.' Ferdinands Schweigen IST Kommunikation: Es drückt Widerstand, Verweigerung und Protest aus."). Bei Fehler: ✗ + Erklärung des korrekten Axioms + Abgrenzung zum gewählten (z.B. „Das ist nicht Axiom 2 (Inhalts-/Beziehungsaspekt), sondern Axiom 1. Axiom 2 wäre: Man redet über eine Sache, aber eigentlich geht es um die Beziehung.").

### 3. Kommunikationsstörung erkennen (Quiz) [AFB II — Transfer] [MVP]
Dialogszenen aus Dramen werden angezeigt. Schüler identifizieren die Art der Kommunikationsstörung und benennen, auf welcher Ebene (Schulz von Thun) bzw. nach welchem Axiom (Watzlawick) die Störung liegt.
**Dialogbeispiele aus Gutenberg:**
- Schiller, „Kabale und Liebe": Ferdinand und Luise reden aneinander vorbei → Missverständnis auf der Beziehungsebene
- Fontane, „Effi Briest": Innstetten und Effi → komplementäre Kommunikation (er bestimmt, sie fügt sich)
- Büchner, „Woyzeck": Hauptmann und Woyzeck → asymmetrisches Machtverhältnis bestimmt die Kommunikation
**Feedback:** ✓/✗ + ausführliche Erklärung der Kommunikationsstörung mit Bezug zum konkreten Dialog (z.B. „Richtig! Ferdinand und Luise reden aneinander vorbei: Ferdinand hört auf der Beziehungsebene (Eifersucht), Luise spricht auf der Sachebene (Unschuld). Schulz von Thun: Sender und Empfänger gewichten die vier Ebenen unterschiedlich."). Bei Fehler: Erklärung, warum die gewählte Störung nicht zutrifft + Hinweis auf die korrekte.

### 4. Organon-Modell anwenden (Drag & Drop) [AFB I — Reproduktion] [MVP]
Verschiedene Textauszüge aus dem Korpus (Gedicht, Dramenmonolog, Sachtext, Brief) werden angezeigt. Schüler ordnen die **dominante Sprachfunktion** zu (Ausdruck, Darstellung, Appell).
**Erweiterung:** Für fortgeschrittene SuS: „Wie verschiebt sich die dominante Funktion im Verlauf des Textes?" — z.B. in Ferdinands Monolog von Ausdruck (Klage) zu Appell (Drohung).
**Feedback:** Bei Drop: ✓ + Erklärung der dominanten Funktion mit konkretem Textbeleg (z.B. „Richtig: Ausdruck — Ferdinands Monolog drückt primär seine innere Zerrissenheit aus, erkennbar an den Ausrufen und emotionalen Bildern."). Bei Fehler: ✗ + Erklärung der drei Funktionen in Bezug auf diesen Text + Abgrenzung.

### 5. Dramen-Dialog mit Kommunikationsmodell analysieren (Schrittweise Analyse) [AFB II — Transfer] [MVP]
Geführte Analyse: Ein Dramen-Dialog (Gutenberg) wird in Schritten mit **verschiedenen** Kommunikationsmodellen analysiert — das unterscheidet diese Übung von der Dialoganalyse in Kap. 4 (dort: dramaturgische Analyse):
1. Sender/Empfänger und Gesprächssituation identifizieren
2. 4-Ohren-Modell auf eine zentrale Replik anwenden
3. Kommunikationsstörung nach Watzlawick identifizieren
4. Machtdynamik und Beziehungsstruktur analysieren (symmetrisch/komplementär)
5. Reflexion: Welches Modell erklärt den Dialog am besten?
**Feedback:** Schritte 1–4: Pro Schritt Musterlösung + Checkliste. Schritt 1: ☐ Gesprächssituation beschrieben, ☐ Machtverhältnis erkannt. Schritt 2: ☐ Alle vier Ebenen ausgefüllt, ☐ Textstelle zitiert. Schritt 3: ☐ Axiom benannt, ☐ Störung beschrieben. Schritt 4: ☐ Symmetrisch/komplementär bestimmt, ☐ Textbeleg. Schritt 5 (Freitext): Musterlösung + Schlüsselbegriff-Prüfung (z.B. „Deine Antwort enthält keinen Vergleich der Modelle — welches erklärt die Kommunikation hier besser?").

### 6. Sprachwandel-Timeline [AFB I — Reproduktion] [Erweiterung]
Interaktive Komponente: Textauszüge aus verschiedenen Jahrhunderten werden nebeneinander gezeigt. Schüler identifizieren Sprachwandel-Phänomene (Bedeutungswandel, grammatische Veränderungen, Wortschatzwandel).
**Textbeispiele aus Gutenberg:** Luther-Bibelübersetzung → Lessing (18. Jh.) → Fontane (19. Jh.) → Trakl (frühes 20. Jh.)
**Feedback:** Bei korrekter Identifikation: ✓ + Erklärung des Sprachwandel-Phänomens (z.B. „Richtig: ‚Weib' hat einen Bedeutungswandel durchlaufen — im 16. Jh. neutral (= Frau), heute negativ konnotiert."). Bei Fehler: Hinweis auf das korrekte Phänomen.

### 7. Sprachkritik-Debatte [AFB III — Bewertung] [Erweiterung]
Materialgestützte Aufgabe: Verschiedene Positionen zur Sprachkritik (Gendern, Anglizismen, Jugendsprache) werden als Textmaterial bereitgestellt. Schüler ordnen Argumente per ArgumentBuilder und formulieren eine eigene Position.
**Feedback:** ArgumentBuilder: Strukturelles Feedback (z.B. „Jedes Argument braucht einen Beleg"). Eigene Position (Freitext): Musterlösung mit Beispiel-Erörterung + Checkliste (☐ These formuliert, ☐ Argumente mit Belegen, ☐ Gegenposition einbezogen, ☐ Fazit).

---

## Kapitel 7: Erörterung & Materialgestütztes Schreiben

### 1. Argumentationstypen erkennen (Drag & Drop) [AFB I — Reproduktion] [MVP]
Verschiedene Argumente werden als Karten angezeigt. Kategorien: Faktenargument, Autoritätsargument, Beispielargument, normatives Argument, Analogieargument. Schüler ordnen per Drag & Drop zu.
**Themen-Beispiele:**
- „Laut einer Studie der Universität Mannheim…" → Autoritätsargument
- „In Schweden hat man damit gute Erfahrungen gemacht…" → Beispielargument
- „Es ist ein Grundrecht, dass…" → Normatives Argument
- „Wie in einem Orchester müssen alle Stimmen zusammenwirken…" → Analogieargument
- „Die Zahl der Anmeldungen ist um 30% gestiegen…" → Faktenargument
**Feedback:** Bei Drop: ✓ + Erklärung des Argumentationstyps + Stärken/Schwächen (z.B. „Richtig: Autoritätsargument — stützt sich auf die Expertise einer anerkannten Quelle. Stärke: hohe Glaubwürdigkeit. Schwäche: Die Autorität muss relevant sein — ein Physiker ist keine Autorität für Bildungspolitik."). Bei Fehler: ✗ + Abgrenzung (z.B. „Das ist kein Beispielargument, sondern ein Autoritätsargument. Unterschied: Ein Beispielargument beschreibt einen konkreten Fall, ein Autoritätsargument beruft sich auf eine Person/Institution.").

### 2. Erörterungsstruktur aufbauen (ArgumentBuilder) [AFB II — Transfer] [MVP]
Ein Thema wird vorgegeben. Bausteine (These, Argument, Beleg, Beispiel, Gegenargument, Entkräftung, Fazit) stehen als Drag-Karten bereit. Schüler bauen eine dialektische Erörterungsstruktur auf.
**Validierung:** Strukturelle Prüfung (z.B. „Jedes Argument braucht einen Beleg", „Gegenargumente müssen entkräftet werden", „Das Fazit darf kein neues Argument enthalten").
**Themen (mit Bezug zum Textkorpus):**
- „Ist Innstettens Handeln in ‚Effi Briest' moralisch vertretbar?"
- „Sollte Literaturunterricht im Zeitalter von KI anders gestaltet werden?"
- „Kann Literatur die Gesellschaft verändern?"
**Feedback:** Strukturelle Prüfung nach „Prüfen"-Klick: Jeder Baustein wird markiert — ✓ korrekt eingeordnet / ⚠ Strukturproblem. Konkrete Hinweise pro Problem: z.B. „⚠ Argument ohne Beleg — ein Argument wird erst überzeugend, wenn es mit einem konkreten Beleg gestützt wird.", „⚠ Gegenargument ohne Entkräftung — in einer dialektischen Erörterung muss jedes Gegenargument widerlegt oder eingeschränkt werden.", „⚠ Neues Argument im Fazit — das Fazit fasst zusammen, bringt aber keine neuen Argumente."

### 3. Einleitungssatz-Training [AFB I — Reproduktion] [MVP]
Der Basissatz einer Textanalyse (Autor, Titel, Textsorte, Erscheinungsjahr, Thema) wird systematisch geübt. Zwei Formate:
1. **Lückentext:** Vorstrukturierter Einleitungssatz mit Lücken für Autor, Titel, Textsorte, Jahr, Thema
2. **Bewertung:** Drei verschiedene Einleitungssätze zum selben Text werden angezeigt — Schüler bewerten sie (gut/mittel/schwach) und begründen
**Beispiel:**
- Schwach: „In dem Gedicht geht es um Natur." (zu vage, Titel fehlt, Autor fehlt)
- Mittel: „Goethe schrieb ‚Willkommen und Abschied' über eine Liebesbegegnung." (Textsorte fehlt, Jahr fehlt)
- Gut: „Das Gedicht ‚Willkommen und Abschied' von Johann Wolfgang von Goethe, entstanden 1771 in der Epoche des Sturm und Drang, thematisiert die überwältigende Kraft eines nächtlichen Liebeserlebnisses in der Natur."
**Feedback:** Lückentext: Sofort ✓/✗ pro Lücke. Bei Fehler: Hinweis, welche Information erwartet wird (z.B. „Hier fehlt die Textsorte — ist es ein Gedicht, eine Erzählung, ein Drama?"). Bewertung: ✓/✗ pro Einleitungssatz + ausführliche Erklärung, was fehlt/gut ist (z.B. „Schwach, weil: kein Autor, kein Titel, kein Jahr, kein Epochenbezug, Themenangabe zu vage. Ein guter Einleitungssatz enthält: Autor, Titel, Textsorte, Erscheinungsjahr, Epoche und eine präzise Themenangabe.").

### 4. Zitiertechnik üben (Lückentext) [AFB I — Reproduktion] [MVP]
Verschiedene Zitateinbindungen werden als Lückentext angezeigt. Schüler ergänzen die korrekte Einbettung (Konjunktiv I, Einleitungssatz, Quellenangabe).
**Beispiele:**
- Direktes Zitat: „Fontane lässt Effi sagen: ‚___' (Kap. ___)"
- Indirektes Zitat: „Innstetten erklärt, er ___ (sei/ist) dazu verpflichtet" → Konjunktiv I!
- Eingebettetes Zitat: „Die zentrale Aussage, dass ‚___' (S. ___), verdeutlicht Innstettens Pflichtbewusstsein."
- Paraphrase mit Beleg: „Effi fühlt sich in Kessin unwohl (vgl. Kap. ___), was sich besonders in der Szene ___ zeigt."
**Feedback:** Sofort ✓/✗ pro Lücke. Bei Konjunktiv-Fehlern: gezielte Erklärung (z.B. „Indirektes Zitat verlangt Konjunktiv I: ‚er sei', nicht ‚er ist'. Konjunktiv I signalisiert dem Leser, dass hier die Position einer Figur wiedergegeben wird."). Bei Quellenangabe-Fehlern: Hinweis auf korrektes Format. Toleranz bei Synonymen (z.B. „erklärt"/„sagt"/„behauptet" alle akzeptiert).

### 5. Konjunktiv I/II für indirekte Rede [AFB I — Reproduktion] [MVP]
Dedizierte Übung zur Konjunktiv-Bildung — kritisch für Analyse und Erörterung. Sätze aus dem Textkorpus werden in direkter Rede angezeigt, Schüler formen sie in indirekte Rede mit korrektem Konjunktiv I um. Bei Gleichlaut mit Indikativ → Konjunktiv II als Ersatzform.
**Beispiele:**
- Ferdinand: „Ich liebe Luise." → Ferdinand erklärt, er liebe Luise.
- Effi: „Ich habe Angst." → Effi sagt, sie habe Angst.
- Innstetten: „Wir müssen nach Kessin." → Innstetten erklärt, sie müssten nach Kessin. (Konjunktiv II, da „müssen" in Konj. I = „müssen" → identisch mit Indikativ Plural)
**Feedback:** Sofort ✓/✗ + Erklärung der Konjunktiv-Regel. Bei Fehler: gezielte Erklärung (z.B. „‚müssen' in Konjunktiv I (3. Pers. Pl.) = ‚müssen' — identisch mit Indikativ! Deshalb Ersatzform Konjunktiv II: ‚müssten'."). Bei korrekter Antwort: Bestätigung + Regelhinweis (z.B. „Richtig! ‚liebe' ist Konjunktiv I — klar unterscheidbar vom Indikativ ‚liebt'."). Toleranz: Umstellungen im Satz werden akzeptiert, solange der Konjunktiv korrekt ist.

### 6. These formulieren (Multiple Choice + Freitext) [AFB II — Transfer] [MVP]
Verschiedene Themen werden angezeigt. **Einstieg:** Schüler wählen die stärkste These aus 4 Optionen und begründen, warum die anderen schwächer sind. **Vertiefung:** Schüler formulieren eine eigene These.
Feedback erklärt, was eine gute These ausmacht: **konkret**, **diskutierbar** (nicht trivial wahr/falsch), **begründbar mit Textbelegen**.
**Themen:**
- „Effi Briest: Opfer oder Mitschuldige?"
- „Ist Schillers Gesellschaftskritik in ‚Kabale und Liebe' heute noch aktuell?"
- „Ist Woyzeck ein Mörder oder ein Opfer der Gesellschaft?"
**Feedback:** MC-Teil: ✓/✗ + Erklärung für jede Option (z.B. „These A ist zu vage: ‚Effi hat Probleme' — das ist keine These, sondern eine Feststellung. These B ist stark: ‚Effi ist Opfer gesellschaftlicher Konventionen, nicht individuellen Versagens' — konkret, diskutierbar, belegbar."). Freitext-Teil: Musterlösung + Checkliste (☐ Konkret — nicht zu allgemein?, ☐ Diskutierbar — kann man auch das Gegenteil argumentieren?, ☐ Belegbar — lässt sich am Text nachweisen?). Schlüsselbegriff-Prüfung: Hinweis, falls die These zu vage ist (z.B. „Deine These enthält kein konkretes Themenfeld — worauf genau bezieht sich deine Argumentation?").

### 7. Materialgestütztes Schreiben — Materialauswertung [AFB II — Transfer] [MVP]
Verschiedene Materialien (Textauszüge, Statistiken, Zitate) werden zu einem Thema angeboten. Schüler wählen die relevanten Materialien aus, ordnen sie Argumenten zu und erstellen per ArgumentBuilder eine Gliederung.
**Thema:** „Brauchen wir einen literarischen Kanon?" — Mit Materialien aus verschiedenen Perspektiven.
**Feedback:** Materialauswahl: ✓/✗ mit Erklärung, warum ein Material relevant/irrelevant ist (z.B. „Material 3 ist relevant — es liefert Daten zur Lesekompetenz, die als Faktenargument dienen können."). ArgumentBuilder: Strukturelles Feedback wie bei Übung 2. Zusätzlich: Hinweis, wenn relevante Materialien nicht verwendet wurden (z.B. „Du hast Material 4 nicht einbezogen — es enthält ein wichtiges Gegenargument, das deine Erörterung stärken würde.").

### 8. Gute vs. schwache Analyseformulierungen [AFB II — Transfer] [Erweiterung]
Statt eines Formulierungsbaukastens (der zu schablonenhaftem Schreiben verleiten kann): Paare von Analysesätzen werden angezeigt — einer gelungen, einer schwach. Schüler identifizieren den besseren und begründen, warum er besser ist.
**Beispiele:**
- Schwach: „Es gibt eine Metapher. Diese macht den Text schöner."
- Besser: „Die Metapher ‚Feuer der Leidenschaft' (V. 3) verdeutlicht die Intensität von Ferdinands Gefühlen und unterstreicht seinen leidenschaftlichen Charakter."
- → Begründung: Der bessere Satz benennt das Stilmittel, belegt es mit Textstelle, analysiert die Wirkung und stellt den Kontextbezug her.
**Feedback:** ✓/✗ + ausführliche Erklärung, was den besseren Satz besser macht. Kriterien werden benannt: (1) Stilmittel benannt, (2) Textstelle zitiert, (3) Wirkung beschrieben, (4) Kontextbezug hergestellt. Bei Fehler: „Der erste Satz benennt nur das Stilmittel (‚eine Metapher') — ohne Textstelle, ohne Wirkung, ohne Kontext. ‚Macht den Text schöner' ist keine Wirkungsanalyse."

---

## Kapitel 8: Werkvergleich & Motivanalyse

### 1. Motivvergleich-Annotation (TextVergleich) [AFB II — Transfer] [MVP]
Zwei Textauszüge aus verschiedenen Epochen werden nebeneinander angezeigt, verbunden durch ein gemeinsames Motiv. Schüler markieren in beiden Texten die Stellen, die das Motiv aufgreifen, und beschreiben die unterschiedliche Umsetzung.
**Vergleichspaare aus Gutenberg:**
- **Motiv „Gesellschaftszwang":** Fontane, „Effi Briest" (Effis Anpassungszwang, Kap. 24–26) vs. Schiller, „Kabale und Liebe" (Standesschranken, I. Akt)
- **Motiv „Naturerlebnis":** Goethe, „Willkommen und Abschied" vs. Eichendorff, „Mondnacht" — Sturm und Drang: Natur als Spiegel des Gefühls; Romantik: Natur als Sehnsuchtsraum
- **Motiv „Identitätskrise / Wahrnehmungsverlust":** Kafka, „Die Verwandlung" (Anfang) vs. E.T.A. Hoffmann, „Der Sandmann" (Nathanaels Wahnvorstellungen)
- **Motiv „Pflicht vs. Neigung":** Innstetten in „Effi Briest" vs. Ferdinand in „Kabale und Liebe"
**Feedback:** Musterlösung mit vormarkierten Motivstellen nach Abschluss. Pro Textpaar: Erklärung der unterschiedlichen Motivumsetzung (z.B. „Motiv ‚Gesellschaftszwang': Bei Fontane wirkt der Zwang subtil durch gesellschaftliche Konventionen — Effi fügt sich. Bei Schiller ist der Zwang explizit und gewaltsam — Luise wird erpresst."). Checkliste: ☐ In beiden Texten Motivstellen markiert, ☐ Unterschiedliche Umsetzung beschrieben, ☐ Epochenbezug hergestellt.

### 2. Epochenübergreifender Themenvergleich (Schrittweise Analyse) [AFB III — Bewertung] [MVP]
Geführte vergleichende Analyse in Schritten:
1. Beide Texte einzeln zusammenfassen
2. Gemeinsames Thema/Motiv identifizieren und benennen
3. Unterschiede in der Umsetzung herausarbeiten (Sprache, Form, Perspektive, Figurengestaltung)
4. Epochentypische Merkmale in beiden Texten nachweisen
5. Vergleichendes Fazit formulieren: Was sagt der Vergleich über die unterschiedlichen Epochen / Menschenbilder aus?
**Konkretes Textpaar:** Fontane, „Effi Briest" (Kap. 1 — Effis Vorstellung) vs. Kafka, „Die Verwandlung" (Anfang — Gregors Erwachen). Thema: Einführung der Hauptfigur — Realismus vs. Moderne.
**Feedback:** Pro Schritt: Musterlösung + Checkliste. Schritt 1: ☐ Kerninhalt beider Texte erfasst. Schritt 2: ☐ Gemeinsames Thema präzise benannt (nicht zu vage). Schritt 3: ☐ Sprache, Form UND Perspektive verglichen. Schritt 4: ☐ Epochenmerkmale mit Textstellen belegt. Schritt 5: ☐ Fazit bezieht sich auf Menschenbild/Weltbild der Epochen. Schlüsselbegriff-Prüfung pro Schritt.

### 3. Figurenvergleich (FigurenZuordnung) [AFB II — Transfer] [MVP]
Figuren aus verschiedenen Werken werden nebeneinander gestellt. Eigenschaften, Motive und Zitate werden als Karten angezeigt. Schüler ordnen zu und identifizieren Parallelen und Unterschiede.
**Vergleiche:**
- **Effi Briest** (Fontane) vs. **Luise Miller** (Schiller) — Beide als „Opfer der Gesellschaft"? Oder unterschiedliche Handlungsfähigkeit?
- **Innstetten** (Fontane) vs. **Präsident von Walter** (Schiller) — Pflichtbewusstsein vs. Machtmissbrauch
- **Woyzeck** (Büchner) vs. **Gregor Samsa** (Kafka) — Entmenschlichung in Vormärz und Moderne
**Feedback:** Sofort ✓/✗ bei jeder Zuordnung + Erklärung (z.B. „Richtig: ‚Fügt sich den gesellschaftlichen Konventionen' passt zu Effi — sie rebelliert nicht offen, sondern leidet still. Luise hingegen konfrontiert die Machthaber direkt."). Nach Abschluss aller Zuordnungen: Zusammenfassung der Parallelen und Unterschiede zwischen den Figurenpaaren.

### 4. Werkvergleich-Essay planen (ArgumentBuilder + TextAnnotation) [AFB III — Bewertung] [MVP]
Schüler erhalten eine Vergleichsaufgabe (Abitur-Stil) und planen ihren Essay:
1. **These formulieren** (Freitext mit Feedback: Ist die These konkret und diskutierbar?)
2. **Vergleichsaspekte identifizieren** (aus vorgeschlagenen Aspekten wählen oder eigene ergänzen)
3. **Argumentationsstruktur aufbauen** (ArgumentBuilder — lineare oder aspektorientierte Gliederung)
4. **Textbelege sammeln** (Zitate aus beiden Texten per TextAnnotation markieren und den Vergleichsaspekten zuordnen)
**Beispielaufgabe:** „Vergleichen Sie die Darstellung weiblicher Figuren in Fontanes ‚Effi Briest' und Schillers ‚Kabale und Liebe' unter dem Aspekt der gesellschaftlichen Zwänge."
**Feedback:** Schritt 1 (These): Schlüsselbegriff-Prüfung + Checkliste (☐ Konkret, ☐ Diskutierbar, ☐ Belegbar). Musterthese zum Vergleich. Schritt 2 (Aspekte): Hinweis zu jedem gewählten Aspekt (z.B. „Gesellschaftliche Zwänge — achte auf: Art des Zwangs, Reaktion der Figur, gesellschaftlicher Kontext/Epoche."). Schritt 3 (ArgumentBuilder): Strukturelles Feedback wie in Kap. 7. Schritt 4 (TextAnnotation): Hinweis, wenn Aspekte ohne Textbelege bleiben (z.B. „Für den Aspekt ‚Reaktion der Figur' hast du noch kein Zitat aus ‚Kabale und Liebe' markiert.").

### 5. Intertextualitäts-Netz (Interaktive Visualisierung) [AFB III — Bewertung] [Erweiterung]
SVG-basiertes Netzdiagramm: Werke als Knoten, Verbindungen als beschriftete Linien (gemeinsames Motiv, Epochenbezug, Einfluss). Schüler können eigene Verbindungen hinzufügen und beschriften.
**Werke:** Alle Gutenberg-Texte aus dem Textkorpus.
**Feedback:** Bei neuer Verbindung: Schüler werden aufgefordert, die Verbindung zu beschriften (Art der Verbindung + Begründung). Musterlösung mit vordefinierten Verbindungen als Overlay einblendbar. Fehlende zentrale Verbindungen werden als „Hast du daran gedacht?"-Hinweis angezeigt (z.B. „Hast du die Verbindung zwischen ‚Effi Briest' und ‚Kabale und Liebe' bemerkt? Beide Werke thematisieren den Konflikt zwischen individueller Neigung und gesellschaftlicher Konvention.").
