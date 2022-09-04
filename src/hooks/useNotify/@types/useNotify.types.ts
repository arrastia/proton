import type { Renderable, Toast, ToastOptions, ValueOrFunction } from 'components/Toast';

export type Message = ValueOrFunction<Renderable, Toast>;

export type NotificationHandler = (message: Message, options?: ToastOptions) => string;

export type PromiseMessages<T> = { loading: Renderable; success: ValueOrFunction<Renderable, T>; error: ValueOrFunction<Renderable, any> };
