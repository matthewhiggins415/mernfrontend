import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const RegisterScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(black, #202020);
`

export const H2 = styled.h2`
  margin-bottom: 15px; 
  color: white;
  letter-spacing: 2px;
  font-size: 35px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const PricingLink = styled(Link)`
  position: absolute;
  bottom: 30px;
  width: 40%; 
  border-radius: 15px;
  border: none;
  outline: none;
  text-decoration: none;
  letter-spacing: 1.5px;
  font-size: 20px;
  border: 2px solid lightgreen;
  background-color: transparent;
  color: lightgreen;
  padding: 15px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 200ms;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`