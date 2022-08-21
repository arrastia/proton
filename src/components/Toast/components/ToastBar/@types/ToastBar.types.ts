import type { Renderable, Toast, ToastPosition } from 'components/Toast/@types/Toast.types';
import type { CSSProperties } from 'react';

export interface ToastBarProps {
  children?: (components: { icon: Renderable; message: Renderable }) => Renderable;
  position?: ToastPosition;
  style?: CSSProperties;
  toast: Toast;
}
