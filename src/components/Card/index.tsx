import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';
import { HtmlContent } from 'components/HtmlContent';

export type CardProps = {
  cardName: string;
  cardLogo: string;
  cardText: string;
};

export const Card = ({ cardName, cardLogo, cardText }: CardProps) => {
  return (
    <Styled.Wrapper className="CardLeft">
      <LogoLink link="/" text={cardName} srcImg={cardLogo} />
      <HtmlContent html={cardText} />
    </Styled.Wrapper>
  );
};
