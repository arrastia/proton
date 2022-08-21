import { Styles } from './ToastIcon.styles';

import { CheckMarkIcon } from '../CheckMarkIcon';
import { ErrorIcon } from '../ErrorIcon';
import { LoaderIcon } from '../LoaderIcon';

import type { Toast } from 'components/Toast/@types/Toast.types';

export const ToastIcon = ({ toast }: { toast: Toast }) => {
  const { icon, type, iconTheme } = toast;

  if (icon !== undefined) {
    if (typeof icon === 'string') {
      return <Styles.AnimatedIconWrapper>{icon}</Styles.AnimatedIconWrapper>;
    } else {
      return icon;
    }
  }

  if (type === 'blank') {
    return null;
  }

  return (
    <Styles.IndicatorWrapper>
      <LoaderIcon {...iconTheme} />
      {type !== 'loading' && (
        <Styles.StatusWrapper>{type === 'error' ? <ErrorIcon {...iconTheme} /> : <CheckMarkIcon {...iconTheme} />}</Styles.StatusWrapper>
      )}
    </Styles.IndicatorWrapper>
  );
};
