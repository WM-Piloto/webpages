import * as Styled from './styles';

export type CardContainerProps = {
  title?: string;
};

export const CardContainer = ({ title }: CardContainerProps) => {
  return <Styled.Wrapper>{title}</Styled.Wrapper>;
};
