import { base } from './base.theme';

import type { ThemeBasedColors } from './colors';

const colors: ThemeBasedColors = {
  background: '#ffffff',
  borderDefault: '#aaaaaa',
  divider: '#dbdbe0',
  glass: 'rgb(255 255 255 / 31%)',
  text: '#545d68',
  textBright: '#636e7b'
};

export const light = { ...base, themeBasedColors: colors };
