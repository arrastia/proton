import styled from 'styled-components';

import { shake } from 'styles/animations/shake';

export const InputStyles = styled('input')<{ isInvalid?: boolean }>`
  background-color: white;
  border-radius: 10px;
  border: 1px solid var(--gray);
  font-size: 1.2rem;
  /* font-size: 14px; */
  opacity: 0.8;
  outline: none;
  padding-right: 3rem;
  padding: 0.75rem 1rem;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    opacity: 1;
  }

  .isInvalid {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    border-color: var(--red);
    color: var(--red);
    transform: translate3d(0, 0, 0);
  }
`;
