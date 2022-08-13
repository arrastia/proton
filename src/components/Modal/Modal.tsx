import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

import type { ModalProps } from './@types/Modal.types';
import type { RefObject } from 'react';
import Button from 'atoms/Button';

const modalsPortal = document.getElementById('modals') as HTMLElement;

export const Modal = ({ children, isFooterVisible, isVisible, onClose, title }: ModalProps) => {
  const [animationStatus, setAnimationStatus] = useState<'enter' | 'leave'>('leave');
  const [isDialogMounted, setIsDialogMounted] = useState(false);

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    isVisible ? onEnter() : onLeave();
  }, [isVisible]);

  const onAnimationEnd = () => (animationStatus === 'leave' ? setIsDialogMounted(false) : modalRef.current?.focus());

  const onEnter = () => {
    setIsDialogMounted(true);
    setAnimationStatus('enter');
  };

  const onLeave = () => setAnimationStatus('leave');

  const renderFooter = () => (
    <footer className={classes.footer}>
      <span className={classes.buttonWrapper}>
        <Button onClick={onClose}>CANCEL</Button>
        <Button>CONFIRM</Button>
      </span>
    </footer>
  );

  const renderModal = () => (
    <div className={classes.modal} onAnimationEnd={onAnimationEnd} ref={modalRef} tabIndex={-1}>
      <div className={classes.mask} onClick={onClose} />
      <div className={classes.dialog}>
        <button className={classes.closeButton} onClick={onClose} tabIndex={0} />
        <div className={classes.content}>
          {title ? <h3 className={classes.title}>{'Title'}</h3> : null}
          {children}
        </div>
        {isFooterVisible ? renderFooter() : null}
      </div>
    </div>
  );

  return createPortal(isDialogMounted ? renderModal() : null, modalsPortal);
};
