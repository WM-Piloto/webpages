import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
  color: ${theme.colors.darkerGray};
  `}
`;

export const List = styled.li`
  ${({ theme }) => css``}
`;
