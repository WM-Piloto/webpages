import * as Styled from './styles';

export type BioListProps = {
  title?: string;
  list: string[];
};

export const ListIt = (list) => {
  return (
    <Styled.Wrapper>
      {list.map((employee, index) => {
        return <Styled.List key={index}>{employee}</Styled.List>;
      })}
    </Styled.Wrapper>
  );
};

export const BioList = ({ title, list }: BioListProps) => {
  return (
    <Styled.Wrapper>
      {title}
      {ListIt(list)}
    </Styled.Wrapper>
  );
};
