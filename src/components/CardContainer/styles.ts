import styled, { css } from 'styled-components';

// export type CardContainerProps = {
//   format: '4x2' | '';
// };

// export const CardContainer = styled.div`
// ${({ theme }) => css`
//   display: grid;
//   grid-template-columns: auto auto auto auto;
//   grid-template-rows: auto auto;
//   border: 3px solid blue;

//   @media ${theme.media.lteMedium} {
//     display: flex;
//   }
// `}
// `;

export const CardContainer = styled.div`
  ${({ theme }) => css``}
`;

export const CardContainerRow = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`;

export const CardContainerCol = styled.div`
  ${({ theme }) => css`
    flex: ${theme.sizes}
  `}
`;
