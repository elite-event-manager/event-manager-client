import styled from 'styled-components'

export const AppContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AppBox = styled.div`
  display: flex;

  width: min(600px, 100vw);
  height: min(900px, 100vh);
  padding: 64px;

  background-color: #2b2f31d1;
  backdrop-filter: blur(2px);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 30%) 7px -6px 2px -1px, rgb(0 0 0 / 30%) 0 0 8px 1px;

  @media (max-width: 1280px) {
    padding: 48px 24px;
    background-color: #2b2f31d1;
    border-radius: 0;
  }
`
