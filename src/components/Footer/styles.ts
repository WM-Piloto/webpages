import styled, { css } from 'styled-components';
import { Container as HtmlContentStyles } from '../HtmlContent/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
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
