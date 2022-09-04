import type { ActionMap } from 'types/Reducer/Reducer.types';
import type { Toast } from 'components/Toast/@types/Toast.types';

export type ToastActions = ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];

export interface ToastState {
  pausedAt: number | undefined;
  toasts: Toast[];
}

export interface ToastPayload {
  ADD_TOAST: { toast: Toast };
  DISMISS_TOAST: { toastId?: string };
  END_PAUSE: { time: number };
  REMOVE_TOAST: { toastId?: string };
  START_PAUSE: { time: number };
  UPDATE_TOAST: { toast: Partial<Toast> };
  HANDLE_TOAST: { toast: Toast };
}
