import styled from 'styled-components';

import { ButtonStyles } from 'atoms/Button';

const Container = styled('div')`
  align-items: center;
  display: flex;
  position: relative;
`;

const TogglePassword = styled(ButtonStyles)`
  position: absolute;
  right: 0.5rem;
`;

export const Styles = { Container, TogglePassword };
