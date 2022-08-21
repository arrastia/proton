// import { useId } from 'react';

import type { DefaultToastOptions, Renderable, Toast, ToastOptions, ToastType, ValueOrFunction } from './@types/Toast.types';
import { dispatch } from './hooks/useToastStore/useToastStore';
import { resolveValue } from './utils/resolveValue';

type Message = ValueOrFunction<Renderable, Toast>;
type ToastHandler = (message: Message, options?: ToastOptions) => string;

export const genId = () => {
  let count = 0;

  return () => {
    return (++count).toString();
  };
};

const createToast = (message: Message, type: ToastType = 'blank', opts?: ToastOptions): Toast => ({
  ariaProps: { role: 'status', 'aria-live': 'polite' },
  createdAt: Date.now(),
  message,
  pauseDuration: 0,
  type,
  visible: true,
  ...opts,
  id: opts?.id || genId()()
});

const createHandler =
  (type?: ToastType): ToastHandler =>
  (message, options) => {
    const toast = createToast(message, type, options);
    dispatch({ type: 'UPSERT_TOAST', payload: { toast } });
    return toast.id;
  };

const toasting = (message: Message, opts?: ToastOptions) => createHandler('blank')(message, opts);

toasting.error = createHandler('error');
toasting.success = createHandler('success');
toasting.loading = createHandler('loading');
toasting.custom = createHandler('custom');

toasting.dismiss = (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', payload: { toastId } });

toasting.remove = (toastId?: string) => dispatch({ type: 'REMOVE_TOAST', payload: { toastId } });

toasting.promise = <T>(
  promise: Promise<T>,
  msgs: { loading: Renderable; success: ValueOrFunction<Renderable, T>; error: ValueOrFunction<Renderable, any> },
  opts?: DefaultToastOptions
) => {
  const id = toasting.loading(msgs.loading, { ...opts, ...opts?.loading });

  promise
    .then(p => {
      toasting.success(resolveValue(msgs.success, p), { id, ...opts, ...opts?.success });
      return p;
    })
    .catch(e => {
      toasting.error(resolveValue(msgs.error, e), { id, ...opts, ...opts?.error });
    });

  return promise;
};

export { toasting };
