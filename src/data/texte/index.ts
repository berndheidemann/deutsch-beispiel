import type { Textauszug } from '../../types';

export const textauszuege: Textauszug[] = [
  // === LYRIK ===
  {
    id: 'goethe-willkommen',
    titel: 'Willkommen und Abschied',
    autor: 'Johann Wolfgang von Goethe',
    erscheinungsjahr: 1771,
    gattung: 'lyrik',
    epoche: 'sturm-und-drang',
    text: `Es schlug mein Herz, geschwind zu Pferde!
Es war getan fast eh gedacht.
Der Abend wiegte schon die Erde,
Und an den Bergen hing die Nacht;
Schon stand im Nebelkleid die Eiche,
Ein aufgetürmter Riese, da,
Wo Finsternis aus dem Gesträuche
Mit hundert schwarzen Augen sah.

Der Mond von einem Wolkenhügel
Sah kläglich aus dem Duft hervor,
Die Winde schwangen leise Flügel,
Umsausten schauerlich mein Ohr;
Die Nacht schuf tausend Ungeheuer,
Doch frisch und fröhlich war mein Mut:
In meinen Adern welches Feuer!
In meinem Herzen welche Glut!

Dich sah ich, und die milde Freude
Floß von dem süßen Blick auf mich;
Ganz war mein Herz an deiner Seite
Und jeder Atemzug für dich.
Ein rosenfarbnes Frühlingswetter
Umgab das liebliche Gesicht,
Und Zärtlichkeit für mich — ihr Götter!
Ich hofft es, ich verdient es nicht!

Doch ach, schon mit der Morgensonne
Verengt der Abschied mir das Herz:
In deinen Küssen welche Wonne!
In deinem Auge welcher Schmerz!
Ich ging, du standst und sahst zur Erden,
Und sahst mir nach mit nassem Blick:
Und doch, welch Glück, geliebt zu werden!
Und lieben, Götter, welch ein Glück!`,
    quelle: 'Goethe, Gedichte (Erstdruck 1775, Sesenheimer Lieder). Projekt Gutenberg.',
  },
  {
    id: 'goethe-wandrers-nachtlied',
    titel: 'Wandrers Nachtlied',
    autor: 'Johann Wolfgang von Goethe',
    erscheinungsjahr: 1780,
    gattung: 'lyrik',
    epoche: 'weimarer-klassik',
    text: `Über allen Gipfeln
Ist Ruh,
In allen Wipfeln
Spürest du
Kaum einen Hauch;
Die Vögelein schweigen im Walde.
Warte nur, balde
Ruhest du auch.`,
    quelle: 'Goethe, Gedichte. Projekt Gutenberg.',
  },
  {
    id: 'eichendorff-mondnacht',
    titel: 'Mondnacht',
    autor: 'Joseph von Eichendorff',
    erscheinungsjahr: 1837,
    gattung: 'lyrik',
    epoche: 'romantik',
    text: `Es war, als hätt der Himmel
Die Erde still geküsst,
Dass sie im Blütenschimmer
Von ihm nun träumen müsst.

Die Luft ging durch die Felder,
Die Ähren wogten sacht,
Es rauschten leis die Wälder,
So sternklar war die Nacht.

Und meine Seele spannte
Weit ihre Flügel aus,
Flog durch die stillen Lande,
Als flöge sie nach Haus.`,
    quelle: 'Eichendorff, Gedichte (1837). Projekt Gutenberg.',
  },
  // === EPIK ===
  {
    id: 'kafka-verwandlung-anfang',
    titel: 'Die Verwandlung (Anfang)',
    autor: 'Franz Kafka',
    erscheinungsjahr: 1915,
    gattung: 'epik',
    epoche: 'expressionismus',
    text: `Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Er lag auf seinem panzerartig harten Rücken und sah, wenn er den Kopf ein wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnen Beine flimmerten ihm hilflos vor den Augen.`,
    quelle: 'Kafka, Die Verwandlung (1915). Project Gutenberg, eBook #22367.',
    worterklarungen: {
      'ungeheueren Ungeziefer': 'Im Original: „ungeheures Ungeziefer" — Kafka vermeidet bewusst eine genaue Benennung des Tieres',
      'panzerartig': 'Wie ein Panzer — verweist auf Käfer oder Insekt',
    },
  },
  {
    id: 'fontane-effi-anfang',
    titel: 'Effi Briest (Anfang)',
    autor: 'Theodor Fontane',
    erscheinungsjahr: 1895,
    gattung: 'epik',
    epoche: 'realismus',
    text: `In Front des schon seit Kurfürst Georg Wilhelm von der Familie von Briest bewohnten Herrenhauses zu Hohen-Cremmen fiel heller Sonnenschein auf die mittagsstille Dorfstraße, während nach der Park- und Gartenseite hin ein rechtwinklig angebauter Seitenflügel einen breiten Schatten erst auf einen weiß und grün quadrierten Fliesengang und dann über diesen hinaus auf ein großes, in seiner Mitte mit einer Sonnenuhr und an seinem Rande mit Canna indica und Rhabarberstauden besetztes Rondell warf.`,
    quelle: 'Fontane, Effi Briest (1895). Project Gutenberg, eBook #5323.',
    worterklarungen: {
      'Kurfürst Georg Wilhelm': 'Kurfürst von Brandenburg (1595–1640) — zeigt das Alter und den Adelsstatus der Familie',
      'Rondell': 'Rundes Gartenbeet',
      'Canna indica': 'Indisches Blumenrohr — eine exotische Zierpflanze',
    },
  },
  {
    id: 'fontane-effi-erlebte-rede',
    titel: 'Effi Briest (Erlebte Rede)',
    autor: 'Theodor Fontane',
    erscheinungsjahr: 1895,
    gattung: 'epik',
    epoche: 'realismus',
    text: `Ja, Instetten hatte recht gehabt, und wie klug er alles wußte. Aber was half ihr das jetzt? Er wußte alles und handelte danach, und wenn er auch persönlich nicht Besonderes dabei empfinden mochte, er hielt dafür, es müsse so sein, „der Gesellschaft wegen". Die Gesellschaft! Konnte sie nicht auf die Gesellschaft pfeifen?`,
    quelle: 'Fontane, Effi Briest (1895). Project Gutenberg, eBook #5323.',
  },
  {
    id: 'hoffmann-sandmann-anfang',
    titel: 'Der Sandmann (Briefanfang)',
    autor: 'E.T.A. Hoffmann',
    erscheinungsjahr: 1816,
    gattung: 'epik',
    epoche: 'romantik',
    text: `Gewiß seid Ihr alle voll Unruhe, daß ich so lange — lange nicht geschrieben. Mutter zürnt wohl, und Clara mag glauben, ich lebe hier in Saus und Braus und vergesse mein holdes Engelsbild, so tief mir in Herz und Sinn eingeprägt, ganz und gar. — Dem ist aber nicht so; täglich und stündlich gedenke ich Eurer aller, und in süßen Träumen geht meines holden Clärchens freundliche Gestalt vorüber und lächelt mich mit ihren hellen Augen so anmutig an, wie sie wohl pflegte, wenn ich zu Euch hineintrat.`,
    quelle: 'E.T.A. Hoffmann, Der Sandmann (1816), in: Nachtstücke. Project Gutenberg, eBook #6341.',
  },
  // === DRAMATIK ===
  {
    id: 'schiller-kabale-I-1',
    titel: 'Kabale und Liebe (I,1 — Auszug)',
    autor: 'Friedrich Schiller',
    erscheinungsjahr: 1784,
    gattung: 'dramatik',
    epoche: 'sturm-und-drang',
    text: `MILLER steht auf und stellt seine Violine beiseite. Einmal für allemal! Der Handel wird ernsthaft. Meine Tochter kommt mit dem Baron ins Geschrei. Mein Haus wird verrufen. Der Präsident bekommt Wind, und — kurz und gut, ich biet dem Junker aus.

FRAU MILLERIN. Aber das, daß der Junge von Adel ist! — Wie willst du verhindern, daß die Leute nicht drüber die Mäuler reißen?

MILLER. Dazu sag ich auch kein Wort. Aber sag mir: Was soll herauskommen? — Er kann das Mädel nicht heiraten — Vom Nehmen ist gar die Rede nicht, und schnappen — legt die Violine nieder, wird er sie doch am Ende, wenn er den Appetit verloren hat, wie ein hundsfötterischer — God forgive me! — Und das arme Geschöpf hat den Schimpf — hat den Teufel am Hals oder beides.`,
    quelle: 'Schiller, Kabale und Liebe (1784), I. Akt, 1. Szene. Project Gutenberg, eBook #6498.',
    worterklarungen: {
      'ins Geschrei kommen': 'In Verruf geraten, zum Gegenstand von Klatsch werden',
      'Wind bekommen': 'Davon erfahren',
      'ausbiet': 'Hinauswerfen, des Hauses verweisen',
      'hundsfötterisch': 'Derb: gemein, hinterhältig',
    },
  },
  {
    id: 'lessing-nathan-ringparabel',
    titel: 'Nathan der Weise — Ringparabel (Auszug)',
    autor: 'Gotthold Ephraim Lessing',
    erscheinungsjahr: 1779,
    gattung: 'dramatik',
    epoche: 'aufklaerung',
    text: `NATHAN. Vor grauen Jahren lebt' ein Mann in Osten,
Der einen Ring von unschätzbarem Wert
Aus lieber Hand besaß. Der Stein war ein
Opal, der hundert schöne Farben spielte,
Und hatte die geheime Kraft, vor Gott
Und Menschen angenehm zu machen, wer
In dieser Zuversicht ihn trug. Was Wunder,
Daß ihn der Mann in Osten darum nie
Vom Finger ließ; und die Verfügung traf,
Auf ewig ihn bei seinem liebsten Sohne
Zu lassen, — und so kam der Ring, von Sohn
Zu Sohn, — auf einen Vater endlich, der
Drei Söhne hatte, die ihm alle drei
Gleich gehorsam waren, und die er folglich
Gleich zu lieben nicht umhin konnte.`,
    quelle: 'Lessing, Nathan der Weise (1779), III. Akt, 7. Auftritt. Project Gutenberg, eBook #9186.',
  },
];

export const textauszuegeByGattung = {
  epik: textauszuege.filter(t => t.gattung === 'epik'),
  lyrik: textauszuege.filter(t => t.gattung === 'lyrik'),
  dramatik: textauszuege.filter(t => t.gattung === 'dramatik'),
  sachtext: textauszuege.filter(t => t.gattung === 'sachtext'),
};

export const textauszuegeById = Object.fromEntries(
  textauszuege.map(t => [t.id, t])
) as Record<string, Textauszug>;
