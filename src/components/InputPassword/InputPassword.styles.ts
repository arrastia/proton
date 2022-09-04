import styled from 'styled-components';

import { ButtonStyles } from 'atoms/Button';
import { VisibilityIcon } from './components/VisibilityIcon';
import { Input } from 'atoms/Input';

const Container = styled('div')`
  align-items: center;
  background: ${({ theme: { themeBasedColors } }) => themeBasedColors.background};
  border: 1px solid;
  border-color: ${({ theme: { themeBasedColors } }) => themeBasedColors.divider};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  display: flex;
  position: relative;
  transition: border-color 100ms ease-in-out;

  &:focus-within {
    border-color: ${({ theme: { corporateColors } }) => corporateColors.purple};
    transition: border-color 100ms ease-in-out;
  }
`;

const PasswordInput = styled(Input)`
  border: none;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

const EyeButton = styled(VisibilityIcon)`
  /* position: absolute;
  right: 0.5rem; */
`;

const TogglePassword = styled(ButtonStyles)`
  /* position: absolute;
  right: 0.5rem; */
`;

export const Styles = { Container, EyeButton, TogglePassword, PasswordInput };
