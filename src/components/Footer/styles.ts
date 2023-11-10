import styled, { css } from 'styled-components';
import { Container as HtmlContentStyles } from '../HtmlContent/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: flex;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    ${HtmlContentStyles} {
      a {
        color: ${theme.colors.primary};
        text-decoration: none;
        margin-right: 10rem;
        display: block;

        @media ${theme.media.lteMedium} {
        margin: auto;
      }

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
    margin-right: 2rem;

    .linkedin {
      color: #0a66c2;
      min-width: 4rem;
      min-height: 4rem;

    }

    .instagram {
      color: #c32aa3;
      min-width: 5rem;
      min-height: 5rem;

    }

    .twitter {
      color: #1da1f2;
      min-width: 5rem;
      min-height: 5rem;

    }

    @media ${theme.media.lteMedium} {
        margin: auto;
      }


  `}
`;
