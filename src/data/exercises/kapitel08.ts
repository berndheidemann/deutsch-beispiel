// Kapitel 8: Werkvergleich & Motivanalyse — Übungsdaten

// === TextVergleich: Kafka vs. Hoffmann — Identitätsverlust ===

export interface TextVergleichData {
  textA: {
    titel: string;
    autor: string;
    text: string;
    quelle: string;
  };
  textB: {
    titel: string;
    autor: string;
    text: string;
    quelle: string;
  };
  vergleichsaspekte: string[];
}

export const kafkaHoffmannVergleich: TextVergleichData = {
  textA: {
    titel: 'Die Verwandlung',
    autor: 'Franz Kafka',
    text: 'Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf seinem panzerartig harten Rücken und sah, wenn er den Kopf ein wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnen Beine flimmerten ihm hilflos vor den Augen.',
    quelle: 'Franz Kafka: Die Verwandlung (1915), Incipit',
  },
  textB: {
    titel: 'Der Sandmann',
    autor: 'E.T.A. Hoffmann',
    text: '„Ha — ha — ha! — Feuerkrais — Feuerkrais! — Dreht euch, Feuerkrais — lustig — lustig! — Holzpüppchen, hui schön Holzpüppchen dreht euch —" Mit diesen Worten sank Nathanael zu Boden. [...] Nathanael stand mit starren Augen auf dem Turme, und gewahrte — Coppola. Er schrie: „Ha! Sköne Oke — Sköne Oke!" und sprang über das Geländer.',
    quelle: 'E.T.A. Hoffmann: Der Sandmann (1816), Schlussszene (gekürzt)',
  },
  vergleichsaspekte: [
    'Identitätsverlust',
    'Entfremdung vom eigenen Körper',
    'Erzählperspektive',
    'Umgang mit dem Fantastischen',
    'Gesellschaftliche Isolation',
  ],
};

// === Multiple-Choice: Motivanalyse & Werkvergleich ===

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

export const motivanalyseMC: MCQuestion[] = [
  {
    question:
      'Was versteht man unter einem literarischen „Motiv" im Unterschied zum „Thema" eines Werkes?',
    options: [
      {
        id: 'a',
        text: 'Ein Motiv ist dasselbe wie ein Thema — beide Begriffe sind Synonyme.',
        correct: false,
        explanation:
          'Motiv und Thema sind verwandte, aber unterschiedliche Begriffe. Das Thema ist die übergeordnete Fragestellung oder Problematik eines Werkes; das Motiv ist ein konkretes, wiederkehrendes inhaltliches Element.',
      },
      {
        id: 'b',
        text: 'Ein Motiv ist ein konkretes, wiederkehrendes inhaltliches Element (z.\u00A0B. „der Doppelgänger", „die verbotene Liebe"), das in verschiedenen Werken und Epochen auftritt. Das Thema ist die übergeordnete Fragestellung.',
        correct: true,
        explanation:
          'Richtig! Ein Motiv ist ein konkreter, typischer Handlungsbaustein oder ein wiederkehrendes Bild (z.\u00A0B. das Doppelgänger-Motiv, das Motiv der unerfüllten Liebe). Das Thema eines Werkes (z.\u00A0B. „Identität und Entfremdung") ist abstrakter und umfassender.',
      },
      {
        id: 'c',
        text: 'Ein Motiv bezieht sich nur auf die Handlung, ein Thema nur auf die Form.',
        correct: false,
        explanation:
          'Das Thema bezieht sich auf den Inhalt, nicht auf die Form. Und ein Motiv kann sowohl handlungs- als auch bildgebunden sein (z.\u00A0B. das Motiv der Nacht in der Romantik).',
      },
      {
        id: 'd',
        text: 'Motive gibt es nur in der Lyrik, Themen nur in der Epik.',
        correct: false,
        explanation:
          'Motive und Themen kommen in allen literarischen Gattungen vor — Epik, Lyrik und Dramatik.',
      },
    ],
  },
  {
    question:
      'Welches methodische Vorgehen ist für eine vergleichende Analyse zweier literarischer Werke am geeignetsten?',
    options: [
      {
        id: 'a',
        text: 'Erst Werk A vollständig analysieren, dann Werk B vollständig analysieren, und am Schluss einen kurzen Vergleichssatz ergänzen.',
        correct: false,
        explanation:
          'Dieses Vorgehen ist zu trennend. Ein bloßer Vergleichssatz am Ende reicht nicht aus — der Vergleich muss systematisch durch die gesamte Analyse hindurchgeführt werden.',
      },
      {
        id: 'b',
        text: 'Vergleichsaspekte festlegen und die Texte aspektweise gegenüberstellen, sodass Gemeinsamkeiten und Unterschiede direkt sichtbar werden.',
        correct: true,
        explanation:
          'Richtig! Die aspektorientierte Methode ist die Standardmethode des literarischen Vergleichs: Man definiert Vergleichsaspekte (z.\u00A0B. Erzählperspektive, Figurengestaltung, Motivik) und stellt die Texte Aspekt für Aspekt gegenüber. So wird der Vergleich zum Strukturprinzip der Analyse.',
      },
      {
        id: 'c',
        text: 'Nur die Gemeinsamkeiten herausarbeiten, da Unterschiede für den Vergleich nicht relevant sind.',
        correct: false,
        explanation:
          'Gerade die Unterschiede sind für einen Vergleich erkenntnisreich! Eine gute vergleichende Analyse arbeitet sowohl Gemeinsamkeiten als auch Unterschiede heraus und deutet sie.',
      },
      {
        id: 'd',
        text: 'Sich auf die biographischen Daten der Autoren konzentrieren und daraus Rückschlüsse auf die Texte ziehen.',
        correct: false,
        explanation:
          'Der biographische Ansatz allein reicht nicht aus. Eine vergleichende Analyse muss textbasiert arbeiten — biographische Kontexte können ergänzend herangezogen werden, sind aber nicht die primäre Methode.',
      },
    ],
  },
  {
    question:
      'Das Motiv des „Identitätsverlusts" findet sich sowohl in Kafkas „Die Verwandlung" als auch in Hoffmanns „Der Sandmann". Worin liegt ein zentraler Unterschied in der Gestaltung dieses Motivs?',
    options: [
      {
        id: 'a',
        text: 'Bei Kafka ist der Identitätsverlust körperlich-physisch (Verwandlung in ein Ungeziefer), bei Hoffmann psychisch (Wahnsinn und Realitätsverlust).',
        correct: true,
        explanation:
          'Richtig! Kafka gestaltet den Identitätsverlust als körperliche Metamorphose: Gregor Samsa verwandelt sich buchstäblich in ein Ungeziefer und verliert zunehmend seine menschliche Identität. Bei Hoffmann hingegen verliert Nathanael seine Identität durch psychische Zerrüttung: Er kann Realität und Fantasie nicht mehr unterscheiden und verfällt dem Wahnsinn. Beide Gestaltungsformen spiegeln die Ästhetik ihrer jeweiligen Epoche wider.',
      },
      {
        id: 'b',
        text: 'Beide Autoren gestalten den Identitätsverlust identisch — als Verwandlung in ein Tier.',
        correct: false,
        explanation:
          'Nur bei Kafka findet eine buchstäbliche Tierverwandlung statt. Hoffmanns Nathanael verwandelt sich nicht physisch, sondern verliert seine psychische Stabilität.',
      },
      {
        id: 'c',
        text: 'In beiden Werken wird der Identitätsverlust am Ende rückgängig gemacht.',
        correct: false,
        explanation:
          'In keinem der beiden Werke wird der Identitätsverlust rückgängig gemacht. Gregor Samsa stirbt in seiner Käfergestalt; Nathanael stürzt sich im Wahn vom Turm.',
      },
      {
        id: 'd',
        text: 'Der Identitätsverlust spielt in „Der Sandmann" keine Rolle — das zentrale Motiv ist die Liebe.',
        correct: false,
        explanation:
          'Das Liebesmotiv spielt zwar eine Rolle (Nathanaels Liebe zu Olimpia/Clara), aber der Identitätsverlust durch den zunehmenden Wahnsinn ist ein zentrales Motiv des „Sandmanns" — besonders im Hinblick auf die Frage, was „wirklich" ist.',
      },
    ],
  },
];
