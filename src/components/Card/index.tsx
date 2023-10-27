import * as Styled from './styles';

export type CardProps = {
  title?: string;
};

export const Card = ({ title }: CardProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
