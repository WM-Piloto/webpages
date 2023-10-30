import styled, { css } from 'styled-components';

const cardType = {
  cardRight: (theme) => css`
    display: flex;
    border: 0.5rem dashed ${theme.colors.darkerGray};
    flex-direction: row-reverse;
  `,

  cardDown: (theme) => css`
    display: flex;
    border: 0.5rem dashed ${theme.colors.darkerGray};
    flex-direction: column;
`,

  cardLeft: (theme) => css`
    display: flex;
    border: 0.5rem dashed ${theme.colors.darkerGray};
    flex-direction: row;
`,

  cardUp: (theme) => css`
    display: flex;
    border: 0.5rem dashed ${theme.colors.darkerGray};
    flex-direction: column-reverse;
`,
};

export const Wrapper = styled.div`
  ${({ theme, className }) => css`
  ${cardType[className](theme)};

  `}
`;
