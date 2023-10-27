import * as Styled from './styles';

export type BioListProps = {
  title?: string;
  list: string[];
};

export const BioList = ({ title, list }: BioListProps) => {
  return (
    <Styled.Wrapper>
      {title}
      <Styled.List>{list}</Styled.List>
    </Styled.Wrapper>
  );
};
