import styled from 'styled-components';

const ListItem = styled('li')<{ isClickable?: boolean; isSelected?: boolean }>`
  padding: 16px 32px;
  cursor: pointer;
  background: ${({ isSelected, theme: { themeBasedColors } }) => (isSelected ? themeBasedColors.glass : 'transparent')};

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-color: ${({ theme: { themeBasedColors } }) => themeBasedColors.divider};
  }

  &:hover {
    background: ${({ theme: { themeBasedColors } }) => themeBasedColors.glass};
  }

  &:focus {
    outline: none;
    background: var(--focus);
  }
`;

export const Styles = { ListItem };
