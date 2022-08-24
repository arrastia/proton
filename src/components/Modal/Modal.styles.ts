import styled, { css } from 'styled-components';

import { fade } from 'styles/animations/fade';
import { zoom } from 'styles/animations/zoom';

const sizes = css`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const ButtonWrapper = styled('span')`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 0.5rem;
  }
`;

const CloseButton = styled('button')`
  cursor: pointer;
  height: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1rem;

  &:before,
  &:after {
    background: #999;
    border-radius: 100%;
    content: '';
    height: 2px;
    left: 0;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    transition: background 0.2s;
    width: 100%;
    -webkit-transition: background 0.2s;
  }

  &:before {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  &:hover:before,
  &:hover:after {
    background: #333;
  }
`;

const Content = styled('div')`
  flex-grow: 1;
`;

const Mask = styled('div')`
  ${sizes}
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
`;

const Modal = styled('div')<{ animationStatus: 'enter' | 'leave' }>`
  ${sizes}
  position: fixed;
  animation: ${({ animationStatus }) =>
    css`
      ${fade[animationStatus]} both ${animationStatus === 'enter' ? 'ease-in' : 'ease-out'}
    `};

  animation-duration: 300ms;
  -webkit-animation-duration: 300ms;
`;

const Footer = styled('div')`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  &.leftSideFooter {
    justify-content: space-between;
  }
`;

const Title = styled('h3')`
  .title {
    // border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;

const Dialog = styled('div')<{ animationStatus: 'enter' | 'leave' }>`
  backdrop-filter: blur(100px);
  border-radius: 10px;
  bottom: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.21), 0 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: fit-content;
  left: 0;
  margin: auto;
  /* padding: 2.5rem; */
  position: absolute;
  right: 0;
  top: 0;
  min-width: 500px;
  width: fit-content;
  z-index: 101;
  background: white;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);

  padding: 1rem;

  animation: ${({ animationStatus }) =>
    css`
      ${zoom[animationStatus]} both ${animationStatus === 'enter' ? 'cubic-bezier(0.4, 0, 0, 1.5)' : ''}
    `};

  animation-duration: 300ms;
  -webkit-animation-duration: 300ms;

  &:focus {
    outline: none;
  }
`;

export const Styles = { ButtonWrapper, CloseButton, Content, Dialog, Footer, Mask, Modal, Title };
