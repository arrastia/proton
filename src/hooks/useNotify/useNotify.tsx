import { dispatch } from 'hooks/useToast';

import { createNotification } from './utils/createNotification';
import { resolveValue } from 'utils/NotificationUtils';

import type { DefaultToastOptions, ToastOptions, ToastType } from 'components/Toast';
import type { Message, NotificationHandler, PromiseMessages } from './@types/useNotify.types';

export const useNotify = () => {
  const createHandler =
    (type?: ToastType): NotificationHandler =>
    (message, options) =>
      handleNotification(message, type, options);

  const handleNotification = (message: Message, type?: ToastType, options?: ToastOptions) => {
    const toast = createNotification(message, type, options);
    dispatch({ type: 'HANDLE_TOAST', payload: { toast } });

    return toast.id;
  };

  const notification = (message: Message, opts?: ToastOptions) => createHandler('blank')(message, opts);

  notification.custom = createHandler('custom');
  notification.error = createHandler('error');
  notification.loading = createHandler('loading');
  notification.success = createHandler('success');

  notification.dismiss = (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', payload: { toastId } });
  notification.remove = (toastId?: string) => dispatch({ type: 'REMOVE_TOAST', payload: { toastId } });

  notification.promise = async <T,>(promise: Promise<T>, msgs: PromiseMessages<T>, opts?: DefaultToastOptions) => {
    const id = notification.loading(msgs.loading, { ...opts, ...opts?.loading });

    promise
      .then(p => {
        notification.success(resolveValue(msgs.success, p), { id, ...opts, ...opts?.success });
        return p;
      })
      .catch(e => {
        notification.error(resolveValue(msgs.error, e), { id, ...opts, ...opts?.error });
      });

    return promise;
  };

  return notification;
};
