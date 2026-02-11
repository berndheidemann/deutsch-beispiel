import type { Stilmittel } from '../types';

export const stilmittel: Stilmittel[] = [
  // === WORTFIGUREN ===
  {
    id: 'anapher',
    name: 'Anapher',
    definition: 'Wiederholung eines Wortes oder einer Wortgruppe am Anfang aufeinanderfolgender Sätze, Verse oder Satzteile.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Wer nie sein Brot mit Tränen aß, / Wer nie die kummervollen Nächte…" (Goethe)',
      '„Das Wasser rauscht, das Wasser schwoll" (Goethe, Der Fischer)',
    ],
    wirkung: 'Erzeugt Eindringlichkeit und Nachdruck, rhythmisiert den Text und betont die wiederholte Aussage.',
    etymologie: 'gr. anaphorá = das Hinauftragen, Wiederholung',
  },
  {
    id: 'epipher',
    name: 'Epipher',
    definition: 'Wiederholung eines Wortes oder einer Wortgruppe am Ende aufeinanderfolgender Sätze oder Verse.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Doch alle Lust will Ewigkeit, / will tiefe, tiefe Ewigkeit." (Nietzsche)',
    ],
    wirkung: 'Verstärkt die Aussage am Satzende, erzeugt einen nachklingenden, eindringlichen Effekt.',
    etymologie: 'gr. epiphorá = das Hinzutragen',
  },
  {
    id: 'alliteration',
    name: 'Alliteration',
    definition: 'Gleicher Anlaut bei aufeinanderfolgenden Wörtern (Stabreim).',
    kategorie: 'wortfigur',
    beispiele: [
      '„Milch macht müde Männer munter."',
      '„Wind und Wetter" (Volksmund)',
    ],
    wirkung: 'Erzeugt Klangharmonie, verbindet Wörter akustisch und macht die Formulierung einprägsam.',
    etymologie: 'lat. ad = zu, littera = Buchstabe',
  },
  {
    id: 'parallelismus',
    name: 'Parallelismus',
    definition: 'Wiederholung der gleichen syntaktischen Struktur in aufeinanderfolgenden Sätzen oder Satzteilen.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Heiß ist die Liebe, kalt ist der Schnee."',
      '„Ich kam, ich sah, ich siegte."',
    ],
    wirkung: 'Rhythmisiert den Text, erzeugt Ordnung und Nachdruck, ermöglicht Vergleiche und Kontraste.',
    etymologie: 'gr. parállelos = nebeneinanderliegend',
  },
  {
    id: 'chiasmus',
    name: 'Chiasmus',
    definition: 'Überkreuzstellung von syntaktisch oder semantisch einander entsprechenden Satzgliedern (syntaktische Spiegelung).',
    kategorie: 'wortfigur',
    beispiele: [
      '„Die Kunst ist lang, und kurz ist unser Leben." (Goethe, Faust)',
      '„Ich schlafe am Tag, in der Nacht wache ich."',
    ],
    wirkung: 'Betont den Gegensatz oder die Zusammengehörigkeit der gekreuzten Elemente, erzeugt Symmetrie und Spannung.',
    etymologie: 'gr. chiasmos = Kreuzstellung (nach dem Buchstaben Chi = X)',
  },
  {
    id: 'ellipse',
    name: 'Ellipse',
    definition: 'Auslassung eines Satzteils, der aus dem Kontext ergänzt werden kann.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Je früher der Abschied, desto [= umso] kürzer die Qual."',
      '„Ende gut, [ist] alles gut."',
    ],
    wirkung: 'Erzeugt Verdichtung und Dynamik, kann Umgangssprache oder Emotionalität signalisieren.',
    etymologie: 'gr. élleipsis = Auslassung',
  },
  {
    id: 'klimax',
    name: 'Klimax',
    definition: 'Dreigliedrige (oder mehrgliedrige) Steigerung vom Schwächeren zum Stärkeren.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Veni, vidi, vici." (Caesar)',
      '„Er weinte, er schrie, er tobte."',
    ],
    wirkung: 'Erzeugt Spannung und Dramatik durch die schrittweise Intensivierung.',
    etymologie: 'gr. klímax = Leiter, Treppe',
  },
  {
    id: 'antithese',
    name: 'Antithese',
    definition: 'Gegenüberstellung gegensätzlicher Begriffe oder Gedanken.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Der Wahn ist kurz, die Reu\' ist lang." (Schiller)',
      '„Krieg und Frieden" (Tolstoi)',
    ],
    wirkung: 'Verdeutlicht Kontraste, schärft den Blick für Gegensätze, erzeugt Spannung.',
    etymologie: 'gr. antíthesis = Gegensatz',
  },
  {
    id: 'oxymoron',
    name: 'Oxymoron',
    definition: 'Verbindung zweier sich widersprechender Begriffe in einer Wortgruppe.',
    kategorie: 'wortfigur',
    beispiele: [
      '„bittersüß"',
      '„alter Knabe"',
      '„beredtes Schweigen"',
    ],
    wirkung: 'Erzeugt Irritation und regt zum Nachdenken an, verdichtet scheinbar Unvereinbares.',
    etymologie: 'gr. oxýs = scharf, morós = dumm, stumpf',
  },
  {
    id: 'paradoxon',
    name: 'Paradoxon',
    definition: 'Scheinbar widersprüchliche Aussage, die bei genauerem Hinsehen einen tieferen Sinn enthält.',
    kategorie: 'wortfigur',
    beispiele: [
      '„Ich weiß, dass ich nichts weiß." (Sokrates)',
      '„Weniger ist mehr."',
    ],
    wirkung: 'Provoziert Nachdenken, deckt verborgene Wahrheiten auf, durchbricht erwartete Denkmuster.',
    etymologie: 'gr. parádoxon = wider die Erwartung',
  },
  // === BILDLICHE MITTEL (TROPEN) ===
  {
    id: 'metapher',
    name: 'Metapher',
    definition: 'Bedeutungsübertragung: Ein Ausdruck wird aus seinem ursprünglichen Bedeutungsbereich in einen anderen übertragen — ohne Vergleichswort „wie" oder „als".',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„Das Feuer der Leidenschaft"',
      '„Wüstenschiff" (für Kamel)',
      '„meine Seele spannte / Weit ihre Flügel aus" (Eichendorff, Mondnacht)',
    ],
    wirkung: 'Veranschaulicht abstrakte Sachverhalte, verdichtet Bedeutung, erzeugt Bildkraft und emotionale Aufladung.',
    etymologie: 'gr. metaphorá = Übertragung',
  },
  {
    id: 'vergleich',
    name: 'Vergleich',
    definition: 'Verknüpfung zweier Bedeutungsbereiche mit einem Vergleichswort (meist „wie" oder „als").',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„Er kämpfte wie ein Löwe."',
      '„Sein Blick war hart wie Stahl."',
    ],
    wirkung: 'Veranschaulicht durch den expliziten Vergleich, macht Eigenschaften greifbar und nachvollziehbar.',
    etymologie: 'Kein Fremdwort — althochdeutsch „gilîh" = gleichartig',
  },
  {
    id: 'personifikation',
    name: 'Personifikation',
    definition: 'Vermenschlichung: Etwas Unbelebtes, Abstraktes oder ein Tier erhält menschliche Eigenschaften oder Handlungen.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„Die Sonne lacht."',
      '„Der Abend wiegte schon die Erde" (Goethe, Willkommen und Abschied)',
      '„an den Bergen hing die Nacht" (Goethe, Willkommen und Abschied)',
    ],
    wirkung: 'Verlebendigt Abstraktes, schafft Nähe und Anschaulichkeit, macht Unbelebtes emotional erfahrbar.',
    etymologie: 'lat. persona = Maske, facere = machen',
  },
  {
    id: 'allegorie',
    name: 'Allegorie',
    definition: 'Fortgeführte Metapher: Ein abstrakter Begriff oder Sachverhalt wird systematisch in ein konkretes Bild übersetzt.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      'Justitia mit Waage (Abwägen), Schwert (Durchsetzung) und Augenbinde (Unparteilichkeit) = Gerechtigkeit',
      'Gevatter Tod als Skelett mit Sense',
    ],
    wirkung: 'Macht abstrakte Konzepte greifbar und anschaulich, ermöglicht vielschichtige Bedeutungsebenen.',
    etymologie: 'gr. allegoría = das Anderssagen',
  },
  {
    id: 'symbol',
    name: 'Symbol',
    definition: 'Konventionelles Sinnbild, das über seine wörtliche Bedeutung hinausweist und kulturell festgelegt ist.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      'Taube = Frieden',
      'Ring = Treue, Ewigkeit',
      'Wasser = Leben, Reinigung, Vergänglichkeit',
    ],
    wirkung: 'Verdichtet Bedeutung, spricht kulturelles Wissen an, erzeugt Tiefendimension.',
    etymologie: 'gr. sýmbolon = Erkennungszeichen',
  },
  {
    id: 'hyperbel',
    name: 'Hyperbel',
    definition: 'Starke, bewusste Übertreibung, die nicht wörtlich gemeint ist.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„todmüde"',
      '„ein Meer von Tränen"',
      '„Ich habe dir das schon tausendmal gesagt."',
    ],
    wirkung: 'Betont und dramatisiert, erzeugt Aufmerksamkeit und emotionale Wirkung.',
    etymologie: 'gr. hyperbolé = Übertreibung',
  },
  {
    id: 'litotes',
    name: 'Litotes',
    definition: 'Untertreibung oder doppelte Verneinung, die das Gegenteil betont.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„nicht schlecht" (= gut)',
      '„nicht unerheblich" (= sehr erheblich)',
    ],
    wirkung: 'Erzeugt Understatement, wirkt zurückhaltend-ironisch oder diplomatisch.',
    etymologie: 'gr. litótes = Schlichtheit, Einfachheit',
  },
  {
    id: 'ironie',
    name: 'Ironie',
    definition: 'Das Gegenteil des Gemeinten wird gesagt; die wahre Bedeutung ergibt sich aus dem Kontext.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„Das hast du ja toll hinbekommen." (bei einem Misserfolg)',
      '„Eine brillante Idee!" (bei einer offensichtlich schlechten Idee)',
    ],
    wirkung: 'Erzeugt Distanz, Komik oder Kritik, signalisiert intellektuelle Überlegenheit oder Spott.',
    etymologie: 'gr. eironéia = Verstellung',
  },
  {
    id: 'euphemismus',
    name: 'Euphemismus',
    definition: 'Beschönigende, mildernde Umschreibung für etwas Unangenehmes oder Tabuisiertes.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„entschlafen" statt „sterben"',
      '„freigesetzt werden" statt „entlassen werden"',
    ],
    wirkung: 'Mildert die Wirkung, kann auch verschleiern oder manipulieren.',
    etymologie: 'gr. euphemismós = Worte guter Vorbedeutung',
  },
  {
    id: 'synaesthesie',
    name: 'Synästhesie',
    definition: 'Vermischung verschiedener Sinneswahrnehmungen in einem Ausdruck.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„schreiendes Rot"',
      '„süße Stimme"',
      '„warme Farben"',
    ],
    wirkung: 'Erzeugt intensives, ganzheitliches Erleben, macht Wahrnehmungen mehrdimensional.',
    etymologie: 'gr. syn = zusammen, aísthesis = Wahrnehmung',
  },
  {
    id: 'metonymie',
    name: 'Metonymie',
    definition: 'Ersetzung eines Begriffs durch einen anderen, der in sachlicher Beziehung zu ihm steht.',
    kategorie: 'bildliches_mittel',
    beispiele: [
      '„Das Weiße Haus erklärte…" (= US-Regierung)',
      '„Die Krone verlangt Gehorsam." (= der König)',
      '„Er liest Goethe." (= ein Werk von Goethe)',
    ],
    wirkung: 'Verdichtet die Sprache, setzt Konnotationen frei, erzeugt Nähe oder Distanz.',
    etymologie: 'gr. metonymía = Namensvertauschung',
  },
  // === KLANGFIGUREN ===
  {
    id: 'onomatopoesie',
    name: 'Onomatopoesie',
    definition: 'Lautmalerei: Wörter, die den Klang dessen nachahmen, was sie bezeichnen.',
    kategorie: 'klangfigur',
    beispiele: [
      '„Es knistert, kracht und prasselt."',
      '„Das Bächlein plätschert."',
      '„summen", „zischen", „klirren"',
    ],
    wirkung: 'Erzeugt Unmittelbarkeit und Sinnlichkeit, macht das Beschriebene hörbar.',
    etymologie: 'gr. ónoma = Name, poieín = machen',
  },
  {
    id: 'assonanz',
    name: 'Assonanz',
    definition: 'Gleichklang der Vokale in benachbarten Wörtern (ohne gleiche Konsonanten).',
    kategorie: 'klangfigur',
    beispiele: [
      '„Hut und Mut"',
      '„Ottos Mops kotzt" (Ernst Jandl)',
    ],
    wirkung: 'Erzeugt klangliche Verbindung und Harmonie, rhythmisiert den Text.',
    etymologie: 'lat. assonare = anklingen',
  },
  {
    id: 'enjambement',
    name: 'Enjambement',
    definition: 'Zeilensprung: Ein Satz oder Satzteil geht über das Versende hinaus in den nächsten Vers weiter.',
    kategorie: 'klangfigur',
    beispiele: [
      '„Der Mond ist aufgegangen, / die goldnen Sternlein prangen" (Claudius)',
      '„Über allen Gipfeln / Ist Ruh" (Goethe, Wandrers Nachtlied)',
    ],
    wirkung: 'Erzeugt Fließbewegung, kann Spannung aufbauen oder Überraschung schaffen, durchbricht den Versrhythmus.',
    etymologie: 'frz. enjamber = überschreiten',
  },
];

export const stilmittelByKategorie = {
  wortfigur: stilmittel.filter(s => s.kategorie === 'wortfigur'),
  bildliches_mittel: stilmittel.filter(s => s.kategorie === 'bildliches_mittel'),
  klangfigur: stilmittel.filter(s => s.kategorie === 'klangfigur'),
};

export const stilmittelById = Object.fromEntries(
  stilmittel.map(s => [s.id, s])
) as Record<string, Stilmittel>;
