import * as Styled from './styles';

export type CardContainerProps = {
  title?: string;
};

export const CardContainer = ({ title }: CardContainerProps) => {
  return (
    <Styled.CardContainer>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.CardContainer>
  );
};
