import type { CSSProperties } from 'react';

export type AriaProps = { role: 'status' | 'alert'; 'aria-live': 'assertive' | 'off' | 'polite' };
export type IconTheme = { primary: string; secondary: string };
export type Renderable = JSX.Element | string | null;
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom';
export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;

export interface Toast {
  ariaProps: AriaProps;
  className?: string;
  createdAt: number;
  duration?: number;
  height?: number;
  icon?: Renderable;
  iconTheme?: IconTheme;
  id: string;
  message: ValueOrFunction<Renderable, Toast>;
  pauseDuration: number;
  position?: ToastPosition;
  style?: CSSProperties;
  type: ToastType;
  visible: boolean;
}

export type ToastOptions = Partial<Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'>>;

export type DefaultToastOptions = ToastOptions & {
  [key in ToastType]?: ToastOptions;
};

export interface ToastProps {
  children?: (toast: Toast) => JSX.Element;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  gutter?: number;
  position?: ToastPosition;
  reverseOrder?: boolean;
  toastOptions: DefaultToastOptions;
}
