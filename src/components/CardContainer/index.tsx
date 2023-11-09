import * as Styled from './styles';
import { Card } from 'components/Card';

export type Cards = {
  id: string;
  cardName: string;
  cardLogo: string;
  cardText: string;
  cardLink: string;
  className?: 'cardRight' | 'cardDown' | 'cardLeft' | 'cardUp';
};

export type CardContainerProps = {
  className: 'portfolio' | 'games' | 'art' | 'books' | 'dev';
  cardList: Cards[];
};

export const CardContainer = ({
  cardList = [],
  className = 'portfolio',
}: CardContainerProps) => {
  return (
    <Styled.CardContainer className={className}>
      {cardList.map((card) => (
        <Card
          key={card.id}
          className={card.className}
          cardName={card.cardName}
          cardLogo={card.cardLogo}
          cardText={card.cardText}
          cardLink={card.cardLink}
        />
      ))}
    </Styled.CardContainer>
  );
};
