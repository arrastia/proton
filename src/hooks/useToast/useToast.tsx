import { useEffect, useMemo } from 'react';

import { dispatch, useToastStore } from './useToastStore';
import { useNotify } from 'hooks/useNotify';

import type { DefaultToastOptions, Toast, ToastPosition } from 'components/Toast';

export const useToast = (toastOptions: DefaultToastOptions) => {
  const { dismiss } = useNotify();
  const { pausedAt, toasts } = useToastStore(toastOptions);

  useEffect(() => {
    if (pausedAt) return;

    const now = Date.now();
    const timeouts = toasts.map(t => {
      if (t.duration === Infinity) return [];

      const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          dismiss(t.id);
        }
        return [];
      }
      return setTimeout(() => dismiss(t.id), durationLeft);
    });

    return () => {
      timeouts.forEach((timeout: any) => timeout && clearTimeout(timeout));
    };
  }, [toasts, pausedAt]);

  const handlers = useMemo(
    () => ({
      startPause: () => {
        dispatch({ type: 'START_PAUSE', payload: { time: Date.now() } });
      },
      endPause: () => {
        if (pausedAt) {
          dispatch({ type: 'END_PAUSE', payload: { time: Date.now() } });
        }
      },
      updateHeight: (toastId: string, height: number) => dispatch({ type: 'UPDATE_TOAST', payload: { toast: { id: toastId, height } } }),
      calculateOffset: (toast: Toast, opts?: { reverseOrder?: boolean; gutter?: number; defaultPosition?: ToastPosition }) => {
        const { reverseOrder = false, gutter = 8, defaultPosition } = opts || {};

        const relevantToasts = toasts.filter(t => (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height);
        const toastIndex = relevantToasts.findIndex(t => t.id === toast.id);
        const toastsBefore = relevantToasts.filter((toast, i) => i < toastIndex && toast.visible).length;

        const offset = relevantToasts
          .filter(t => t.visible)
          .slice(...(reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]))
          .reduce((acc, t) => acc + (t.height || 0) + gutter, 0);

        return offset;
      }
    }),
    [toasts, pausedAt]
  );

  return { handlers, toasts };
};
