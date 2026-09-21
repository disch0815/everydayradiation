// Slug-Zuordnung der Sprachversionen (Schlüssel: deutscher Slug).
// Wird für hreflang-Alternates und den Sprachumschalter-Kontext genutzt.
import { LOCALES, type Lang } from './i18n';

type Group = Record<Lang, string>;

export const THEMEN_I18N: Group[] = [
  { de: 'lebensmittel', it: 'alimenti', en: 'food' },
  { de: 'fliegen', it: 'volare', en: 'flying' },
  { de: 'roentgen', it: 'radiografie', en: 'x-rays' },
  { de: 'grundlagen', it: 'capire', en: 'basics' },
];

export const ARTIKEL_I18N: Group[] = [
  { de: 'paranuesse', it: 'noci-brasiliane', en: 'brazil-nuts' },
  { de: 'mineralwasser', it: 'acqua-minerale', en: 'mineral-water' },
  { de: 'radioaktivitaet-im-essen', it: 'radioattivita-nel-cibo', en: 'radioactivity-in-food' },
  { de: 'flugdosis-new-york', it: 'dose-volo-new-york', en: 'flight-dose-new-york' },
  { de: 'vielflieger-und-crew', it: 'frequent-flyer-e-equipaggio', en: 'frequent-flyers-and-crew' },
  { de: 'roentgen-zahnarzt-dosis', it: 'radiografia-dentista', en: 'dental-x-ray-dose' },
  { de: 'bleischuerze', it: 'grembiule-piombato', en: 'lead-apron' },
  { de: 'roentgen-schwangerschaft', it: 'radiografie-in-gravidanza', en: 'x-rays-during-pregnancy' },
  { de: 'millisievert-einfach-erklaert', it: 'millisievert-spiegato', en: 'millisievert-explained' },
  { de: 'aktuelle-messwerte-karten', it: 'valori-in-tempo-reale', en: 'live-radiation-maps' },
  { de: 'rauchen-strahlung', it: 'fumo-e-radiazioni', en: 'smoking-radiation' },
];

export interface Alternate {
  lang: Lang | 'x-default';
  href: string;
}

/** hreflang-Alternates für Themen- oder Artikelseiten (relative Pfade). */
export function alternatesFor(
  kind: 'thema' | 'artikel',
  lang: Lang,
  slug: string
): Alternate[] {
  const table = kind === 'thema' ? THEMEN_I18N : ARTIKEL_I18N;
  const group = table.find((g) => g[lang] === slug);
  if (!group) return [];
  const base = (l: Lang) =>
    kind === 'thema' ? LOCALES[l].themenBase : LOCALES[l].artikelBase;
  const alts: Alternate[] = (['de', 'it', 'en'] as Lang[]).map((l) => ({
    lang: l,
    href: `${base(l)}/${group[l]}`,
  }));
  // x-default: die deutsche Version als Primärsprache
  alts.push({ lang: 'x-default', href: `${base('de')}/${group.de}` });
  return alts;
}

/** hreflang-Alternates für die Strahlungs-Hub-Seiten. */
export function hubAlternates(): Alternate[] {
  return [
    { lang: 'de', href: LOCALES.de.strahlungHref },
    { lang: 'it', href: LOCALES.it.strahlungHref },
    { lang: 'en', href: LOCALES.en.strahlungHref },
    { lang: 'x-default', href: LOCALES.de.strahlungHref },
  ];
}

/** hreflang-Alternates für die Startseiten. */
export function homeAlternates(): Alternate[] {
  return [
    { lang: 'de', href: '/' },
    { lang: 'it', href: '/it' },
    { lang: 'en', href: '/en' },
    { lang: 'x-default', href: '/' },
  ];
}
