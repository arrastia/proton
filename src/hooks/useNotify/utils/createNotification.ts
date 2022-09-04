import { generateNotificationId } from './generateNotificationId';

import type { AriaProps, Toast, ToastOptions, ToastType } from 'components/Toast';
import type { Message } from '../@types/useNotify.types';

const ariaProps: AriaProps = { 'aria-live': 'polite', role: 'status' };

export const createNotification = (message: Message, type: ToastType = 'blank', options?: ToastOptions): Toast => ({
  ariaProps,
  createdAt: Date.now(),
  id: generateNotificationId()(),
  message,
  pauseDuration: 0,
  type,
  visible: true,
  ...options
});
