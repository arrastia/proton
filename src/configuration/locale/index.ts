import english from './english.config.json';

import type { Locale } from './@types/Locale.types';

export const messages: Locale = { ...english };
export type { Languages, Locale, LocaleByPage } from './@types/Locale.types';
