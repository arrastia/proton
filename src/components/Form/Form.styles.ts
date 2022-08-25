import styled from 'styled-components';

const ActionButtons = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Form = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Group = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Styles = { ActionButtons, Group, Form };
