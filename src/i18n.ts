// UI-Texte pro Sprache. Artikel/Themen liegen in src/content/{artikel,themen}/<lang>/.
export type Lang = 'de' | 'it' | 'en';

interface Locale {
  base: string;
  artikelBase: string;
  themenBase: string;
  siteName: string;
  tagline: string;
  description: string;
  nav: { ueber: string; ueberHref: string };
  footer: {
    impressum: string;
    impressumHref: string;
    datenschutz: string;
    datenschutzHref: string;
    werbung: string;
    werbungHref: string;
  };
  breadcrumbHome: string;
  sections: {
    haus: { label: string; title: string; intro: string };
    strahlung: { label: string; title: string; intro: string; cta: string };
  };
  strahlungHref: string;
  tools: { title: string; text: string; flug: string; dosis: string };
  adLabel: string;
  affiliateTag: string;
  publishedOn: string;
  updatedOn: string;
  dateLocale: string;
  otherLangs: { code: Lang; label: string; href: string }[];
}

export const LOCALES: Record<Lang, Locale> = {
  de: {
    base: '',
    artikelBase: '/artikel',
    themenBase: '/themen',
    siteName: 'Strahlung im Alltag',
    tagline: 'Radioaktivität einfach erklärt',
    description:
      'Paranüsse, Flugreisen, Röntgen beim Zahnarzt, Millisievert: Wir erklären verständlich, wo uns Strahlung im Alltag begegnet — und wann sie wirklich ein Problem ist.',
    nav: { ueber: 'Über uns', ueberHref: '/ueber-uns' },
    footer: {
      impressum: 'Impressum',
      impressumHref: '/impressum',
      datenschutz: 'Datenschutz',
      datenschutzHref: '/datenschutz',
      werbung: 'Werben Sie hier',
      werbungHref: '/werbung',
    },
    breadcrumbHome: 'Start',
    sections: {
      haus: {
        label: 'Gefahren im Haus',
        title: 'Was du nicht siehst, wohnt trotzdem mit.',
        intro:
          'Radon aus dem Boden, Altlasten in der Wand, Blei im Wasser — drei unsichtbare Mitbewohner, die sich alle messen lassen.',
      },
      strahlung: {
        label: 'Strahlungs-Wissen',
        title: 'Strahlung, eingeordnet',
        intro:
          'Wie viel Strahlung steckt in einem Flug, einem Röntgenbild, einer Paranuss? Der Wissensbereich liefert die Zahlen zum Einordnen.',
        cta: 'Zum Strahlungs-Wissen',
      },
    },
    strahlungHref: '/strahlung',
    tools: {
      title: 'Selbst nachrechnen?',
      text: 'Zwei kostenlose Rechner von kurse.dirkschulze.ch:',
      flug: 'Flugdosis-Rechner',
      dosis: 'Dosis-Rechner für Röntgen & DVT',
    },
    adLabel: 'Anzeige',
    affiliateTag: 'Anzeige · Affiliate-Link',
    publishedOn: 'Veröffentlicht am',
    updatedOn: 'Aktualisiert am',
    dateLocale: 'de-CH',
    otherLangs: [
      { code: 'it', label: 'Italiano', href: '/it' },
      { code: 'en', label: 'English', href: '/en' },
    ],
  },
  it: {
    base: '/it',
    artikelBase: '/it/articoli',
    themenBase: '/it/temi',
    siteName: 'Radiazioni nella vita quotidiana',
    tagline: 'La radioattività spiegata in modo semplice',
    description:
      'Noci brasiliane, viaggi in aereo, radiografie dal dentista, millisievert: spieghiamo in modo comprensibile dove incontriamo le radiazioni nella vita quotidiana — e quando sono davvero un problema.',
    nav: { ueber: 'Chi siamo', ueberHref: '/it/chi-siamo' },
    footer: {
      impressum: 'Note legali',
      impressumHref: '/it/note-legali',
      datenschutz: 'Privacy',
      datenschutzHref: '/it/privacy',
      werbung: 'Pubblicità',
      werbungHref: '/it/pubblicita',
    },
    breadcrumbHome: 'Home',
    sections: {
      haus: {
        label: 'Pericoli in casa',
        title: 'Ciò che non vedi abita comunque con te.',
        intro:
          'Radon dal terreno, eredità nascoste nei muri, piombo nell’acqua — tre coinquilini invisibili che si possono misurare.',
      },
      strahlung: {
        label: 'Radiazioni',
        title: 'Le radiazioni, messe in fila',
        intro:
          'Quanta radiazione c’è in un volo, in una radiografia, in una noce brasiliana? La sezione di approfondimento dà i numeri per capire.',
        cta: 'Alla sezione radiazioni',
      },
    },
    strahlungHref: '/it/radiazioni',
    tools: {
      title: 'Vuoi fare i conti da solo?',
      text: 'Due calcolatori gratuiti di kurse.dirkschulze.ch:',
      flug: 'Calcolatore della dose di volo',
      dosis: 'Calcolatore di dose per radiografie e CBCT',
    },
    adLabel: 'Annuncio',
    affiliateTag: 'Annuncio · link di affiliazione',
    publishedOn: 'Pubblicato il',
    updatedOn: 'Aggiornato il',
    dateLocale: 'it-CH',
    otherLangs: [
      { code: 'de', label: 'Deutsch', href: '/' },
      { code: 'en', label: 'English', href: '/en' },
    ],
  },
  en: {
    base: '/en',
    artikelBase: '/en/articles',
    themenBase: '/en/topics',
    siteName: 'Everyday Radiation',
    tagline: 'Radiation, put in perspective',
    description:
      'Brazil nuts, long-haul flights, dental X-rays, millisieverts: we explain in plain language where radiation shows up in everyday life — and when it actually matters.',
    nav: { ueber: 'About', ueberHref: '/en/about' },
    footer: {
      impressum: 'Legal notice',
      impressumHref: '/en/legal-notice',
      datenschutz: 'Privacy',
      datenschutzHref: '/en/privacy',
      werbung: 'Advertise',
      werbungHref: '/en/advertise',
    },
    breadcrumbHome: 'Home',
    sections: {
      haus: {
        label: 'Home Hazards',
        title: 'What you can’t see still lives with you.',
        intro:
          'Radon from the ground, legacies in the walls, lead in the water — three invisible housemates, all of them measurable.',
      },
      strahlung: {
        label: 'Radiation Info',
        title: 'Radiation, put in perspective',
        intro:
          'How much radiation is in a flight, an X-ray, a Brazil nut? The knowledge section gives you the numbers to judge for yourself.',
        cta: 'Explore Radiation Info',
      },
    },
    strahlungHref: '/en/radiation',
    tools: {
      title: 'Want to run the numbers yourself?',
      text: 'Two free calculators from kurse.dirkschulze.ch:',
      flug: 'Flight dose calculator',
      dosis: 'Dose calculator for X-rays & CBCT',
    },
    adLabel: 'Advertisement',
    affiliateTag: 'Ad · affiliate link',
    publishedOn: 'Published',
    updatedOn: 'Updated',
    dateLocale: 'en-US',
    otherLangs: [
      { code: 'de', label: 'Deutsch', href: '/' },
      { code: 'it', label: 'Italiano', href: '/it' },
    ],
  },
};
