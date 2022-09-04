import styled from 'styled-components';

const Icon = styled('div')<{ size: number }>`
  cursor: pointer;
  height: ${({ size }) => `${size}px`};
  outline: none;
  overflow: hidden;
  width: ${({ size }) => `${size}px`};
`;

export const Styles = { Icon };
