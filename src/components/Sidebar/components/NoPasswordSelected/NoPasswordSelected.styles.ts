import styled from 'styled-components';

const NoPasswordSelectedContainer = styled('p')`
  color: ${({ theme: { themeBasedColors } }) => themeBasedColors.text};
  font-size: 1.2rem;
  font-weight: 500;
  margin: auto;
`;

export const Styles = { NoPasswordSelectedContainer };
