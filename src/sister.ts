// Cross-Promo zur Schwester-Seite unseenhouse.com
import type { Lang } from './i18n';

export const SISTER_URL = 'https://unseenhouse.com';

export const SISTER: Record<
  Lang,
  {
    url: string;
    label: string;
    title: string;
    intro: string;
    cta: string;
    topics: { title: string; href: string }[];
  }
> = {
  de: {
    url: SISTER_URL,
    label: 'Schwester-Seite',
    title: 'Unsichtbare Risiken zu Hause',
    intro:
      'Die grösste Strahlenquelle im Alltag wartet zu Hause: Radon. Auf unserer Schwester-Seite geht es um die unsichtbaren Risiken im Haus — vom Radon im Keller über Asbest bis zum Trinkwasser.',
    cta: 'Zu unseenhouse.com',
    topics: [
      { title: 'Radon zu Hause', href: `${SISTER_URL}/themen/radon` },
      { title: 'Schadstoffe im Haus', href: `${SISTER_URL}/themen/schadstoffe` },
      { title: 'Trinkwasserqualität', href: `${SISTER_URL}/themen/trinkwasser` },
    ],
  },
  it: {
    url: `${SISTER_URL}/it`,
    label: 'Sito gemello',
    title: 'Rischi invisibili in casa',
    intro:
      'La più grande sorgente di radiazioni della vita quotidiana aspetta a casa: il radon. Il nostro sito gemello si occupa dei rischi invisibili dell’abitare — dal radon in cantina all’amianto fino all’acqua potabile.',
    cta: 'Vai a unseenhouse.com',
    topics: [
      { title: 'Radon in casa', href: `${SISTER_URL}/it/temi/radon` },
      { title: 'Sostanze nocive in casa', href: `${SISTER_URL}/it/temi/inquinanti` },
      { title: 'Qualità dell’acqua potabile', href: `${SISTER_URL}/it/temi/acqua` },
    ],
  },
  en: {
    url: `${SISTER_URL}/en`,
    label: 'Sister site',
    title: 'Invisible risks at home',
    intro:
      'The biggest everyday radiation source waits at home: radon. Our sister site covers the invisible risks of the house — from radon in the basement to asbestos to tap water.',
    cta: 'Visit unseenhouse.com',
    topics: [
      { title: 'Radon at Home', href: `${SISTER_URL}/en/topics/radon` },
      { title: 'Pollutants in the Home', href: `${SISTER_URL}/en/topics/home-pollutants` },
      { title: 'Drinking Water Quality', href: `${SISTER_URL}/en/topics/drinking-water` },
    ],
  },
};
