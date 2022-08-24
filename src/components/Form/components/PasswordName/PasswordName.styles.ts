import styled from 'styled-components';

import { Input } from 'atoms/Input';

const Name = styled(Input)`
  border: none;
  border-radius: 0;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.75rem 0;

  &::placeholder {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export const Styles = { Name };
