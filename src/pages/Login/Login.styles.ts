import styled from 'styled-components';

const Container = styled('div')`
  align-items: center;
  align-self: center;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgb(255 255 255 / 31%);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: fit-content;
  justify-content: start;
  margin: auto;
  max-height: max-content;
  max-width: 1080px;
  overflow: hidden;
  padding: 3rem;
  position: relative;
  transition: all 300ms ease-in-out;
  user-select: none;
  width: fit-content;
  -webkit-backdrop-filter: blur(20px);
`;

const Form = styled('form')`
  align-items: stretch;
  align-self: center;
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
