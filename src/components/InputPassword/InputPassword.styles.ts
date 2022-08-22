import styled, { keyframes } from 'styled-components';

import { Button } from 'atoms/Button';

const shake = keyframes`
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Input = styled('input')`
  border-radius: 2px;
  border: 1px solid var(--gray);
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  width: 100%;

  &:focus {
    border-color: var(--proton-blue);
  }

  &.invalid {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    border-color: var(--red);
    color: var(--red);
    transform: translate3d(0, 0, 0);
  }
`;

const Container = styled('div')`
  position: relative;
  width: 100%;
`;

const TogglePassword = styled(Button)`
  position: absolute;
  right: 0;
`;

export const Styles = { Input, Container, TogglePassword };
