import * as Styled from './styles';

export type BioListProps = {
  title?: string;
};

export const BioList = ({ title }: BioListProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
