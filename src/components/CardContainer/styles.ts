import styled, { css } from 'styled-components';
import { Container as LogoLinkStyles } from '../LogoLink/styles';

const gridType = {
  portfolio: (theme) => css`
    grid-template-areas: 'cardUp cardRight cardRight cardDown'
                         'cardUp cardLeft cardLeft cardDown';

    ${LogoLinkStyles} img {
      border-radius: 10%;
      transition: all 300ms ease-in-out;
    }

    .cardRight {

      img {
        filter: grayscale(100%);
      }

      &:hover img {
        filter: grayscale(0%);
      }

      img:hover {
        border-radius: 50%;
        filter: brightness(110%);
      }


      @media ${theme.media.lteMedium} {
        flex-direction: column-reverse;
        img {
          margin: 3rem auto auto auto;
        }

      }

    }

    .cardLeft {
      img:hover {
        border-radius: 50%;
        opacity: 80%;
        filter: contrast(150%)

      }

      p {}
      @media ${theme.media.lteMedium} {
        flex-direction: column;
        img {
          margin: auto auto 3rem auto;
        }

      }

    }

    .cardUp {
      img:hover {
        border-radius: 50%;
        opacity: 80%;
        filter: saturate(150%);
      }
    }

    .cardDown {
      img:hover {
        border-radius: 50%;
        opacity: 80%;
        filter: sepia(150%);
      }

      p span {
        transition: all 800ms ease-in-out;
      }

      &:hover p span {
        color: red;
        text-shadow: 2px 2px 2px #000000;
      }


    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;

    }

`,

  dev: (theme) => css`
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'cardLeft cardLeft cardUp '
                         'cardRight cardRight cardUp ';


    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
    }

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
    ${LogoLinkStyles} {
      img {

      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
    }

`,

  books: (theme) => css`
    display: flex;
    flex-direction: column;
    ${LogoLinkStyles} {
      img {

      }
    }
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

  @media ${theme.media.lteMedium} {
    display: flex;
    min-width: 32rem;
  }
`}
`;
