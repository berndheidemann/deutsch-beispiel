// Kapitel 4: Dramatik — Übungsdaten

// === Spannungskurve: Kabale und Liebe ===

export interface Phase {
  id: string;
  name: string;
  beschreibung: string;
  szenen?: string;
}

export const kabaleSpannungskurve: Phase[] = [
  {
    id: 'exposition',
    name: 'Exposition',
    beschreibung:
      'Einführung der Figuren und des Grundkonflikts: Der Musiker Miller und seine Frau sorgen sich um die Liebesbeziehung ihrer Tochter Luise mit dem adligen Ferdinand von Walter. Der Standesunterschied zwischen Bürgertum und Adel wird als zentrales Konfliktpotenzial etabliert.',
    szenen: 'I. Akt, 1.–7. Szene',
  },
  {
    id: 'steigende-handlung',
    name: 'Steigende Handlung',
    beschreibung:
      'Präsident von Walter und sein Sekretär Wurm schmieden eine Intrige, um die Verbindung zwischen Ferdinand und Luise zu zerstören. Ferdinand soll Lady Milford heiraten. Der Konflikt zwischen Vater und Sohn verschärft sich, als Ferdinand sich offen gegen die arrangierte Ehe stellt.',
    szenen: 'II. Akt, 1.–7. Szene',
  },
  {
    id: 'klimax',
    name: 'Klimax / Peripetie',
    beschreibung:
      'Der Wendepunkt: Wurm zwingt Luise unter Drohungen gegen ihren Vater, einen gefälschten Liebesbrief an den Hofmarschall von Kalb zu schreiben. Diese Brief-Intrige wird zum Instrument, das die Katastrophe unausweichlich macht. Luise opfert ihre Ehre, um ihren Vater zu retten.',
    szenen: 'III. Akt, 1.–6. Szene',
  },
  {
    id: 'fallende-handlung',
    name: 'Fallende Handlung',
    beschreibung:
      'Ferdinand findet den gefälschten Brief und verfällt rasender Eifersucht. Statt Luise zu vertrauen, glaubt er an ihren Verrat. Luise ist durch ihren Eid an Wurm gebunden und kann die Wahrheit nicht aufdecken. Das retardierende Moment — Luises stummes Leiden — verzögert die Katastrophe, ohne sie abwenden zu können.',
    szenen: 'IV. Akt, 1.–9. Szene',
  },
  {
    id: 'katastrophe',
    name: 'Katastrophe',
    beschreibung:
      'Ferdinand vergiftet Luises Limonade und trinkt selbst davon. Im Angesicht des Todes bricht Luise ihren Eid und offenbart die Intrige. Ferdinand erkennt zu spät die Wahrheit und verzeiht Luise. Beide sterben. Der Präsident wird von seinem sterbenden Sohn angeklagt; Wurm wird verhaftet.',
    szenen: 'V. Akt, 1.–8. Szene (Schlussszene)',
  },
];

// === Figurenkonstellation: Kabale und Liebe ===

export interface Figur {
  id: string;
  name: string;
  beschreibung: string;
  x: number;
  y: number;
  color: string;
}

export interface Beziehung {
  von: string;
  zu: string;
  typ: 'liebe' | 'konflikt' | 'familie' | 'intrige' | 'abhaengigkeit';
  label: string;
}

export const kabaleUndLiebeFigurenkonstellation: {
  figuren: Figur[];
  beziehungen: Beziehung[];
} = {
  figuren: [
    {
      id: 'ferdinand',
      name: 'Ferdinand von Walter',
      beschreibung:
        'Sohn des Präsidenten, Major. Leidenschaftlich, idealistisch, liebt Luise über alle Standesgrenzen hinweg. Sein blindes Vertrauen in seine Gefühle wird ihm zum Verhängnis.',
      x: 300,
      y: 80,
      color: '#3b82f6',
    },
    {
      id: 'luise',
      name: 'Luise Miller',
      beschreibung:
        'Tochter des Stadtmusikanten Miller. Aufrichtig, pflichtbewusst, zerrissen zwischen Liebe zu Ferdinand und Gehorsam gegenüber dem Vater. Wird zum Opfer der Intrige.',
      x: 300,
      y: 320,
      color: '#ec4899',
    },
    {
      id: 'praesident',
      name: 'Präsident von Walter',
      beschreibung:
        'Ferdinands Vater, machtbewusster Politiker. Skrupellos in der Durchsetzung seiner Interessen. Will Ferdinands Heirat mit Lady Milford erzwingen, um seinen politischen Einfluss zu sichern.',
      x: 100,
      y: 80,
      color: '#ef4444',
    },
    {
      id: 'wurm',
      name: 'Sekretär Wurm',
      beschreibung:
        'Sekretär des Präsidenten, Strippenzieher der Intrige. Selbst in Luise verliebt, aber verschlagen und berechnend. Ersinnt den Plan mit dem gefälschten Brief.',
      x: 500,
      y: 80,
      color: '#f59e0b',
    },
    {
      id: 'miller',
      name: 'Musikus Miller',
      beschreibung:
        'Luises Vater, ehrlicher Stadtmusikant. Stolz, aufrichtig, standesbewusst. Sorgt sich um die Ehre seiner Tochter und warnt vor der Verbindung mit dem Adel.',
      x: 100,
      y: 320,
      color: '#22c55e',
    },
  ],
  beziehungen: [
    {
      von: 'ferdinand',
      zu: 'luise',
      typ: 'liebe',
      label: 'Standesübergreifende Liebe',
    },
    {
      von: 'ferdinand',
      zu: 'praesident',
      typ: 'konflikt',
      label: 'Vater-Sohn-Konflikt (Gehorsam vs. Liebe)',
    },
    {
      von: 'praesident',
      zu: 'ferdinand',
      typ: 'familie',
      label: 'Vater — will Sohn kontrollieren',
    },
    {
      von: 'praesident',
      zu: 'wurm',
      typ: 'intrige',
      label: 'Auftraggeber der Intrige',
    },
    {
      von: 'wurm',
      zu: 'luise',
      typ: 'intrige',
      label: 'Erzwingt gefälschten Liebesbrief',
    },
    {
      von: 'miller',
      zu: 'luise',
      typ: 'familie',
      label: 'Fürsorglicher Vater',
    },
  ],
};

// === Dialog-Analyse: Vier-Ohren-Modell ===

export interface VierSeitenExample {
  nachricht: string;
  sachinhalt: string;
  selbstoffenbarung: string;
  beziehung: string;
  appell: string;
}

export const dialogAnalyseKabale: VierSeitenExample = {
  nachricht:
    'Ferdinand zum Präsidenten: „Mein Entschluss ist gefasst, Vater. Ich heirate Luise Millerin."',
  sachinhalt: 'Ferdinand teilt mit, dass er Luise Miller heiraten will.',
  selbstoffenbarung:
    'Ferdinand offenbart seine tiefe, kompromisslose Liebe zu Luise und seine Entschlossenheit, sich über Standesgrenzen hinwegzusetzen.',
  beziehung:
    'Ferdinand markiert Distanz und Trotz gegenüber der väterlichen Autorität. Er spricht seinen Vater zwar mit „Vater" an, aber der bestimmte Ton zeigt: Er sieht sich nicht als gehorsamer Sohn, sondern als eigenständiger Mann.',
  appell:
    'Akzeptiere meine Entscheidung! Versuche nicht, mich umzustimmen oder die Verbindung zu verhindern.',
};

// === Multiple-Choice: Dramentheorie ===

export interface MCOption {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
}

export interface MCQuestion {
  question: string;
  options: MCOption[];
}

export const dramentheorieMC: MCQuestion[] = [
  {
    question:
      'Welches Merkmal gehört NICHT zur geschlossenen Dramenform nach Freytag?',
    options: [
      {
        id: 'a',
        text: 'Fünf-Akt-Struktur mit klarem Spannungsbogen',
        correct: false,
        explanation:
          'Die Fünf-Akt-Struktur ist das Kernmerkmal der geschlossenen Dramenform (Freytags Pyramide).',
      },
      {
        id: 'b',
        text: 'Einheit von Ort, Zeit und Handlung',
        correct: false,
        explanation:
          'Die drei Einheiten (aristotelische Regel) sind ein klassisches Merkmal des geschlossenen Dramas.',
      },
      {
        id: 'c',
        text: 'Episodische Szenenfolge ohne übergreifenden Handlungsbogen',
        correct: true,
        explanation:
          'Richtig! Eine episodische, fragmentarische Szenenfolge ist ein Merkmal der OFFENEN Dramenform (z.B. Büchners „Woyzeck"). Das geschlossene Drama hat dagegen einen einheitlichen, kausal verknüpften Handlungsverlauf.',
      },
      {
        id: 'd',
        text: 'Katharsis als Wirkungsziel',
        correct: false,
        explanation:
          'Die Katharsis (Reinigung durch Mitleid und Furcht) ist das Wirkungsziel der klassischen Tragödie und damit des geschlossenen Dramas.',
      },
    ],
  },
  {
    question:
      'Was versteht Aristoteles unter „Katharsis"?',
    options: [
      {
        id: 'a',
        text: 'Die Verfremdung des Zuschauers, um kritisches Denken zu fördern',
        correct: false,
        explanation:
          'Das ist Brechts Verfremdungseffekt (V-Effekt) aus dem epischen Theater — das Gegenteil der Katharsis.',
      },
      {
        id: 'b',
        text: 'Die Reinigung des Zuschauers durch das Erleben von Mitleid (eleos) und Furcht (phobos)',
        correct: true,
        explanation:
          'Richtig! Aristoteles beschreibt in seiner „Poetik" die Katharsis als emotionale Reinigung: Der Zuschauer erlebt durch die Tragödie stellvertretend Mitleid und Furcht und wird dadurch innerlich geläutert.',
      },
      {
        id: 'c',
        text: 'Die moralische Belehrung des Publikums durch ein positives Vorbild',
        correct: false,
        explanation:
          'Moralische Belehrung durch Vorbilder ist ein Ziel der Aufklärungsliteratur (z.B. Lessings „Nathan der Weise"), nicht der aristotelischen Katharsis.',
      },
      {
        id: 'd',
        text: 'Den Wendepunkt (Peripetie) in der Handlung eines Dramas',
        correct: false,
        explanation:
          'Die Peripetie ist der Umschwung vom Glück ins Unglück (oder umgekehrt). Sie kann Katharsis auslösen, ist aber nicht dasselbe.',
      },
    ],
  },
  {
    question:
      'Welches Konzept ist zentral für Bertolt Brechts episches Theater?',
    options: [
      {
        id: 'a',
        text: 'Einfühlung: Der Zuschauer soll sich vollständig mit den Figuren identifizieren',
        correct: false,
        explanation:
          'Das Gegenteil ist der Fall: Brecht wollte die Einfühlung bewusst verhindern, um kritisches Denken zu ermöglichen.',
      },
      {
        id: 'b',
        text: 'Die drei Einheiten: Ort, Zeit und Handlung müssen gewahrt bleiben',
        correct: false,
        explanation:
          'Die drei Einheiten gehören zum aristotelischen, geschlossenen Drama — Brechts episches Theater bricht bewusst damit.',
      },
      {
        id: 'c',
        text: 'Verfremdungseffekt (V-Effekt): Das Vertraute fremd machen, um kritisches Nachdenken auszulösen',
        correct: true,
        explanation:
          'Richtig! Der Verfremdungseffekt ist Brechts zentrales Mittel: Durch Songs, Kommentare, Spruchbänder und Brüche der Illusion soll der Zuschauer zum Nachdenken und nicht zum bloßen Mitfühlen angeregt werden.',
      },
      {
        id: 'd',
        text: 'Katharsis: Reinigung durch Mitleid und Furcht',
        correct: false,
        explanation:
          'Die Katharsis ist das Ziel des aristotelischen Theaters. Brecht lehnt sie bewusst ab und setzt stattdessen auf den Verfremdungseffekt.',
      },
    ],
  },
];
