import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';
import { Card } from 'components/Card';
import { HtmlContent } from 'components/HtmlContent';

export type Cards = {
  id: string;
  cardName: string;
  cardLogo: string;
  cardText: string;
  className?: 'cardRight' | 'cardDown' | 'cardLeft' | 'cardUp';
};

export type CardContainerProps = {
  className: 'portfolio' | 'games' | 'art' | 'books';
  cardList: Cards[];
};

export const CardContainer = ({
  cardList,
  className = 'portfolio',
}: CardContainerProps) => {
  return (
    <Styled.CardContainer className={className}>
      {cardList.map((card) => (
        <Card key={card.id} className={card.className}>
          <LogoLink link="/" text={card.cardName} srcImg={card.cardLogo} />
          <HtmlContent html={card.cardText} />
        </Card>
      ))}
    </Styled.CardContainer>
  );
};
