import { useEffect, useState } from 'react';

import { toastReducer } from './reducers/toastReducer';

import type { DefaultToastOptions, ToastType } from '../../@types/Toast.types';
import type { ToastActions, ToastState } from './@types/ToastStore.types';

type ToastTimeouts = { [key in ToastType]: number };

const defaultTimeouts: ToastTimeouts = { blank: 4000, error: 4000, success: 2000, loading: Infinity, custom: 4000 };
const listeners: Array<(state: ToastState) => void> = [];

let memoryState: ToastState = { toasts: [], pausedAt: undefined };

export const dispatch = (action: ToastActions) => {
  memoryState = toastReducer(memoryState, action);

  listeners.forEach(listener => {
    listener(memoryState);
  });
};

export const useToastStore = (toastOptions: DefaultToastOptions = {}): ToastState => {
  const [state, setState] = useState<ToastState>(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);

      if (index > -1) listeners.splice(index, 1);
    };
  }, [state]);

  const mergedToasts = state.toasts.map(t => ({
    ...toastOptions,
    ...toastOptions[t.type],
    ...t,
    duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
    style: { ...toastOptions.style, ...toastOptions[t.type]?.style, ...t.style }
  }));

  return { ...state, toasts: mergedToasts };
};
