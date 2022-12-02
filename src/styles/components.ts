import styled, { css } from 'styled-components'

interface I_DividerProps {
  h?: number

  decorated?: boolean
}

export const Divider = styled.div<I_DividerProps>`
  position: relative;
  height: ${({ h = 16 }) => h}px;

  ${({ decorated }) =>
    decorated &&
    css`
      &::before {
        content: '';

        position: absolute;
        top: 50%;

        height: 1px;
        width: 100%;
        background-color: #4e4c4d;
      }
    `}
`
