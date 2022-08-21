import styled, { keyframes } from 'styled-components';

import type { ErrorTheme } from './@types/ErrorIcon.types';

const circleAnimation = keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`;

const firstLineAnimation = keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`;

const secondLineAnimation = keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`;

const ErrorIcon = styled('div')<ErrorTheme>`
  animation: ${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: 100ms;
  background: ${p => p.primary || '#ff4b4b'};
  border-radius: 10px;
  height: 20px;
  opacity: 0;
  position: relative;
  transform: rotate(45deg);
  width: 20px;

  &:after,
  &:before {
    content: '';
    animation: ${firstLineAnimation} 0.15s ease-out forwards;
    animation-delay: 150ms;
    background: ${p => p.secondary || '#fff'};
    border-radius: 3px;
    bottom: 9px;
    height: 2px;
    left: 4px;
    opacity: 0;
    position: absolute;
    width: 12px;
  }

  &:before {
    animation: ${secondLineAnimation} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;

export const Styles = { ErrorIcon };
