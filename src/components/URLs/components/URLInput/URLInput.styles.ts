import styled from 'styled-components';

import { Button } from 'atoms/Button';

const Container = styled('div')`
  align-items: center;
  display: flex;
  position: relative;
  gap: 0.5rem;
`;

const AddButton = styled(Button)`
  padding: 0.75rem;
`;

export const Styles = { Container, AddButton };
