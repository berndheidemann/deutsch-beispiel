// Kapitel 03: Lyrik — Übungsdaten

// ============================================================
// 1. MetrumKlopfer: Verse mit Silben
// ============================================================

export const metrumKlopferVerse = [
  {
    id: 'goethe-willkommen',
    silben: [
      { text: 'Es', betont: false },
      { text: 'schlug', betont: true },
      { text: 'mein', betont: false },
      { text: 'Herz,', betont: true },
      { text: 'ge', betont: false },
      { text: 'schwind', betont: true },
      { text: 'zu', betont: false },
      { text: 'Pfer', betont: true },
      { text: 'de!', betont: false },
    ],
    versfuss: 'Jambus',
    wirkung:
      'Der Jambus erzeugt einen drängenden, vorwärtstreibenden Rhythmus, der die Ungeduld und Leidenschaft des lyrischen Ichs hörbar macht — das Herzklopfen wird zum Versrhythmus.',
    quelle: 'Goethe: „Willkommen und Abschied" (1771/1789) — Sturm und Drang',
  },
  {
    id: 'goethe-wandrers',
    silben: [
      { text: 'Ü', betont: true },
      { text: 'ber', betont: false },
      { text: 'al', betont: true },
      { text: 'len', betont: false },
      { text: 'Gip', betont: true },
      { text: 'feln', betont: false },
      { text: 'ist', betont: false },
      { text: 'Ruh', betont: true },
    ],
    versfuss: 'Trochäus (mit Variationen)',
    wirkung:
      'Der vorherrschende Trochäus mit der unbetonten Senkung am Ende erzeugt ein Ausklingen, das die Ruhe und Stille des Gedichts rhythmisch abbildet.',
    quelle: 'Goethe: „Wandrers Nachtlied" (1780) — Klassik',
  },
  {
    id: 'eichendorff-mondnacht',
    silben: [
      { text: 'Es', betont: false },
      { text: 'war,', betont: true },
      { text: 'als', betont: false },
      { text: 'hätt', betont: true },
      { text: 'der', betont: false },
      { text: 'Him', betont: true },
      { text: 'mel', betont: false },
    ],
    versfuss: 'Jambus',
    wirkung:
      'Der regelmäßige Jambus mit weiblicher Kadenz erzeugt einen ruhigen, wiegenden Rhythmus, der das Traumhafte und Entrückte der romantischen Nachtstimmung unterstreicht.',
    quelle: 'Eichendorff: „Mondnacht" (1837) — Romantik',
  },
];

// ============================================================
// 2. ReimschemaQuiz: Eichendorff „Mondnacht"
// ============================================================

export const reimschemaEichendorff = {
  strophe: [
    { id: 'v1', text: 'Es war, als hätt der Himmel', reimBuchstabe: 'a' },
    { id: 'v2', text: 'Die Erde still geküsst,', reimBuchstabe: 'b' },
    { id: 'v3', text: 'Dass sie im Blütenschimmer', reimBuchstabe: 'a' },
    { id: 'v4', text: 'Von ihm nun träumen müsst.', reimBuchstabe: 'b' },
  ],
  reimschemaName: 'Kreuzreim',
  erklaerung:
    'Die Verse reimen sich abwechselnd (abab): „Himmel" reimt auf „Blütenschimmer" (unreiner Reim) und „geküsst" auf „müsst" (reiner Reim). Der Kreuzreim ist die häufigste Reimform in der deutschen Lyrik und erzeugt ein ausgewogenes, fließendes Klangbild.',
};

// ============================================================
// 3. MetrumVisualizer: Visualisierungsdaten
// ============================================================

export const metrumVisualizerData = [
  {
    vers: 'Es schlug mein Herz, geschwind zu Pferde!',
    silben: [
      { text: 'Es', betont: false },
      { text: 'schlug', betont: true },
      { text: 'mein', betont: false },
      { text: 'Herz,', betont: true },
      { text: 'ge', betont: false },
      { text: 'schwind', betont: true },
      { text: 'zu', betont: false },
      { text: 'Pfer', betont: true },
      { text: 'de!', betont: false },
    ],
    versfuss: 'Jambus',
    kadenz: 'weiblich (klingend)',
  },
  {
    vers: 'Es war, als hätt der Himmel',
    silben: [
      { text: 'Es', betont: false },
      { text: 'war,', betont: true },
      { text: 'als', betont: false },
      { text: 'hätt', betont: true },
      { text: 'der', betont: false },
      { text: 'Him', betont: true },
      { text: 'mel', betont: false },
    ],
    versfuss: 'Jambus',
    kadenz: 'weiblich (klingend)',
  },
];

// ============================================================
// 4. Multiple-Choice: Gedichtanalyse-Konzepte
// ============================================================

export const gedichtanalyseMC = [
  {
    question:
      'Was versteht man unter dem „lyrischen Ich" und warum ist die Unterscheidung vom Autor wichtig?',
    options: [
      {
        id: 'a',
        text: 'Das lyrische Ich ist die Sprechinstanz im Gedicht — es ist nicht automatisch mit dem Autor identisch, sondern eine fiktive Stimme.',
        correct: true,
        explanation:
          'Richtig! Das lyrische Ich ist eine literarische Konstruktion. Auch wenn Goethe „Ich" schreibt, ist dieses Ich nicht zwangsläufig Goethe selbst. Die Unterscheidung ist methodisch wichtig, um biografische Kurzschlüsse zu vermeiden.',
      },
      {
        id: 'b',
        text: 'Das lyrische Ich ist immer der Autor des Gedichts.',
        correct: false,
        explanation:
          'Das ist ein häufiger Fehler! Das lyrische Ich kann dem Autor nahestehen, muss es aber nicht. In vielen Gedichten spricht eine fiktive Person oder eine Rollenstimme.',
      },
      {
        id: 'c',
        text: 'Das lyrische Ich kommt nur in Gedichten mit „Ich"-Form vor.',
        correct: false,
        explanation:
          'Auch Gedichte ohne explizites „Ich" haben ein lyrisches Ich — es ist die Instanz, die wahrnimmt, empfindet und spricht, auch wenn sie sich nicht mit „Ich" benennt.',
      },
      {
        id: 'd',
        text: 'Das lyrische Ich ist ein Synonym für den Erzähler in der Epik.',
        correct: false,
        explanation:
          'Das lyrische Ich und der Erzähler sind verwandte, aber verschiedene Konzepte. Der Erzähler ist eine Instanz der Epik, das lyrische Ich eine der Lyrik.',
      },
    ],
  },
  {
    question: 'Was ist der Unterschied zwischen männlicher und weiblicher Kadenz?',
    options: [
      {
        id: 'a',
        text: 'Männliche Kadenz: Vers endet auf betonter Silbe (stumpf); weibliche Kadenz: Vers endet auf unbetonter Silbe (klingend).',
        correct: true,
        explanation:
          'Richtig! Beispiel: „Ruh" (männlich/stumpf) vs. „Himmel" (weiblich/klingend). Die männliche Kadenz wirkt abgeschlossen und bestimmt, die weibliche klingend und offen.',
      },
      {
        id: 'b',
        text: 'Männliche Kadenz ist lauter, weibliche leiser.',
        correct: false,
        explanation:
          'Die Kadenz bezieht sich auf die Betonungsverhältnisse am Versende, nicht auf Lautstärke.',
      },
      {
        id: 'c',
        text: 'Männliche Kadenz kommt in Gedichten von Männern vor, weibliche in Gedichten von Frauen.',
        correct: false,
        explanation:
          'Die Begriffe haben nichts mit dem Geschlecht des Autors zu tun! Sie bezeichnen metrische Phänomene am Versende.',
      },
      {
        id: 'd',
        text: 'Es gibt keinen Unterschied — beides meint das Versende.',
        correct: false,
        explanation:
          'Es gibt einen klaren metrischen Unterschied, der auch die Wirkung des Gedichts beeinflusst.',
      },
    ],
  },
  {
    question: 'Was ist ein Sonett?',
    options: [
      {
        id: 'a',
        text: 'Eine feste Gedichtform mit 14 Versen: zwei Quartette (je 4 Verse) und zwei Terzette (je 3 Verse), meist im Jambus.',
        correct: true,
        explanation:
          'Richtig! Das Sonett stammt aus der italienischen Renaissance (Petrarca) und wurde im Barock (Opitz, Gryphius) in der deutschen Lyrik etabliert. Der Aufbau spiegelt oft eine dialektische Struktur: These (Quartette) und Antithese/Synthese (Terzette).',
      },
      {
        id: 'b',
        text: 'Ein Gedicht mit genau 10 Versen.',
        correct: false,
        explanation:
          'Das Sonett hat 14 Verse (4+4+3+3). Es gibt keine gängige feste Gedichtform mit genau 10 Versen.',
      },
      {
        id: 'c',
        text: 'Ein besonders kurzes, dreizeiliges Gedicht.',
        correct: false,
        explanation:
          'Das wäre eher ein Haiku (japanische Kurzform mit 5-7-5 Silben). Das Sonett hat 14 Verse.',
      },
      {
        id: 'd',
        text: 'Ein Gedicht, das vertont werden soll.',
        correct: false,
        explanation:
          'Der Name „Sonett" (ital. „sonetto" = kleiner Klang) verweist zwar auf Klanglichkeit, aber es ist eine feste Gedichtform, kein Lied.',
      },
    ],
  },
];

// ============================================================
// 5. TextAnnotation: Eichendorff „Mondnacht"
// ============================================================

export const mondnachtAnnotation = {
  text: 'Es war, als hätt der Himmel\nDie Erde still geküsst,\nDass sie im Blütenschimmer\nVon ihm nun träumen müsst.\n\nDie Luft ging durch die Felder,\nDie Ähren wogten sacht,\nEs rauschten leis die Wälder,\nSo sternklar war die Nacht.\n\nUnd meine Seele spannte\nWeit ihre Flügel aus,\nFlog durch die stillen Lande,\nAls flöge sie nach Haus.',
  annotations: [
    {
      id: 'personifikation1',
      start: 8,
      end: 50,
      label: 'Personifikation',
      color: '#3b82f6',
      explanation:
        'Himmel und Erde werden als Liebende dargestellt, die sich küssen. Diese Personifikation drückt die romantische Sehnsucht nach der Einheit von Himmlischem und Irdischem aus — ein Kernmotiv der Romantik.',
    },
    {
      id: 'konjunktiv1',
      start: 12,
      end: 16,
      label: 'Konjunktiv II',
      color: '#8b5cf6',
      explanation:
        '„hätt" (Konjunktiv II von „haben") markiert das Geschehen als irrealen Vergleich: Es ist nicht Wirklichkeit, sondern traumhafte Wahrnehmung. Zusammen mit „als" entsteht ein Modus des „Als-ob", der die gesamte Stimmung des Gedichts prägt.',
    },
    {
      id: 'synaesthesie',
      start: 64,
      end: 78,
      label: 'Synästhesie',
      color: '#ec4899',
      explanation:
        '„Blütenschimmer" verbindet den Tastsinn/Geruch (Blüte) mit dem Sehsinn (Schimmer). Diese Synästhesie — die Verschmelzung verschiedener Sinneseindrücke — ist ein typisches Stilmittel der Romantik und erzeugt ein traumhaft-entrücktes Bild.',
    },
    {
      id: 'konjunktiv2',
      start: 99,
      end: 104,
      label: 'Konjunktiv II',
      color: '#8b5cf6',
      explanation:
        '„müsst" (Konjunktiv II von „müssen") setzt den irrealen Modus der ersten Strophe fort: Die Erde „muss" nicht wirklich träumen, aber in der Wahrnehmung des lyrischen Ichs erscheint es so.',
    },
    {
      id: 'personifikation2',
      start: 226,
      end: 266,
      label: 'Personifikation',
      color: '#3b82f6',
      explanation:
        'Die Seele wird als geflügeltes Wesen dargestellt, das Flügel ausspannt und fliegt. Diese Personifikation verbindet sich mit dem romantischen Motiv der Entgrenzung: Die Seele löst sich vom Körper und strebt ins Unendliche.',
    },
    {
      id: 'vergleich',
      start: 298,
      end: 321,
      label: 'Vergleich',
      color: '#f59e0b',
      explanation:
        '„Als flöge sie nach Haus" — der Vergleich mit „als" (wieder Konjunktiv II: „flöge") deutet die Sehnsucht nach einer Heimat, die nicht irdisch ist. In der romantischen Tradition ist dieses „Haus" die transzendente Heimat — die Rückkehr der Seele zu Gott oder ins Absolute.',
    },
  ],
};

// ============================================================
// 6. SchrittweiseAnalyse: Gedichtanalyse „Mondnacht"
// ============================================================

export const gedichtAnalyseSchritte = [
  {
    id: 'einleitung',
    title: 'Schritt 1: Einleitungssatz formulieren',
    aufgabe:
      'Formuliere einen vollständigen Einleitungssatz für die Analyse von Eichendorffs „Mondnacht" (1837). Er sollte Autor, Titel, Erscheinungsjahr, Thema und Epoche nennen.',
    type: 'freitext' as const,
    musterloesung:
      'Das Gedicht „Mondnacht" von Joseph von Eichendorff, veröffentlicht 1837, thematisiert die romantische Sehnsucht nach der Einheit von Mensch und Natur und stellt die Entgrenzung der Seele in einer nächtlichen Naturkulisse dar. Es ist der Epoche der Romantik zuzuordnen.',
    checkliste: [
      'Autor genannt',
      'Titel und Jahr genannt',
      'Thema benannt',
      'Epoche zugeordnet',
    ],
    hint: 'Ein Einleitungssatz enthält die Basisdaten des Gedichts und eine erste thematische Einordnung.',
  },
  {
    id: 'formale-aspekte',
    title: 'Schritt 2: Formale Aspekte bestimmen',
    aufgabe:
      'Bestimme das Metrum und das Reimschema der ersten Strophe: „Es war, als hätt der Himmel / Die Erde still geküsst, / Dass sie im Blütenschimmer / Von ihm nun träumen müsst."',
    type: 'multiple-choice' as const,
    options: [
      {
        text: 'Jambus + Kreuzreim (abab)',
        correct: true,
        explanation:
          'Richtig! Das Gedicht ist im Jambus verfasst (unbetont-betont: „Es wár, als hätt der Hímmel"). Das Reimschema ist ein Kreuzreim: „Himmel" (a) – „geküsst" (b) – „Blütenschimmer" (a) – „müsst" (b). Der regelmäßige Jambus erzeugt zusammen mit dem Kreuzreim einen ruhigen, fließenden Rhythmus, der die traumhafte Stimmung des Gedichts unterstreicht.',
      },
      {
        text: 'Trochäus + Paarreim (aabb)',
        correct: false,
        explanation:
          'Der Trochäus beginnt mit einer betonten Silbe (betont-unbetont), z. B. „Ü-ber". In „Es wár, als hätt" beginnt der Vers jedoch mit einer unbetonten Silbe — das ist ein Jambus. Auch das Reimschema ist kein Paarreim: „Himmel" reimt nicht auf „geküsst", sondern auf „Blütenschimmer" (abab).',
      },
      {
        text: 'Daktylus + Umarmender Reim (abba)',
        correct: false,
        explanation:
          'Der Daktylus hat das Schema betont-unbetont-unbetont (z. B. „Wán-de-rer"), was hier nicht vorliegt. Zudem wäre beim umarmenden Reim die Reimfolge abba — also müsste sich der erste auf den vierten Vers reimen und der zweite auf den dritten. Tatsächlich reimen sich aber der erste auf den dritten und der zweite auf den vierten Vers (abab = Kreuzreim).',
      },
    ],
  },
  {
    id: 'bildsprache',
    title: 'Schritt 3: Zentrale Bildsprache analysieren',
    aufgabe:
      'Analysiere die zentrale Bildsprache der ersten Strophe. Welche Stilmittel setzt Eichendorff ein und welche Wirkung erzeugen sie? Beachte den Dreischritt: Benennen → Wirkung → Funktion im Kontext.',
    type: 'freitext' as const,
    musterloesung:
      'In der ersten Strophe setzt Eichendorff eine zentrale Personifikation ein: Der Himmel „küsst" die Erde — Himmel und Erde werden als Liebespaar dargestellt, was die romantische Sehnsucht nach der Vereinigung von Irdischem und Himmlischem ausdrückt. Der durchgängige Konjunktiv II („hätt", „müsst") versetzt das gesamte Geschehen in einen Als-ob-Modus: Die beschriebene Szene erscheint nicht als Realität, sondern als traumhafte Wahrnehmung des lyrischen Ichs. Zudem verbindet der Neologismus „Blütenschimmer" als Synästhesie den Geruchs-/Tastsinn (Blüte) mit dem Sehsinn (Schimmer) und erzeugt ein entrücktes, unwirkliches Bild. Alle drei Stilmittel zusammen etablieren die für die Romantik typische Aufhebung der Grenze zwischen Wirklichkeit und Traum.',
    checkliste: [
      'Mindestens zwei Stilmittel benannt',
      'Wirkung beschrieben (nicht nur „macht lebendig")',
      'Funktion im Kontext des Gedichts erklärt',
      'Bezug zur romantischen Motivik hergestellt',
    ],
    hint: 'Achte besonders auf die Personifikation, den Konjunktiv und die Sinneseindrücke. Vergiss nicht den Dreischritt: Benennen → Wirkung → Funktion.',
  },
  {
    id: 'gesamtdeutung',
    title: 'Schritt 4: Gesamtdeutung',
    aufgabe:
      'Deute das Gedicht als Ganzes. Berücksichtige: Wie entwickelt sich das Gedicht über die drei Strophen? Welches romantische Grundmotiv wird dargestellt? Wie verhalten sich Form und Inhalt zueinander?',
    type: 'freitext' as const,
    musterloesung:
      'Das Gedicht entfaltet sich in einer dreistufigen Bewegung: Die erste Strophe beschreibt die kosmische Vereinigung von Himmel und Erde in einer traumhaften Naturszenerie. Die zweite Strophe erweitert den Blick in die Breite der Landschaft (Felder, Wälder, Nacht) und steigert die Stimmung des Entrücktseins. In der dritten Strophe vollzieht sich der entscheidende Übergang: Vom äußeren Naturerleben zum inneren Erleben — die Seele „spannt ihre Flügel aus" und strebt „nach Haus". Dieses „Haus" ist keine irdische Heimat, sondern die transzendente Heimkehr der Seele, die romantische Sehnsucht (Fernweh/Heimweh) nach dem Unendlichen und Göttlichen. Das Grundmotiv des Gedichts ist die romantische Entgrenzung: Die Aufhebung der Grenzen zwischen Himmel und Erde, Traum und Wirklichkeit, Seele und Natur. Form und Inhalt korrespondieren: Der regelmäßige Jambus mit Kreuzreim erzeugt einen ruhigen, wiegenden Rhythmus, der das Traumhafte der Stimmung trägt. Der durchgängige Konjunktiv II spiegelt die Schwebe zwischen Wirklichkeit und Vision formal wider.',
    checkliste: [
      'Entwicklung über die Strophen beschrieben',
      'Romantisches Grundmotiv (Sehnsucht/Entgrenzung) benannt',
      'Verhältnis von Form und Inhalt analysiert',
      'Zusammenfassende Deutung formuliert',
    ],
    hint: 'Betrachte die drei Strophen als Bewegung von außen (Natur) nach innen (Seele). Was bedeutet das „nach Haus" am Ende?',
  },
];
