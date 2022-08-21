import styled from 'styled-components';

export const Input = styled('input')`
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  padding: 0.5rem 1rem;

  &:focus {
    border-color: var(--proton-blue);
  }
`;
