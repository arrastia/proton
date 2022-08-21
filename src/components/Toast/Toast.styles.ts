import styled from 'styled-components';

const Toast = styled('div')`
  .activeClass {
    z-index: 9999;

    > * {
      pointer-events: auto;
    }
  }
`;

export const Styles = { Toast };
