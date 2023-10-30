import styled, { css } from 'styled-components';
import { Container as LogoLinkStyles } from '../LogoLink/styles';

const cardType = {
  cardRight: (theme) => css`
    flex-direction: row-reverse;
    ${LogoLinkStyles} {
    img {
      margin-left: 3rem;
    }
  }
  `,

  cardDown: (theme) => css`
    flex-direction: column-reverse;
    ${LogoLinkStyles} {
    img {
      margin-top: 3rem;
    }
  }
`,

  cardLeft: (theme) => css`
    flex-direction: row;
    ${LogoLinkStyles} {
    img {
      margin-right: 3rem;
    }
  }
`,

  cardUp: (theme) => css`
    flex-direction: column;
    ${LogoLinkStyles} {
    img {
      margin-bottom: 3rem;
    }
  }
`,
};

export const Wrapper = styled.div`
  ${({ theme, className }) => css`
  display: flex;
  border: 0.5rem dashed ${theme.colors.darkerGray};
  margin: auto;
  padding: 3rem;
  font-size: ${theme.font.sizes.medium};
  align-items: center;
  justify-content: center;
  overflow: auto;
  ${cardType[className](theme)};s

  ${LogoLinkStyles} {
    img {
      width: auto;
      height: auto;
    }
  }



  `}
`;
