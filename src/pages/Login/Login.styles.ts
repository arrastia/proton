import styled from 'styled-components';

const Container = styled('div')`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Form = styled('form')`
  align-items: stretch;
  align-self: center;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;

  & > * {
    margin: 0.5rem 0;
  }
`;

export const Styles = { Container, Form };
