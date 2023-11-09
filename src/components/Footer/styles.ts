import styled, { css } from 'styled-components';
import { Container as HtmlContentStyles } from '../HtmlContent/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    /* display: table; */
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    ${HtmlContentStyles} {
      a {
        color: ${theme.colors.primary};
        text-decoration: none;
      }

      a:hover {
        color: blue;
      }

    }
  `}
`;

export const SocialMedia = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.darkerGray};

  `}
`;
