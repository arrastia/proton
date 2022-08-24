import styled from 'styled-components';

import type { ButtonAppearance } from './@types/Button.types';

export const ButtonStyles = styled('button')<{ appearance?: ButtonAppearance }>`
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--proton-blue);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: space-around;
  margin: 0;
  opacity: 0.85;
  overflow: visible;
  padding: 0.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s ease-out;
  user-select: none;

  /* font-weight: bolder; */

  -moz-border-radius: 10px;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -moz-user-select: none;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-border-radius: 10px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-user-select: none;

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease-in;
  }

  &:hover {
    opacity: 1;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.light {
    background: var(--white);
    color: var(--proton-blue);
  }

  &.default:hover {
    background: var(--hover);
  }

  &.primary {
    background: var(--proton-blue);
    color: var(--white);
  }

  &.glass {
    background-color: rgb(255 255 255 / 31%);
    box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56);
    backdrop-filter: saturate(180%) blur(20px);
    border: none;
  }
`;
