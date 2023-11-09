import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';
import { HtmlContent } from 'components/HtmlContent';

export type CardProps = {
  cardName: string;
  cardLogo: string;
  cardText: string;
  cardLink: string;
  className?: 'cardRight' | 'cardDown' | 'cardLeft' | 'cardUp';
};

export const Card = ({
  cardName,
  cardLogo,
  cardText,
  cardLink = '/',
  className = 'cardLeft',
}: CardProps) => {
  return (
    <Styled.Wrapper className={className}>
      <LogoLink link={cardLink} text={cardName} srcImg={cardLogo} />
      <HtmlContent html={cardText} />
    </Styled.Wrapper>
  );
};
