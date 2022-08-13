import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isFooterVisible?: boolean;
  isVisible: boolean;
  onClose: () => void;
  title?: string;
}
