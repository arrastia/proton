import styled, { keyframes } from 'styled-components';

import type { CheckMarkTheme } from './@types/CheckMarkIcon.types';

const circleAnimation = keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`;

const checkMarkAnimation = keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`;

const CheckMarkIcon = styled('div')<CheckMarkTheme>`
  animation: ${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: 100ms;
  background: ${p => p.primary || '#61d345'};
  border-radius: 10px;
  height: 20px;
  opacity: 0;
  position: relative;
  transform: rotate(45deg);
  width: 20px;

  &:after {
    content: '';
    animation: ${checkMarkAnimation} 0.2s ease-out forwards;
    animation-delay: 200ms;
    border-bottom: 2px solid;
    border-color: ${p => p.secondary || '#fff'};
    border-right: 2px solid;
    bottom: 6px;
    box-sizing: border-box;
    height: 10px;
    left: 6px;
    opacity: 0;
    position: absolute;
    width: 6px;
  }
`;

export const Styles = { CheckMarkIcon };
