import { css, keyframes } from 'styled-components';

import { prefersReducedMotion } from 'utils/AnimationUtils';

import type { CSSProperties } from 'react';
import type { ToastPosition } from '../@types/Toast.types';

const enterAnimation = (factor: number) => keyframes`
  0% {
    opacity: 0.5;
    transform: translate3d(0,${factor * -200}%,0) scale(.6);
  }
  100% {
    opacity: 1;
    transform: translate3d(0,0,0) scale(1);
  }
`;

const exitAnimation = (factor: number) => keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0,0,-1px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate3d(0,${factor * -150}%,-1px) scale(.6);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  } 
  100% {
    opacity: 0;
  }
`;

export const getAnimationStyle = (position: ToastPosition, isVisible: boolean): CSSProperties => {
  const top = position.includes('top');
  const factor = top ? 1 : -1;

  const [enter, exit] = prefersReducedMotion() ? [fadeInAnimation, fadeOutAnimation] : [enterAnimation(factor), exitAnimation(factor)];

  // const animation = css`
  //   animation: isVisible ? ${enter} 0.35s cubic-bezier(.21,1.02,.73,1) forwards : ${exit} 0.4s forwards cubic-bezier(.06,.71,.55,1)
  // `;

  const visibleAnimation = css`
    animation: ${enter} 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
  `;

  const hiddenAnimation = css`
    animation: ${exit} 0.4s forwards cubic-bezier(0.06, 0.71, 0.55, 1);
  `;

  return {};
};
