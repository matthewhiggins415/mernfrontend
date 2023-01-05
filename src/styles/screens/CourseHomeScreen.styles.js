import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Screen = styled.div`
  min-height: 90vh;
  height: auto;
  background: linear-gradient(black, #202020);
  padding: 20px;
  color: white;
`

export const BackBtn = styled(Link)`
display: block;
  width: 60px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  margin-bottom: 50px;
`

export const Container = styled.div`
  height: auto;
  width: 90%;
  margin: 20px auto;
`

export const InfoContainer = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Title = styled.h1`
  margin-top: 15px;
`

export const Description = styled.p`
  margin: 15px 0;
`

export const BuyBtn = styled(Link)`
  width: 300px;
  padding: 10px;
  margin: 15px auto;
  border: 3px solid lightgreen;
  border-radius: 10px;
  background-color: transparent;
  color: lightgreen;
  font-size: 30px;
  cursor: pointer;
  transition: 150ms ease-in-out;
  text-align: center;
  text-decoration: none;

  :hover {
    color: black;
    background-color: lightgreen;
  }
`