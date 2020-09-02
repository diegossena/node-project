import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 32px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
  .login {
    padding: 5px 3px;
    margin-top: 10px;
    border-radius: 5px;
    width: 300px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
