import { Styles } from './LoaderIcon.styles';

import type { LoaderTheme } from './@types/LoaderIcon.types';

export const LoaderIcon = ({ primary, secondary }: LoaderTheme) => <Styles.LoaderIcon primary={primary} secondary={secondary} />;
