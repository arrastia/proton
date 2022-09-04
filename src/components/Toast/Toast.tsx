import { createPortal } from 'react-dom';

import { Styles } from './Toast.styles';

import ToastBar from './components/ToastBar';

import { useToast } from 'hooks/useToast';

import { createRectRef } from './utils/createRectRef';
import { getPositionStyle } from './utils/getPositionStyle';
import { resolveValue } from 'utils/NotificationUtils';

import type { CSSProperties } from 'react';
import type { ToastProps } from './@types/Toast.types';

const DEFAULT_OFFSET = 16;
const notificationsPortal = document.getElementById('notifications') as HTMLElement;

export const Toast = ({ children, containerClassName, containerStyle, gutter, position = 'top-center', reverseOrder, toastOptions }: ToastProps) => {
  const { toasts, handlers } = useToast(toastOptions);

  const style: CSSProperties = {
    inset: DEFAULT_OFFSET,
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 9999
  };

  const renderToasts = () =>
    toasts.map(t => {
      const toastPosition = t.position || position;
      const offset = handlers.calculateOffset(t, { reverseOrder, gutter, defaultPosition: position });
      const positionStyle = getPositionStyle(toastPosition, offset);

      const ref = t.height ? undefined : createRectRef(rect => handlers.updateHeight(t.id, rect.height));

      return (
        <Styles.Toast className={t.visible ? 'activeClass' : ''} key={t.id} ref={ref} style={positionStyle}>
          {t.type === 'custom' ? resolveValue(t.message, t) : children ? children(t) : <ToastBar position={toastPosition} toast={t} />}
        </Styles.Toast>
      );
    });

  // return (
  //   <div className={containerClassName} onMouseEnter={handlers.startPause} onMouseLeave={handlers.endPause} style={{ ...style, ...containerStyle }}>
  //     {renderToasts()}
  //   </div>
  // );

  const renderToastComponent = () => (
    <div className={containerClassName} onMouseEnter={handlers.startPause} onMouseLeave={handlers.endPause} style={{ ...style, ...containerStyle }}>
      {renderToasts()}
    </div>
  );

  return createPortal(renderToasts(), notificationsPortal);
};
