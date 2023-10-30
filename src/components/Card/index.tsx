import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';
import { HtmlContent } from 'components/HtmlContent';
import { CardContainer } from 'components/CardContainer';

export type CardProps = {
  cardName: string;
  cardLogo: string;
  cardText: string;
  className: 'cardRight' | 'cardDown' | 'cardLeft' | 'cardUp';
};

export const Card = ({
  cardName,
  cardLogo,
  cardText,
  className = 'cardLeft',
}: CardProps) => {
  return (
    <Styled.Wrapper className={className}>
      <LogoLink link="/" text={cardName} srcImg={cardLogo} />
      <HtmlContent html={cardText} />
    </Styled.Wrapper>
  );
};
