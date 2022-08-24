import styled from 'styled-components';

export const TextareaStyles = styled('textarea')`
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  padding: 0.75rem 1rem;
  resize: none;
  width: 100%;

  &:focus {
    border-color: var(--proton-blue);
  }
`;
