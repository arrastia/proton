import styled, { keyframes } from 'styled-components';
import { prefersReducedMotion } from 'utils/AnimationUtils';

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

const [enter, exit] = [enterAnimation(1), exitAnimation(1)];

const Message = styled('div')`
  color: inherit;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  margin: 4px 10px;
  white-space: pre-line;
`;

const ToastBarBase = styled('div')<{ isVisible: boolean }>`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  color: #363636;
  display: flex;
  line-height: 1.3;
  max-width: 350px;
  padding: 8px 10px;
  margin: 2rem;
  pointer-events: auto;
  will-change: transform;
  animation: ${({ isVisible }) => (isVisible ? enter : exit)};
  animation-duration: ${({ isVisible }) => (isVisible ? '0.35s' : '0.4s')};
  animation-fill-mode: forwards;
  animation-timing-function: ${({ isVisible }) => (isVisible ? 'cubic-bezier(0.21, 1.02, 0.73, 1)' : 'cubic-bezier(0.06, 0.71, 0.55, 1)')};
`;

export const Styles = { Message, ToastBarBase };
