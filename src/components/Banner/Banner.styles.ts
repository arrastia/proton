import styled from 'styled-components';

const Banner = styled('div')`
  background: ${({ theme: { gradients } }) => gradients.secondary};
  border-radius: 10px;
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Styles = { Banner };
