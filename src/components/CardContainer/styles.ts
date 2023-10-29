import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(4) auto;
  grid-template-rows: auto auto;

  border: 3px solid blue;
  `}
`;
