// Kapitel 02: Epik — Übungsdaten

// ============================================================
// 1. Multiple-Choice: Erzähltechnik
// ============================================================

export const erzaehltechnikMC = [
  {
    question:
      'Was unterscheidet den auktorialen Erzähler vom personalen Erzähler?',
    options: [
      {
        id: 'a',
        text: 'Der auktoriale Erzähler kennt die Gedanken aller Figuren und kann kommentieren; der personale Erzähler ist auf die Wahrnehmung einer Figur beschränkt.',
        correct: true,
        explanation:
          'Richtig! Der auktoriale Erzähler ist „allwissend" und kann die Handlung überblicken, während der personale Erzähler an die Perspektive einer einzelnen Figur gebunden ist (z. B. Kafka: „Die Verwandlung").',
      },
      {
        id: 'b',
        text: 'Der auktoriale Erzähler erzählt in der Ich-Form, der personale in der Er-/Sie-Form.',
        correct: false,
        explanation:
          'Das ist nicht korrekt. Beide Erzählsituationen verwenden typischerweise die Er-/Sie-Form. Die Ich-Form gehört zur Ich-Erzählsituation.',
      },
      {
        id: 'c',
        text: 'Der personale Erzähler ist objektiver als der auktoriale.',
        correct: false,
        explanation:
          'Im Gegenteil: Der personale Erzähler ist subjektiver, da er an die begrenzte Wahrnehmung einer Figur gebunden ist.',
      },
      {
        id: 'd',
        text: 'Es gibt keinen Unterschied — beide Begriffe bezeichnen dasselbe.',
        correct: false,
        explanation:
          'Die Unterscheidung ist grundlegend für die Erzähltextanalyse (vgl. Stanzel: Typische Erzählsituationen).',
      },
    ],
  },
  {
    question:
      'Was ist der Unterschied zwischen Erzählzeit und erzählter Zeit?',
    options: [
      {
        id: 'a',
        text: 'Erzählzeit ist die reale Lesedauer, erzählte Zeit die fiktive Zeitspanne der Handlung.',
        correct: true,
        explanation:
          'Richtig! Wenn ein Roman in 10 Stunden gelesen wird (Erzählzeit), aber 30 Jahre Handlung umfasst (erzählte Zeit), liegt eine starke Zeitraffung vor.',
      },
      {
        id: 'b',
        text: 'Erzählzeit ist die Zeit, in der die Geschichte spielt; erzählte Zeit ist die Lesezeit.',
        correct: false,
        explanation:
          'Das ist genau umgekehrt! Die Erzählzeit bezieht sich auf die Dauer des Erzählvorgangs, die erzählte Zeit auf die fiktive Handlungsdauer.',
      },
      {
        id: 'c',
        text: 'Beides meint dasselbe, nur aus unterschiedlichen Perspektiven.',
        correct: false,
        explanation:
          'Die Begriffe bezeichnen zwei verschiedene Zeitebenen. Ihr Verhältnis zueinander bestimmt das Erzähltempo (Raffung, Dehnung, Deckung).',
      },
      {
        id: 'd',
        text: 'Erzählzeit bezieht sich nur auf mündliches Erzählen.',
        correct: false,
        explanation:
          'Erzählzeit ist ein narratologischer Fachbegriff, der für alle Erzähltexte gilt — ob schriftlich oder mündlich.',
      },
    ],
  },
  {
    question:
      'Wie unterscheidet sich der innere Monolog von der erlebten Rede?',
    options: [
      {
        id: 'a',
        text: 'Innerer Monolog: Ich-Form und Präsens; erlebte Rede: 3. Person und Präteritum mit Figurenduktus.',
        correct: true,
        explanation:
          'Richtig! Der innere Monolog gibt Gedanken direkt in der Ich-Form wieder („Ich muss hier raus!"), während die erlebte Rede den Figurenduktus in die Erzählersprache einbettet („Er musste hier raus! Wie sollte er das nur schaffen?").',
      },
      {
        id: 'b',
        text: 'Innerer Monolog wird laut ausgesprochen, erlebte Rede nicht.',
        correct: false,
        explanation:
          'Beide Formen geben Gedanken wieder, die nicht laut ausgesprochen werden. „Laut ausgesprochen" wäre direkte Rede.',
      },
      {
        id: 'c',
        text: 'Es gibt keinen Unterschied — beides sind Gedankenberichte.',
        correct: false,
        explanation:
          'Es gibt klare grammatische und erzähltechnische Unterschiede: Person, Tempus und das Verhältnis von Erzähler- und Figurenstimme.',
      },
      {
        id: 'd',
        text: 'Erlebte Rede steht immer in Anführungszeichen.',
        correct: false,
        explanation:
          'Erlebte Rede steht nie in Anführungszeichen — das ist gerade ihr Kennzeichen: Sie ist formal nicht von Erzählertext zu unterscheiden.',
      },
    ],
  },
  {
    question:
      'Welche drei „typischen Erzählsituationen" unterscheidet Franz K. Stanzel?',
    options: [
      {
        id: 'a',
        text: 'Auktoriale, personale und Ich-Erzählsituation.',
        correct: true,
        explanation:
          'Richtig! Stanzel unterscheidet diese drei Grundtypen anhand der Kriterien Modus (Erzähler vs. Reflektor), Person (Ich vs. Er/Sie) und Perspektive (Innensicht vs. Außensicht).',
      },
      {
        id: 'b',
        text: 'Interne, externe und neutrale Fokalisierung.',
        correct: false,
        explanation:
          'Das ist Genettes Fokalisierungsmodell, nicht Stanzels Erzählsituationen. Genette unterscheidet Nullfokalisierung, interne und externe Fokalisierung.',
      },
      {
        id: 'c',
        text: 'Episch, lyrisch und dramatisch.',
        correct: false,
        explanation:
          'Das sind die drei literarischen Gattungen, keine Erzählsituationen.',
      },
      {
        id: 'd',
        text: 'Homodiegetisch, heterodiegetisch und extradiegetisch.',
        correct: false,
        explanation:
          'Das sind Begriffe aus Genettes Erzähltheorie zur Beschreibung der Erzählebenen, nicht Stanzels Modell.',
      },
    ],
  },
];

// ============================================================
// 2. TextAnnotation: Kafka „Die Verwandlung"
// ============================================================

export const kafkaVerwandlungAnnotation = {
  text: 'Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt.',
  annotations: [
    {
      id: 'perspektive',
      start: 0,
      end: 61,
      label: 'Personale Erzählsituation',
      color: '#3b82f6',
      explanation:
        'Der erste Satz etabliert sofort die personale Erzählsituation: Das Geschehen wird aus Gregors Wahrnehmung heraus geschildert. Der Erzähler tritt nicht kommentierend in Erscheinung.',
    },
    {
      id: 'sachlich',
      start: 63,
      end: 132,
      label: 'Sachlicher Ton',
      color: '#10b981',
      explanation:
        'Die fantastische Verwandlung wird mit nüchterner Sachlichkeit berichtet — kein Erschrecken, keine Erklärung. Diese lakonische Erzählhaltung ist typisch für Kafka und erzeugt das Unheimliche gerade durch das Fehlen jeder Überraschung.',
    },
    {
      id: 'kontrast1',
      start: 35,
      end: 52,
      label: 'Kontrastierung',
      color: '#f59e0b',
      explanation:
        '„Unruhige Träume" stehen in scharfem Kontrast zum „ungeheuren Ungeziefer": Das Bedrohliche der Träume wird von der Realität der Verwandlung noch übertroffen. Die Alliteration „unruhigen"/„ungeheuren"/„Ungeziefer" verbindet beide Bereiche klanglich.',
    },
    {
      id: 'kontrast2',
      start: 100,
      end: 121,
      label: 'Kontrastierung',
      color: '#f59e0b',
      explanation:
        '„Ungeheures Ungeziefer" — das Adjektiv „ungeheuer" betont die Monstrosität, während „Ungeziefer" (nicht „Käfer"!) bewusst vage bleibt. Kafka vermeidet eine genaue Beschreibung und lässt das Bild in der Vorstellung des Lesers entstehen.',
    },
  ],
};

// ============================================================
// 3. SchrittweiseAnalyse: Fontane „Effi Briest"
// ============================================================

export const effiAnalyseSchritte = [
  {
    id: 'schritt1',
    title: 'Schritt 1: Erzählperspektive bestimmen',
    aufgabe:
      'Lies den Romananfang und bestimme die Erzählperspektive:\n\n„In Front des schon seit Kurfürst Georg Wilhelm von der Familie von Briest bewohnten Herrenhauses zu Hohen-Cremmen fiel heller Sonnenschein auf die mittagsstille Dorfstraße, während nach der Park- und Gartenseite hin ein rechtwinklig angebauter Seitenflügel einen breiten Schatten erst auf einen weiß und grün quadrierten Fliesengang und dann über diesen hinaus auf ein großes, in seiner Mitte mit einer Sonnenuhr und an seinem Rande mit Canna indica und Rhabarberstauden besetztes Rondell warf."\n\nWelche Erzählperspektive liegt vor?',
    type: 'multiple-choice' as const,
    options: [
      {
        text: 'Auktorialer Erzähler — der Erzähler überblickt die Szenerie wie von oben und gibt historische Informationen.',
        correct: true,
        explanation:
          'Richtig! Der Erzähler weiß mehr als jede Figur: Er kennt die Geschichte des Hauses (seit Kurfürst Georg Wilhelm), überblickt die gesamte Szenerie räumlich und ordnet Details souverän an.',
      },
      {
        text: 'Personaler Erzähler — wir sehen durch die Augen einer Figur.',
        correct: false,
        explanation:
          'Keine Figur ist anwesend oder nimmt wahr. Der Erzähler beschreibt den Schauplatz, bevor eine Figur eingeführt wird — das spricht für einen auktorialen Erzähler.',
      },
      {
        text: 'Ich-Erzähler — der Erzähler spricht in der ersten Person.',
        correct: false,
        explanation:
          'Es gibt kein „Ich" im Text. Der Erzähler spricht in der dritten Person und bleibt als Person im Hintergrund.',
      },
    ],
    hint: 'Achte darauf, wer den Raum beschreibt und welches Wissen dabei vorausgesetzt wird.',
  },
  {
    id: 'schritt2',
    title: 'Schritt 2: Raumgestaltung analysieren',
    aufgabe:
      'Der Romananfang beschreibt einen Raum sehr detailliert. Beschreibe, wie der Raum gestaltet ist und welche Funktion die Raumbeschreibung für den Romananfang hat.\n\nBeachte dabei:\n- Welche Elemente werden genannt?\n- Wie ist der Blick des Erzählers gelenkt (Bewegung im Raum)?\n- Welche Atmosphäre entsteht?\n- Was verrät der Raum über die Bewohner?',
    type: 'freitext' as const,
    musterloesung:
      'Der Erzähler beschreibt das Herrenhaus und seinen Garten in einer räumlichen Bewegung: von der Straßenfront über den Seitenflügel zum Fliesengang und schließlich zum Rondell. Die Beschreibung bewegt sich vom Öffentlichen (Dorfstraße) ins Private (Garten). Die detaillierte Aufzählung von Sonnenuhr, Canna indica und Rhabarberstauden vermittelt bürgerliche Behaglichkeit und einen gepflegten, aber nicht übertrieben repräsentativen Lebensstil. Der Kontrast von „hellem Sonnenschein" und „breitem Schatten" deutet symbolisch auf die Doppelbödigkeit der bürgerlichen Idylle voraus.',
    checkliste: [
      'Räumliche Bewegung des Erzählerblicks beschrieben',
      'Atmosphäre (Sonnenschein, Mittagsstille) analysiert',
      'Symbolische Bedeutung (Licht/Schatten) erkannt',
      'Bezug zu gesellschaftlichem Milieu hergestellt',
    ],
  },
  {
    id: 'schritt3',
    title: 'Schritt 3: Erzähltempo bestimmen',
    aufgabe:
      'Im ersten Satz des Romans wird ein einziger Moment beschrieben — die Mittagszeit mit Sonnenschein und Schatten. Wie würdest du das Erzähltempo dieses Anfangs charakterisieren?',
    type: 'multiple-choice' as const,
    options: [
      {
        text: 'Zeitdehnung — ein kurzer Moment wird ausführlich beschrieben.',
        correct: true,
        explanation:
          'Richtig! Ein einziger Augenblick (Mittagssonne fällt auf das Haus) wird in einem langen, detailreichen Satz entfaltet. Die erzählte Zeit ist minimal, die Erzählzeit lang — das ist Zeitdehnung. Fontane nutzt dies, um den Schauplatz atmosphärisch zu etablieren.',
      },
      {
        text: 'Zeitraffung — eine lange Zeitspanne wird kurz zusammengefasst.',
        correct: false,
        explanation:
          'Im Gegenteil: Der Satz beschreibt einen einzigen Moment sehr ausführlich. Die historische Angabe „seit Kurfürst Georg Wilhelm" ist keine Zeitraffung, sondern ein Einschub des auktorialen Erzählers.',
      },
      {
        text: 'Zeitdeckung — Erzählzeit und erzählte Zeit sind gleich.',
        correct: false,
        explanation:
          'Zeitdeckung liegt bei Dialogen oder inneren Monologen vor. Hier beschreibt der Erzähler ein statisches Bild, keine Echtzeit-Handlung.',
      },
    ],
    hint: 'Überlege: Wie viel Zeit vergeht in der Handlung? Wie viel Raum nimmt die Beschreibung ein?',
  },
  {
    id: 'schritt4',
    title: 'Schritt 4: Funktion des Anfangs deuten',
    aufgabe:
      'Fontane beginnt seinen Roman nicht mit einer Figur, sondern mit einer ausführlichen Raumbeschreibung. Interpretiere: Warum wählt Fontane diesen Einstieg? Was signalisiert er dem Leser über den Roman?\n\nBerücksichtige dabei:\n- Die Gattung (Gesellschaftsroman)\n- Die Epoche (Poetischer Realismus)\n- Das Verhältnis von Individuum und Umwelt',
    type: 'freitext' as const,
    musterloesung:
      'Fontane stellt den Schauplatz vor die Figuren — das signalisiert, dass in diesem Roman das gesellschaftliche Milieu die Figuren prägt und bestimmt. Das Herrenhaus mit seiner Geschichte (seit Kurfürst Georg Wilhelm) steht für die Tradition und die gesellschaftlichen Konventionen, in die Effi hineingeboren wird. Die „mittagsstille Dorfstraße" und der „breite Schatten" erzeugen eine Atmosphäre der Ruhe, die zugleich Enge und Stillstand andeutet. Im Sinne des Poetischen Realismus verklärt Fontane die Wirklichkeit nicht, sondern macht gesellschaftliche Strukturen in der Raumbeschreibung sichtbar — die Idylle hat Schatten.',
    checkliste: [
      'Bedeutung der Reihenfolge (Raum vor Figur) reflektiert',
      'Bezug zur Gattung Gesellschaftsroman hergestellt',
      'Symbolik von Licht und Schatten gedeutet',
      'Bezug zur Epoche (Poetischer Realismus) hergestellt',
    ],
  },
];

// ============================================================
// 4. TextVergleich: Kafka vs. Fontane
// ============================================================

export const kafkaFontaneVergleich = {
  textA: {
    titel: 'Die Verwandlung',
    autor: 'Franz Kafka',
    text: 'Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt.',
    quelle: 'Franz Kafka: Die Verwandlung (1915)',
  },
  textB: {
    titel: 'Effi Briest',
    autor: 'Theodor Fontane',
    text: 'In Front des schon seit Kurfürst Georg Wilhelm von der Familie von Briest bewohnten Herrenhauses zu Hohen-Cremmen fiel heller Sonnenschein auf die mittagsstille Dorfstraße, während nach der Park- und Gartenseite hin ein rechtwinklig angebauter Seitenflügel einen breiten Schatten erst auf einen weiß und grün quadrierten Fliesengang und dann über diesen hinaus auf ein großes, in seiner Mitte mit einer Sonnenuhr und an seinem Rande mit Canna indica und Rhabarberstauden besetztes Rondell warf.',
    quelle: 'Theodor Fontane: Effi Briest (1895)',
  },
  vergleichsaspekte: [
    'Erzählperspektive',
    'Erzähltempo',
    'Raumgestaltung',
    'Figureneinführung',
    'Sprachstil',
  ],
};

// ============================================================
// 5. FigurenZuordnung: Kabale und Liebe
// ============================================================

export const kabaleUndLiebeFiguren = {
  figuren: [
    {
      id: 'ferdinand',
      name: 'Ferdinand von Walter',
      beschreibung:
        'Sohn des Präsidenten, adelig, leidenschaftlich verliebt in Luise',
    },
    {
      id: 'luise',
      name: 'Luise Miller',
      beschreibung:
        'Tochter des Stadtmusikanten, bürgerlich, liebt Ferdinand',
    },
    {
      id: 'praesident',
      name: 'Präsident von Walter',
      beschreibung:
        'Ferdinands Vater, machtbewusster Politiker, intrigant',
    },
    {
      id: 'wurm',
      name: 'Sekretär Wurm',
      beschreibung:
        'Sekretär des Präsidenten, hinterlistig, will Luise heiraten',
    },
  ],
  items: [
    {
      id: 'item1',
      text: 'Idealismus und bedingungslose Liebe über Standesgrenzen hinweg',
      type: 'eigenschaft' as const,
      correctFigurId: 'ferdinand',
      explanation:
        'Ferdinand verkörpert den Sturm-und-Drang-Idealismus: Er will die Standesgrenzen sprengen und nur seiner Liebe folgen.',
    },
    {
      id: 'item2',
      text: '„Mein Vaterland ist, wo mich Luise liebt."',
      type: 'zitat' as const,
      correctFigurId: 'ferdinand',
      explanation:
        'Dieses Zitat zeigt Ferdinands radikalen Bruch mit der ständischen Ordnung — er definiert Heimat über die Liebe, nicht über Stand oder Nation.',
    },
    {
      id: 'item3',
      text: 'Zerrissen zwischen Liebe zu Ferdinand und Pflichtgefühl gegenüber dem Vater',
      type: 'eigenschaft' as const,
      correctFigurId: 'luise',
      explanation:
        'Luise ist die tragische Figur des Dramas: Ihre Liebe zu Ferdinand kollidiert mit ihrer Loyalität gegenüber dem Vater und ihrem religiösen Pflichtbewusstsein.',
    },
    {
      id: 'item4',
      text: 'Schmiedet die Intrige mit dem gefälschten Liebesbrief',
      type: 'handlung' as const,
      correctFigurId: 'wurm',
      explanation:
        'Wurm entwirft den Plan mit dem gefälschten Brief, der Luises Treue in Frage stellen und Ferdinand zur Eifersucht treiben soll — die „Kabale" des Titels.',
    },
    {
      id: 'item5',
      text: 'Setzt Macht und Einfluss ein, um die Verbindung seines Sohnes mit einer Bürgerlichen zu verhindern',
      type: 'handlung' as const,
      correctFigurId: 'praesident',
      explanation:
        'Der Präsident handelt aus machtpolitischem Kalkül: Eine Verbindung Ferdinands mit Luise würde seine Heiratspolitik (Lady Milford) durchkreuzen.',
    },
    {
      id: 'item6',
      text: '„Ich entsage ihm für dieses Leben. Aber die Toten, Vater — die Toten sehen auf uns herab."',
      type: 'zitat' as const,
      correctFigurId: 'luise',
      explanation:
        'Luise fügt sich der väterlichen Autorität und entsagt Ferdinand — aber ihr Verweis auf die Toten zeigt, dass sie an eine höhere, jenseitige Gerechtigkeit glaubt.',
    },
  ],
};
