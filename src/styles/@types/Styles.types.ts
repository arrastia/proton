import 'styled-components';
import type { Colors, CorporateColors, Gradients, ThemeBasedColors } from 'styles/themes/colors';
import type { Shadows } from 'styles/themes/shadows';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    corporateColors: CorporateColors;
    gradients: Gradients;
    shadows: Shadows;
    themeBasedColors: ThemeBasedColors;
  }
}
