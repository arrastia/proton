import styled from 'styled-components';

const Product = styled('img')`
  cursor: pointer;
  height: 50px;
  width: 50px;
  transition: 150ms transform ease-in;

  &:hover {
    transform: scale(1.1);
    transition: 150ms transform ease-out;
  }

  &:active {
    transform: scale(0.9);
    transition: 150ms transform ease-in;
  }
`;

const Products = styled('footer')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  gap: 3rem;
  width: 100%;
  position: absolute;
  bottom: 3rem;
  left: 0;
`;

export const Styles = { Product, Products };
