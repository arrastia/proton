import { dispatch } from '../useToastStore';

import type { Toast } from 'components/Toast/@types/Toast.types';
import type { ToastActions, ToastState } from '../@types/ToastStore.types';

const TOAST_LIMIT = 20;

const toastTimeouts = new Map<Toast['id'], ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);

    dispatch({ type: 'REMOVE_TOAST', payload: { toastId: toastId } });
  }, 1000);

  toastTimeouts.set(toastId, timeout);
};

const clearFromRemoveQueue = (toastId: string) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};

export const initialFormState: ToastState = { pausedAt: undefined, toasts: [] };

export const toastReducer = (state = initialFormState, { payload, type }: ToastActions): ToastState => {
  switch (type) {
    case 'ADD_TOAST':
      return { ...state, toasts: [payload.toast, ...state.toasts].slice(0, TOAST_LIMIT) };

    case 'UPDATE_TOAST':
      if (payload.toast.id) {
        clearFromRemoveQueue(payload.toast.id);
      }

      return { ...state, toasts: state.toasts.map(t => (t.id === payload.toast.id ? { ...t, ...payload.toast } : t)) };

    case 'UPSERT_TOAST':
      const { toast } = payload;
      const existingToast = state.toasts.find(t => t.id === toast.id);

      return toastReducer(state, { payload: { toast }, type: existingToast ? 'UPDATE_TOAST' : 'ADD_TOAST' });

    case 'DISMISS_TOAST':
      const { toastId } = payload;

      // ! Side effects ! - This could be execrated into a dismissToast() action, but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach(toast => addToRemoveQueue(toast.id));
      }

      return {
        ...state,
        toasts: state.toasts.map(t => (t.id === toastId || toastId === undefined ? { ...t, visible: false } : t))
      };

    case 'REMOVE_TOAST':
      if (payload.toastId === undefined) {
        return { ...state, toasts: [] };
      }

      return { ...state, toasts: state.toasts.filter(t => t.id !== payload.toastId) };

    case 'START_PAUSE':
      return { ...state, pausedAt: payload.time };

    case 'END_PAUSE':
      const diff = payload.time - (state.pausedAt || 0);

      return {
        ...state,
        pausedAt: undefined,
        toasts: state.toasts.map(t => ({ ...t, pauseDuration: t.pauseDuration + diff }))
      };

    default:
      return state;
  }
};
