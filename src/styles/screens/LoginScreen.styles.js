import styled from 'styled-components';

export const LoginScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(black, #202020);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H2 = styled.h2`
  margin-bottom: 15px; 
  color: white;
  letter-spacing: 2px;
  font-size: 35px;
`

export const FormContainer = styled.div`
  width: fit-content;
  height: auto;
  padding: 25px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 20px;
`