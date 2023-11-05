import styled, { css } from 'styled-components';

const gridType = {
  portfolio: (theme) => css`
    grid-template-areas: 'cardUp cardRight cardRight cardDown'
                         'cardUp cardLeft cardLeft cardDown';
`,

  dev: (theme) => css`
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'cardLeft cardLeft cardUp '
                         'cardRight cardRight cardUp ';
`,

  games: (theme) => css`
    display: flex;
    /* grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'cardUp cardDown cardUp '
                         'cardUp cardDown cardUp '; */
`,

  art: (theme) => css`
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 'cardUp cardUp cardUp cardUp'
                         'cardLeft cardLeft cardRight cardRight';
`,

  books: (theme) => css`
    display: flex;
    flex-direction: column;
`,
};

export const CardContainer = styled.div`
${({ className, theme }) => css`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  padding: 2rem;
  align-items: flex;
  justify-content: flex;
  gap: 2rem;

  ${gridType[className](theme)}
  border: 3px solid blue;

  @media ${theme.media.lteMedium} {
    display: flex;
  }
`}
`;
