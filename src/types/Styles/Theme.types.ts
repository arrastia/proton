import 'styled-components';
import type { Gradient } from 'styles/themes/gradients';

type Colors = any;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    gradients: { calendar: Gradient; drive: Gradient; mail: Gradient; vpn: Gradient };
  }
}
