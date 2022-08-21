import { Styles } from './ErrorIcon.styles';

import type { ErrorTheme } from './@types/ErrorIcon.types';

export const ErrorIcon = ({ primary, secondary }: ErrorTheme) => <Styles.ErrorIcon primary={primary} secondary={secondary} />;
