import { Styles } from './CheckMarkIcon.styles';

import type { CheckMarkTheme } from './@types/CheckMarkIcon.types';

export const CheckMarkIcon = ({ primary, secondary }: CheckMarkTheme) => <Styles.CheckMarkIcon primary={primary} secondary={secondary} />;
