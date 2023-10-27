import * as Styled from './styles';

export type CardContainerProps = {
  title?: string;
};

export const CardContainer = ({ title }: CardContainerProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
