import styled from 'styled-components';

const Thumbnail = styled('div')`
  background: linear-gradient(122.32deg, #6d4aff 30.66%, #31d1d0 93.8%);
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
