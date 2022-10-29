import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PricingScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: black;
  display: flex;
  background: linear-gradient(black, #202020);
`

export const H1 = styled.h1`
  text-align: center;
  color: lightgreen;
  letter-spacing: 1px;
`

export const H2 = styled.h2`
  color: white;
  margin-top: 20px;
`

export const PricingOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  text-align: center;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 20px;
  padding: 30px 15px;
`

export const PricingButton = styled.button`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid lightgreen;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 150ms ease-in-out;
  
  :hover {
    background-color: lightgreen;
    color: black;
  }
`

export const FaqLink = styled(Link)`
  display: block;
  color: lightgreen;
  cursor: pointer;
  text-decoration: none;
  margin-top: 30px;
  text-align: center;
`    