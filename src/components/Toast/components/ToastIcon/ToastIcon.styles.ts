import styled, { keyframes } from 'styled-components';

const StatusWrapper = styled('div')`
  position: absolute;
`;

const IndicatorWrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;

const enter = keyframes`
  from {
    opacity: 0.4;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
}`;

const AnimatedIconWrapper = styled('div')`
  animation: ${enter} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  min-width: 20px;
  opacity: 0.4;
  position: relative;
  transform: scale(0.6);
`;

export const Styles = { AnimatedIconWrapper, IndicatorWrapper, StatusWrapper };
