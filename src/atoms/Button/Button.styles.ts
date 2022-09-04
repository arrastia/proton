import styled from 'styled-components';

import type { ButtonAppearance } from './@types/Button.types';

export const ButtonStyles = styled('button')<{ appearance?: ButtonAppearance }>`
  align-items: center;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: bolder;
  justify-content: space-around;
  margin: 0;
  opacity: 0.85;
  overflow: visible;
  padding: 0.65rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s ease-out;
  user-select: none;
  -moz-border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -moz-user-select: none;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-border-radius: ${({ theme: { borderRadius } }) => borderRadius};
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

  &.default:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &.primary {
    background: ${({ theme: { corporateColors } }) => corporateColors.purple};
    color: ${({ theme: { colors } }) => colors.white};
  }

  &.secondary {
    background: ${({ theme: { themeBasedColors } }) => themeBasedColors.glass};
    border: 1px solid;
    border-color: ${({ theme: { corporateColors } }) => corporateColors.purple};
    color: ${({ theme: { corporateColors } }) => corporateColors.purple};
  }

  &.gradient {
    background: ${({ theme: { corporateColors } }) => corporateColors.gradient};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
