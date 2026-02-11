// Kapitel 5: Literaturepochen — Übungsdaten

// === Epochen-Zuordnung ===

export interface TextItem {
  id: string;
  text: string;
  quelle?: string;
  correctEpocheId: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface EpocheOption {
  id: string;
  name: string;
  zeitraum: string;
  color: string;
}

export const epochenZuordnungTexte: {
  texte: TextItem[];
  epochen: EpocheOption[];
} = {
  texte: [
    {
      id: 'text-lessing',
      text: '„Der mitleidigste Mensch ist der beste Mensch, zu allen gesellschaftlichen Tugenden, zu allen Arten der Großmuth der aufgelegteste."',
      quelle: 'Gotthold Ephraim Lessing: Briefwechsel über das Trauerspiel (1756)',
      correctEpocheId: 'aufklaerung',
      feedbackCorrect:
        'Richtig! Lessing betont die Vernunft und die moralische Erziehung des Menschen durch Mitleid — ein Kerngedanke der Aufklärung. Das Theater soll den Zuschauer durch Empathie zu einem besseren Menschen machen.',
      feedbackIncorrect:
        'Nicht ganz. Achte auf die Schlüsselbegriffe: „mitleidigster Mensch", „gesellschaftliche Tugenden", „Großmuth" — hier geht es um die moralische Verbesserung des Menschen durch Vernunft und Empathie. Das ist ein zentrales Anliegen der Aufklärung.',
    },
    {
      id: 'text-goethe-sud',
      text: '„Mir ward es so wohl, so frei in der Seele, so warm, so leicht! Ich sah die Natur rings um mich her, wie ein großes ewiges Fest, und fühlte mich selbst darin wie ein Gott."',
      quelle: 'Im Stil von Goethes „Die Leiden des jungen Werthers" (1774)',
      correctEpocheId: 'sturm-und-drang',
      feedbackCorrect:
        'Richtig! Die ekstatische Naturerfahrung, das Gefühl göttlicher Erhabenheit und die emotionale Überschwänglichkeit sind typisch für den Sturm und Drang. Das Genie erlebt sich als eins mit der Natur.',
      feedbackIncorrect:
        'Nicht ganz. Beachte die Schlüsselwörter: „so wohl, so frei in der Seele", „wie ein Gott" — hier spricht ein überschwängliches Ich, das sich in der Natur als Genie erlebt. Diese Emphase und das Naturgefühl sind typisch für den Sturm und Drang.',
    },
    {
      id: 'text-eichendorff',
      text: '„Es war, als hätt\' der Himmel / Die Erde still geküsst, / Dass sie im Blütenschimmer / Von ihm nun träumen müsst\'."',
      quelle: 'Joseph von Eichendorff: Mondnacht (1837)',
      correctEpocheId: 'romantik',
      feedbackCorrect:
        'Richtig! Die Verschmelzung von Himmel und Erde, das Traumhafte, die Natursehnsucht und die volksliedhafte Sprache sind Kennzeichen der Romantik. Eichendorff ist einer der wichtigsten Vertreter der Spätromantik.',
      feedbackIncorrect:
        'Nicht ganz. Achte auf die romantischen Motive: Himmel und Erde „küssen" sich (Sehnsucht nach Einheit), „Blütenschimmer" und „träumen" (Nacht, Traum, Natur). Die volksliedhafte Form und die Naturmystik weisen klar auf die Romantik.',
    },
    {
      id: 'text-fontane',
      text: '„Effi, du bist so sonderbar, so ganz anders als sonst. Du bist doch nicht krank? Oder hast du Ärger gehabt? Mit Innstetten? Er hat auch so seine Eigenheiten, und als junge Frau..."',
      quelle: 'Theodor Fontane: Effi Briest (1895), Kap. 24 (leicht gekürzt)',
      correctEpocheId: 'realismus',
      feedbackCorrect:
        'Richtig! Die psychologisch differenzierte Alltagssprache, die subtile Andeutung gesellschaftlicher Zwänge und die indirekte Charakterisierung durch Dialog sind typisch für den Poetischen Realismus Fontanes.',
      feedbackIncorrect:
        'Nicht ganz. Beachte den Gesprächston: Alltagssprache, psychologische Beobachtung, dezente Andeutung von Eheproblemen — kein Pathos, keine Überschwänglichkeit. Diese subtile, realistische Darstellung gesellschaftlicher Verhältnisse ist kennzeichnend für den Poetischen Realismus.',
    },
    {
      id: 'text-trakl',
      text: '„Am Abend, wenn die Glocken Frieden läuten, / Folg ich der Vögel wundervollen Flügen, / Die lang geschart, gleich frommen Pilgerzügen, / Entschwinden in den herbstlich klaren Weiten."',
      quelle: 'Georg Trakl: Verfall (1913)',
      correctEpocheId: 'expressionismus',
      feedbackCorrect:
        'Richtig! Obwohl die Sprache zunächst harmonisch wirkt, verrät der Titel „Verfall" das expressionistische Grundthema: Vergänglichkeit, Zerfall, Todesahnung. Die Bilder (Abend, Herbst, Entschwinden) erzeugen eine melancholische Endzeitstimmung, die typisch für Trakls Expressionismus ist.',
      feedbackIncorrect:
        'Nicht ganz. Dieser Text stammt von Georg Trakl (1913) und gehört zum Expressionismus. Achte auf die Motive: „Abend", „Verfall", „Entschwinden" — hinter der scheinbar harmonischen Oberfläche verbirgt sich eine Endzeitstimmung. Trakl verbindet traditionelle Formen mit expressionistischen Themen wie Vergänglichkeit und Todesahnung.',
    },
  ],
  epochen: [
    {
      id: 'aufklaerung',
      name: 'Aufklärung',
      zeitraum: 'ca. 1720–1785',
      color: '#6366f1',
    },
    {
      id: 'sturm-und-drang',
      name: 'Sturm und Drang',
      zeitraum: 'ca. 1765–1785',
      color: '#f97316',
    },
    {
      id: 'romantik',
      name: 'Romantik',
      zeitraum: 'ca. 1795–1848',
      color: '#8b5cf6',
    },
    {
      id: 'realismus',
      name: 'Poetischer Realismus',
      zeitraum: 'ca. 1848–1890',
      color: '#14b8a6',
    },
    {
      id: 'expressionismus',
      name: 'Expressionismus',
      zeitraum: 'ca. 1910–1925',
      color: '#ef4444',
    },
  ],
};

// === Epochen-Schnelltrainer (Timed Challenge) ===

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const epochenSchnelltrainer: Question[] = [
  {
    id: 'schnell-01',
    question: 'Welcher Epoche wird Goethes „Die Leiden des jungen Werthers" zugeordnet?',
    options: ['Aufklärung', 'Sturm und Drang', 'Weimarer Klassik', 'Romantik'],
    correctIndex: 1,
    explanation:
      '„Die Leiden des jungen Werthers" (1774) ist ein Schlüsselwerk des Sturm und Drang: Gefühlsüberschwang, Genie-Kult, Rebellion gegen gesellschaftliche Konventionen.',
  },
  {
    id: 'schnell-02',
    question: 'Was ist das zentrale Symbol der Romantik?',
    options: ['Die Sonne', 'Die blaue Blume', 'Das Kreuz', 'Die rote Fahne'],
    correctIndex: 1,
    explanation:
      'Die blaue Blume (aus Novalis\' „Heinrich von Ofterdingen") ist das zentrale Symbol der Romantik und steht für Sehnsucht nach dem Unendlichen, Unerreichbaren.',
  },
  {
    id: 'schnell-03',
    question: 'Welcher Autor gehört zum Expressionismus?',
    options: ['Theodor Fontane', 'Georg Trakl', 'Joseph von Eichendorff', 'Gotthold Ephraim Lessing'],
    correctIndex: 1,
    explanation:
      'Georg Trakl (1887–1914) ist einer der bedeutendsten Lyriker des Expressionismus. Seine Gedichte sind geprägt von Verfallsbildern, Farbenmetaphorik und einer düsteren Endzeitstimmung.',
  },
  {
    id: 'schnell-04',
    question: 'Welches Merkmal ist typisch für den Naturalismus?',
    options: [
      'Verklärende Darstellung der Wirklichkeit',
      'Sekundenstil und exakte Milieu-Darstellung',
      'Volksliedhafte Sprache und Naturmystik',
      'Blankvers und antike Formideale',
    ],
    correctIndex: 1,
    explanation:
      'Der Naturalismus strebt nach wissenschaftlich exakter Wirklichkeitsabbildung. Der Sekundenstil (minutiöse Zeitdeckung) und die detaillierte Milieu-Darstellung mit Dialekt und Soziolekt sind seine Kennzeichen.',
  },
  {
    id: 'schnell-05',
    question: '„Kabale und Liebe" von Schiller ist ein Beispiel für...',
    options: [
      'ein episches Theater',
      'ein bürgerliches Trauerspiel',
      'ein absurdes Drama',
      'eine Komödie',
    ],
    correctIndex: 1,
    explanation:
      '„Kabale und Liebe" (1784) ist ein bürgerliches Trauerspiel: Eine bürgerliche Heldin (Luise) scheitert am Standeskonflikt mit dem Adel. Die Form steht am Übergang von Sturm und Drang zur Klassik.',
  },
  {
    id: 'schnell-06',
    question: 'Welche literarische Strömung fordert „Sapere aude!" (Habe Mut, dich deines eigenen Verstandes zu bedienen)?',
    options: ['Sturm und Drang', 'Romantik', 'Aufklärung', 'Expressionismus'],
    correctIndex: 2,
    explanation:
      '„Sapere aude!" ist der Wahlspruch der Aufklärung, formuliert von Immanuel Kant in seiner Schrift „Was ist Aufklärung?" (1784). Die Vernunft ist das höchste Prinzip dieser Epoche.',
  },
  {
    id: 'schnell-07',
    question: 'Franz Kafkas „Die Verwandlung" wird häufig welcher Epoche zugeordnet?',
    options: ['Poetischer Realismus', 'Naturalismus', 'Expressionismus', 'Neue Sachlichkeit'],
    correctIndex: 2,
    explanation:
      'Kafka wird dem Expressionismus bzw. der literarischen Moderne zugeordnet. Typische Merkmale in „Die Verwandlung": Ich-Zerfall, Entfremdung, absurde Bildlichkeit, existenzielle Angst.',
  },
  {
    id: 'schnell-08',
    question: 'Wer prägte den Begriff „Poetischer Realismus"?',
    options: ['Theodor Fontane', 'Otto Ludwig', 'Gerhart Hauptmann', 'Thomas Mann'],
    correctIndex: 1,
    explanation:
      'Otto Ludwig prägte den Begriff „Poetischer Realismus". Gemeint ist eine Darstellung der Wirklichkeit, die nicht roh-naturalistisch ist, sondern poetisch verklärt — die Wirklichkeit wird künstlerisch verdichtet und ästhetisch geformt.',
  },
];

// === Multiple-Choice: Klassik & Romantik ===

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

export const klassikRomantikMC: MCQuestion[] = [
  {
    question:
      'Was unterscheidet die Weimarer Klassik grundlegend vom Sturm und Drang?',
    options: [
      {
        id: 'a',
        text: 'Die Klassik lehnt Gefühle vollständig ab und setzt nur auf Verstand.',
        correct: false,
        explanation:
          'Das stimmt nicht. Die Klassik lehnt Gefühle nicht ab — sie strebt nach einer Synthese von Gefühl und Vernunft. Nicht das Gefühl wird verworfen, sondern seine ungebändigte Überschwänglichkeit.',
      },
      {
        id: 'b',
        text: 'Die Klassik strebt nach einer Synthese von Gefühl und Vernunft, nach Maß, Form und Humanität — statt der ungezügelten Emotionalität des Sturm und Drang.',
        correct: true,
        explanation:
          'Richtig! Goethe und Schiller vollziehen nach ihrer Sturm-und-Drang-Phase eine Entwicklung hin zu Maß, Harmonie und dem Humanitätsideal. Das Vorbild ist die griechische Antike mit ihrem Streben nach dem Schönen, Wahren und Guten.',
      },
      {
        id: 'c',
        text: 'Die Klassik verwendet ausschließlich antike Stoffe und Formen.',
        correct: false,
        explanation:
          'Die Klassik orientiert sich zwar an antiken Idealen (Harmonie, Formstrenge, Blankvers), behandelt aber auch moderne Stoffe — etwa in Schillers „Kabale und Liebe" oder Goethes „Faust".',
      },
      {
        id: 'd',
        text: 'Der Sturm und Drang ist eine Vorstufe der Romantik, nicht der Klassik.',
        correct: false,
        explanation:
          'Historisch geht der Sturm und Drang der Klassik voraus. Goethe und Schiller durchliefen beide eine Sturm-und-Drang-Phase, bevor sie sich der Klassik zuwandten. Die Romantik entsteht parallel zur Klassik und grenzt sich bewusst von ihr ab.',
      },
    ],
  },
  {
    question:
      'Welches Konzept der Romantik steht für die Aufhebung der Grenze zwischen Kunst und Leben, Traum und Wirklichkeit?',
    options: [
      {
        id: 'a',
        text: 'Die progressive Universalpoesie',
        correct: true,
        explanation:
          'Richtig! Friedrich Schlegel fordert in seinem Athenäums-Fragment 116 eine „progressive Universalpoesie", die alle Gattungen und Lebensbereiche vereint. Sie soll Poesie und Prosa, Philosophie und Rhetorik verschmelzen — die Grenzen zwischen Kunst und Wirklichkeit werden aufgehoben.',
      },
      {
        id: 'b',
        text: 'Der Blankvers',
        correct: false,
        explanation:
          'Der Blankvers (fünfhebiger Jambus ohne Reim) ist das bevorzugte Versmaß der Weimarer Klassik, nicht der Romantik. Er wird z.\u00A0B. in Schillers Dramen und Goethes „Iphigenie" verwendet.',
      },
      {
        id: 'c',
        text: 'Die Milieutheorie',
        correct: false,
        explanation:
          'Die Milieutheorie (der Mensch ist Produkt seiner Umgebung) gehört zum Naturalismus, nicht zur Romantik.',
      },
      {
        id: 'd',
        text: 'Das Drei-Einheiten-Prinzip',
        correct: false,
        explanation:
          'Das Drei-Einheiten-Prinzip (Einheit von Ort, Zeit und Handlung) stammt aus der aristotelischen Dramentheorie und wurde besonders in der Aufklärung und Klassik beachtet.',
      },
    ],
  },
  {
    question:
      'Was versteht man unter „romantischer Ironie"?',
    options: [
      {
        id: 'a',
        text: 'Dass romantische Texte immer humorvoll geschrieben sind.',
        correct: false,
        explanation:
          'Romantische Ironie meint nicht Humor im Allgemeinen. Es ist ein spezifisches poetisches Verfahren, bei dem der Autor die Illusion seines eigenen Textes bewusst durchbricht.',
      },
      {
        id: 'b',
        text: 'Dass Heine die Romantik durch Ironie kritisiert hat.',
        correct: false,
        explanation:
          'Heine parodiert zwar die Romantik mit ironischen Brechungen (z.\u00A0B. in „Das Fräulein stand am Meere"), aber das ist Ironie über die Romantik, nicht „romantische Ironie" im engeren Sinne.',
      },
      {
        id: 'c',
        text: 'Der Autor durchbricht bewusst die Illusion seines eigenen Werks und reflektiert den Schaffensprozess — der Erzähler kommentiert, dass er gerade eine Geschichte erzählt.',
        correct: true,
        explanation:
          'Richtig! Romantische Ironie (Begriff von Friedrich Schlegel) bedeutet, dass der Autor die Fiktion bewusst aufhebt, um die Gemachtheit des Kunstwerks zu zeigen. Beispiele finden sich in E.T.A. Hoffmanns Erzählungen, wo der Erzähler den Leser direkt anspricht und die Konstruiertheit der Geschichte offenlegt.',
      },
      {
        id: 'd',
        text: 'Eine ironische Stilfigur, die nur in Gedichten der Romantik vorkommt.',
        correct: false,
        explanation:
          'Romantische Ironie ist keine einzelne Stilfigur, sondern ein erzählerisches Verfahren (Reflexion der Fiktion im Text selbst). Sie kommt in Prosa und Drama vor, nicht nur in Gedichten.',
      },
    ],
  },
];

// === Multiple-Choice: Realismus & Naturalismus ===

export const realismusNaturalismusMC: MCQuestion[] = [
  {
    question:
      'Was unterscheidet den Poetischen Realismus vom Naturalismus?',
    options: [
      {
        id: 'a',
        text: 'Der Poetische Realismus stellt die Wirklichkeit verklärend dar und vermeidet das Hässliche; der Naturalismus bildet die Realität schonungslos ab, einschließlich Armut, Krankheit und Dialekt.',
        correct: true,
        explanation:
          'Richtig! Der Poetische Realismus (Fontane, Storm, Keller) verklärt die Wirklichkeit ästhetisch — er zeigt das Typische, nicht das Extreme. Der Naturalismus (Hauptmann, Holz/Schlaf) dagegen strebt nach fotographisch exakter Abbildung aller Lebensbereiche, auch der hässlichen und sozialen Missstände.',
      },
      {
        id: 'b',
        text: 'Der Realismus ist objektiv, der Naturalismus subjektiv.',
        correct: false,
        explanation:
          'Eher umgekehrt: Der Poetische Realismus ist durch die Verklärung durchaus subjektiv geprägt, während der Naturalismus gerade eine wissenschaftlich-objektive Wirklichkeitsdarstellung anstrebt.',
      },
      {
        id: 'c',
        text: 'Der Naturalismus verwendet nur Prosa, der Realismus auch Lyrik.',
        correct: false,
        explanation:
          'Beide Epochen kennen verschiedene Gattungen. Der Naturalismus ist besonders für sein Drama bekannt (Hauptmanns „Die Weber"), der Realismus für den Roman (Fontane) und die Novelle (Storm).',
      },
      {
        id: 'd',
        text: 'Der Realismus spielt in der Stadt, der Naturalismus auf dem Land.',
        correct: false,
        explanation:
          'Der Schauplatz ist kein Unterscheidungsmerkmal. Fontanes Romane spielen oft in Berlin (Stadt), Hauptmanns „Die Weber" im schlesischen Gebirge (Land). Der Unterschied liegt in der Darstellungsweise, nicht im Schauplatz.',
      },
    ],
  },
  {
    question:
      'Was versteht man unter dem „Sekundenstil" im Naturalismus?',
    options: [
      {
        id: 'a',
        text: 'Dass naturalistische Texte besonders kurz sind — sie dauern nur Sekunden zu lesen.',
        correct: false,
        explanation:
          'Der Name „Sekundenstil" bezieht sich nicht auf die Lesezeit, sondern auf das Verhältnis von Erzählzeit und erzählter Zeit.',
      },
      {
        id: 'b',
        text: 'Eine Erzähltechnik, bei der die Erzählzeit der erzählten Zeit exakt entspricht — jede Sekunde wird minutiös wiedergegeben, inklusive Pausen, Stottern und Nebengeräusche.',
        correct: true,
        explanation:
          'Richtig! Im Sekundenstil (geprägt von Arno Holz und Johannes Schlaf, z.\u00A0B. in „Papa Hamlet") deckt sich die Erzählzeit mit der erzählten Zeit. Alles wird protokollartig festgehalten: Sprechpausen, Atmen, Umgebungsgeräusche. Es entsteht eine quasi-filmische Darstellung.',
      },
      {
        id: 'c',
        text: 'Ein Versmaß, das besonders schnelle Rhythmen erzeugt.',
        correct: false,
        explanation:
          'Der Sekundenstil ist kein Versmaß, sondern eine Erzähltechnik der Prosa und des Dramas.',
      },
      {
        id: 'd',
        text: 'Eine Methode, bei der Texte in genau 60 Sekunden vorgetragen werden müssen.',
        correct: false,
        explanation:
          'Der Sekundenstil hat nichts mit einer Vortragsdauer zu tun. Er beschreibt die exakte zeitliche Deckung von Erzählung und Geschehen.',
      },
    ],
  },
];

// === Multiple-Choice: Nachkriegsliteratur & Gegenwart ===

export const nachkriegGegenwartMC: MCQuestion[] = [
  {
    question:
      'Was versteht man unter „Kahlschlagliteratur" nach 1945?',
    options: [
      {
        id: 'a',
        text: 'Literatur, die die Zerstörung der Wälder durch Bombenangriffe beschreibt.',
        correct: false,
        explanation:
          '„Kahlschlag" ist hier eine Metapher und bezieht sich nicht wörtlich auf die Natur, sondern auf einen literarischen Neuanfang.',
      },
      {
        id: 'b',
        text: 'Ein radikaler sprachlicher Neuanfang — die pathetische, ideologisch verbrauchte Sprache des NS wird verworfen zugunsten einer kargen, nüchternen Sprache.',
        correct: true,
        explanation:
          'Richtig! Wolfgang Weyrauch prägte den Begriff „Kahlschlag" (1949). Die Nachkriegsautoren (z.\u00A0B. Borchert, Böll, Eich) misstrauen der durch den Nationalsozialismus missbrauchten Sprache und beginnen sprachlich „bei null" — kurze Sätze, Alltagssprache, Verzicht auf Pathos.',
      },
      {
        id: 'c',
        text: 'Literatur, die ausschließlich von Soldaten im Krieg geschrieben wurde.',
        correct: false,
        explanation:
          'Kahlschlagliteratur wurde nach dem Krieg geschrieben (ab 1945) und stammt nicht zwangsläufig von Soldaten, sondern von Autoren, die einen sprachlichen und moralischen Neuanfang suchten.',
      },
      {
        id: 'd',
        text: 'Ein anderes Wort für „Exilliteratur" — die Werke der emigrierten Autoren.',
        correct: false,
        explanation:
          'Exilliteratur (z.\u00A0B. Thomas Mann, Bertolt Brecht) entstand während der NS-Zeit im Ausland. Die Kahlschlagliteratur entstand nach 1945 in Deutschland als Reaktion auf die Erfahrung von Krieg und Diktatur.',
      },
    ],
  },
  {
    question:
      'Welches Werk Wolfgang Borcherts gilt als Schlüsseltext der Nachkriegsliteratur?',
    options: [
      {
        id: 'a',
        text: '„Draußen vor der Tür" (1947)',
        correct: true,
        explanation:
          'Richtig! „Draußen vor der Tür" ist das bekannteste Drama der Trümmerliteratur. Der Kriegsheimkehrer Beckmann findet keinen Platz mehr in der Gesellschaft. Das Stück zeigt exemplarisch die Orientierungslosigkeit und Verzweiflung der Nachkriegsgeneration.',
      },
      {
        id: 'b',
        text: '„Die Blechtrommel" (1959)',
        correct: false,
        explanation:
          '„Die Blechtrommel" ist Günter Grass\' bekanntestes Werk und gehört zur Nachkriegsliteratur im weiteren Sinne. Es erschien aber erst 1959 und wird der Gruppe 47 bzw. dem magischen Realismus zugeordnet — nicht der unmittelbaren Trümmerliteratur.',
      },
      {
        id: 'c',
        text: '„Der Tod in Venedig" (1912)',
        correct: false,
        explanation:
          '„Der Tod in Venedig" von Thomas Mann erschien 1912 und gehört zur literarischen Moderne, nicht zur Nachkriegsliteratur.',
      },
      {
        id: 'd',
        text: '„Die Verwandlung" (1915)',
        correct: false,
        explanation:
          '„Die Verwandlung" von Franz Kafka erschien 1915 und wird dem Expressionismus bzw. der literarischen Moderne zugeordnet.',
      },
    ],
  },
  {
    question:
      'Welches Merkmal ist typisch für die deutschsprachige Gegenwartsliteratur (ab ca. 1990)?',
    options: [
      {
        id: 'a',
        text: 'Einheitliche Stilrichtung und feste Gattungsregeln.',
        correct: false,
        explanation:
          'Das Gegenteil ist der Fall: Die Gegenwartsliteratur zeichnet sich gerade durch Vielfalt und das Aufbrechen von Gattungsgrenzen aus.',
      },
      {
        id: 'b',
        text: 'Stilistische und thematische Vielfalt — autofiktionales Erzählen, Globalisierung, Identitätsfragen, Genre-Mischungen.',
        correct: true,
        explanation:
          'Richtig! Die Gegenwartsliteratur ist von Pluralismus geprägt: Autofiktionen (z.\u00A0B. Karl Ove Knausgård), interkulturelle Perspektiven, Reflexion von Globalisierung und Digitalisierung. Es gibt keine dominante Strömung, sondern eine Vielzahl paralleler Tendenzen.',
      },
      {
        id: 'c',
        text: 'Ausschließliche Verwendung von Dialekt und Umgangssprache.',
        correct: false,
        explanation:
          'Dialekt und Umgangssprache kommen vor, aber die Gegenwartsliteratur ist stilistisch vielfältig — von experimentell bis traditionell erzählt.',
      },
      {
        id: 'd',
        text: 'Rückkehr zu den Formidealen der Weimarer Klassik.',
        correct: false,
        explanation:
          'Eine solche Rückkehr findet nicht statt. Die Gegenwartsliteratur bricht eher Formen auf, als dass sie klassische Ideale wiederbelebt.',
      },
    ],
  },
];

// === Lückentext: Nachkriegsliteratur ===

export interface LueckentextData {
  textParts: string[];
  luecken: {
    id: string;
    correctAnswers: string[];
    hint?: string;
  }[];
}

export const nachkriegLueckentext: LueckentextData = {
  textParts: [
    'Nach dem Ende des Zweiten Weltkriegs 1945 stand die deutsche Literatur vor einem grundlegenden Problem: Die Sprache war durch die ',
    ' ideologisch kontaminiert. Autoren wie Wolfgang Borchert und Heinrich Böll suchten einen ',
    ' — man spricht von „',
    '". Der wichtigste literarische Zusammenschluss der Nachkriegszeit war die „',
    '", gegründet von Hans Werner Richter. Zu ihren Mitgliedern zählten u.\u00A0a. Günter Grass, Heinrich Böll und ',
    '. Die Nachkriegsliteratur thematisiert vor allem die Erfahrung von Krieg und ',
    ', die Schwierigkeit der Heimkehr und die Frage nach individueller und kollektiver ',
    '.',
  ],
  luecken: [
    {
      id: 'l1',
      correctAnswers: ['NS-Propaganda', 'nationalsozialistische Propaganda', 'NS-Diktatur', 'Nazi-Propaganda'],
      hint: 'Welches Regime hat die deutsche Sprache missbraucht?',
    },
    {
      id: 'l2',
      correctAnswers: ['sprachlichen Neuanfang', 'Neuanfang', 'Neubeginn', 'sprachlichen Neubeginn'],
      hint: 'Was suchten die Autoren nach 1945?',
    },
    {
      id: 'l3',
      correctAnswers: ['Kahlschlagliteratur', 'Kahlschlag', 'Trümmerliteratur'],
      hint: 'Wie nennt man diese radikale literarische Erneuerung? (K...)',
    },
    {
      id: 'l4',
      correctAnswers: ['Gruppe 47', 'Gruppe siebenundvierzig'],
      hint: 'Wie hieß der berühmte literarische Zusammenschluss? (Gruppe ...)',
    },
    {
      id: 'l5',
      correctAnswers: ['Ingeborg Bachmann', 'Ilse Aichinger', 'Paul Celan', 'Martin Walser'],
      hint: 'Nenne ein weiteres Mitglied der Gruppe 47.',
    },
    {
      id: 'l6',
      correctAnswers: ['Zerstörung', 'Vernichtung', 'Gewalt', 'Verlust'],
      hint: 'Welche zentrale Erfahrung thematisiert die Nachkriegsliteratur neben dem Krieg?',
    },
    {
      id: 'l7',
      correctAnswers: ['Schuld', 'Verantwortung'],
      hint: 'Welche moralische Frage steht im Zentrum? (Sch...)',
    },
  ],
};

// === TextVergleich-Daten: Realismus vs. Naturalismus ===

export const textVergleichRealismusNaturalismus = {
  textA: {
    titel: 'Effi Briest (Auszug)',
    autor: 'Theodor Fontane',
    text: '„Effi, du bist so sonderbar, so ganz anders als sonst. Du bist doch nicht krank? Oder hast du Ärger gehabt? Mit Innstetten? Er hat auch so seine Eigenheiten, und als junge Frau... aber nein, das kann es auch nicht sein, dazu ist er dir zu lieb, und Effi, du hast es ja auch so gewollt. Es war ja deine Wahl, dein Entschluss, und nun ist es an dir, das Beste daraus zu machen."',
    quelle: 'Theodor Fontane: Effi Briest (1895), Kap. 24 (leicht gekürzt). Projekt Gutenberg.',
  },
  textB: {
    titel: 'Die Weber (Auszug)',
    autor: 'Gerhart Hauptmann',
    text: `„FRAU HEINRICH kommt herein, ein vier- bis fünfjähriges Mädel an der Hand, das in der andern Hand ein paar Stückchen Brot hält. Den Umstehenden steht der Hunger im Gesicht. Abgehärmte Weiber, manche schwanger. Hungerleidende Kinder. — M'r han nischt zu beißen und nischt zu brechen! M'r hun's am Leibe nich und am Futter nich. Wer hilft uns armen Hungerleiders? Wer? De Fabrikanten? Die pressen uns aus wie 'ne Zitrone!"`,
    quelle: 'Gerhart Hauptmann: Die Weber (1892), 1. Akt (vereinfacht). Projekt Gutenberg.',
  },
  vergleichsaspekte: [
    'Sprachstil: gehobene Alltagssprache vs. Dialekt',
    'Darstellung sozialer Probleme: Andeutung vs. direkte Anklage',
    'Figurenzeichnung: psychologisch differenziert vs. sozialtypisch',
    'Erzählhaltung: distanziert-ironisch vs. mitfühlend-dokumentarisch',
  ],
};
