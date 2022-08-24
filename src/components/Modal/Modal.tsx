import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Styles } from './Modal.styles';

import type { ModalProps } from './@types/Modal.types';
import type { RefObject } from 'react';
import { Button } from 'atoms/Button/Button';

const modalsPortal = document.getElementById('modals') as HTMLElement;

export const Modal = ({ children, isFooterVisible, isVisible, onClose, title }: ModalProps) => {
  const [animationStatus, setAnimationStatus] = useState<'enter' | 'leave'>('leave');
  const [isDialogMounted, setIsDialogMounted] = useState(false);

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    isVisible ? onEnter() : onLeave();
  }, [isVisible]);

  const onAnimationEnd = () => (animationStatus === 'leave' ? setIsDialogMounted(false) : null);

  const onEnter = () => {
    setIsDialogMounted(true);
    setAnimationStatus('enter');
  };

  const onLeave = () => setAnimationStatus('leave');

  const renderFooter = () => (
    <Styles.Footer>
      <Styles.ButtonWrapper>
        {/* <Button category={'transparent'} label={'Cancel'} onClick={onClose} />
        <Button category={'primary'} label={'Confirm'} /> */}
        <Button onClick={onClose}>CANCEL</Button>
        <Button>CONFIRM</Button>
      </Styles.ButtonWrapper>
    </Styles.Footer>
  );

  const renderModal = () => (
    <Styles.Modal animationStatus={animationStatus} onAnimationEnd={onAnimationEnd} ref={modalRef} tabIndex={-1}>
      <Styles.Mask onClick={onClose} />
      <Styles.Dialog animationStatus={animationStatus} className={animationStatus}>
        <Styles.CloseButton onClick={onClose} tabIndex={0} />
        <Styles.Content>
          {title ? <Styles.Title>{'Title'}</Styles.Title> : null}
          {children}
        </Styles.Content>
        {isFooterVisible ? renderFooter() : null}
      </Styles.Dialog>
    </Styles.Modal>
  );

  return createPortal(isDialogMounted ? renderModal() : null, modalsPortal);
};
