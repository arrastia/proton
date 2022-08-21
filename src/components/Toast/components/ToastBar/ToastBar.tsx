import { Fragment, memo } from 'react';

import { Styles } from './ToastBar.styles';

import ToastIcon from '../ToastIcon';

import { getAnimationStyle } from 'components/Toast/utils/getAnimationStyle';
import { resolveValue } from 'components/Toast/utils/resolveValue';

import type { ToastBarProps } from './@types/ToastBar.types';
import type { CSSProperties } from 'react';

export const ToastBar = memo(({ children, position, style, toast }: ToastBarProps) => {
  // const animationStyle: CSSProperties = toast?.height ? getAnimationStyle(toast.position || position || 'top-center', toast.visible) : { opacity: 0 };

  const icon = <ToastIcon toast={toast} />;

  const message = <Styles.Message {...toast.ariaProps}>{resolveValue(toast.message, toast)}</Styles.Message>;

  return (
    <Styles.ToastBarBase className={toast.className} isVisible={toast.visible} style={{ ...style, ...toast.style }}>
      {typeof children === 'function' ? (
        children({ icon, message })
      ) : (
        <Fragment>
          {icon}
          {message}
        </Fragment>
      )}
    </Styles.ToastBarBase>
  );
});
