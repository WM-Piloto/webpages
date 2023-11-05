import styled, { css } from 'styled-components';

const gridType = {
  portfolio: (theme) => css`
    grid-template-areas: 'cardUp cardRight cardRight cardDown'
                         'cardUp cardLeft cardLeft cardDown';
  `,

  games: (theme) => css`
      grid-template-areas: '';
`,

  art: (theme) => css`
      grid-template-areas: '';
`,

  books: (theme) => css`
      grid-template-areas: '';
`,
};

export const CardContainer = styled.div`
${({ className, theme }) => css`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${gridType[className](theme)}
  border: 3px solid blue;

  @media ${theme.media.lteMedium} {
    display: flex;
  }
`}
`;

// export const CardContainer = styled.div`
//   ${({ theme }) => css``}
// `;

// export const CardContainerRow = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//   `}
// `;

// export const CardContainerCol = styled.div`
//   ${({ theme }) => css`
//     flex: ${theme.sizes}
//   `}
// `;
