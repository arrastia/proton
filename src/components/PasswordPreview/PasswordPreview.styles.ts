import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PreviewHeader = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Styles = { Container, PreviewHeader };
