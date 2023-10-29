import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  display: flex;
  border: 2rem dotted ${theme.colors.darkerGray};

  .CardLeft {
    flex-flow: row;
  }

  .CardRight {
    flex-flow: row-reverse;
}

  .CardUp {
    flex-flow: column;
}

  .CardDown {
    flex-flow: column-reverse;
}
  `}
`;
