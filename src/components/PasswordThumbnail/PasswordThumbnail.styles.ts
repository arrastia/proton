import styled from 'styled-components';

const Thumbnail = styled('div')`
  background-color: paleturquoise;
  border-radius: 10px;
  height: 4rem;
  width: 4rem;
`;

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Styles = { Thumbnail, Container };
