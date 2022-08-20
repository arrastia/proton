import { keyframes } from 'styled-components';

const enter = keyframes`
  from {
    opacity: 0;
  }
`;

const leave = keyframes`
  to {
    opacity: 0;
  }
`;

export const fade = { enter, leave };
