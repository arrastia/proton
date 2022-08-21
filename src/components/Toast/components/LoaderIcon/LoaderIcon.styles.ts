import styled from 'styled-components';

import { rotate } from 'styles/animations/rotate';

import type { LoaderTheme } from './@types/LoaderIcon.types';

const LoaderIcon = styled('div')<LoaderTheme>`
  animation: ${rotate} 1s linear infinite;
  border: 2px solid;
  border-color: ${p => p.secondary || '#e0e0e0'};
  border-radius: 100%;
  border-right-color: ${p => p.primary || '#616161'};
  box-sizing: border-box;
  height: 12px;
  width: 12px;
`;

export const Styles = { LoaderIcon };
