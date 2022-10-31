import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PricingScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: black;
  padding: 30px;
  display: flex;
  background: linear-gradient(black, #202020);
`

export const H1 = styled.h1`
  text-align: center;
  color: lightgreen;
  margin-top: 20px;
  letter-spacing: 1px;
`

export const H2 = styled.h2`
  color: white;
  width: 90%;
  text-align: center;
  margin: 0px auto;
  margin-top: 20px;
  `

export const PricingOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  text-align: center;
  margin: 20px auto;
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

export const PricingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0px auto;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    margin: 0px auto;
    max-width: none;
  }
`