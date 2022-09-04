import { base } from './base.theme';

import type { ThemeBasedColors } from './colors';

const colors: ThemeBasedColors = {
  background: '#2d333b',
  borderDefault: '#444c56',
  divider: '#768390',
  glass: 'rgb(255 255 255 / 31%)',
  text: '#909dab',
  textBright: '#cdd9e5'
};

export const dark = { ...base, themeBasedColors: colors };
