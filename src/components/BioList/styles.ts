import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
  color: ${theme.colors.primary};
  `}
`;

export const List = styled.li`
  ${({ theme }) => css`
  list-style: square;
  font-size: ${theme.font.sizes.medium};
  `}
`;
