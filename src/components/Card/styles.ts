import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  display: flex;
  `}
`;

export const CardLeft = styled.div`
  ${({ theme }) => css`
  display: flex;
  border: 2rem dashed ${theme.colors.darkerGray};
  flex-direction: row;
  `}
`;

export const CardRight = styled.div`
  ${({ theme }) => css`
  display: flex;
  border: 2rem dashed ${theme.colors.darkerGray};
  flex-direction: row-reverse;
  `}
`;

export const CardUp = styled.div`
  ${({ theme }) => css`
  display: flex;
  border: 2rem dashed ${theme.colors.darkerGray};
  flex-direction: column;
  `}
`;

export const CardDown = styled.div`
  ${({ theme }) => css`
  display: flex;
  border: 2rem dashed ${theme.colors.darkerGray};
  flex-direction: column-reverse;
  `}
`;
