import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  border: 2px solid lightgreen;
  border-radius: 5px;
  margin: 10px 0px;
  align-items: center;
  cursor: pointer;
  max-width: 200px;
  min-height: 60%;
  text-decoration: none;
`

export const H2 = styled.h2`
  color: white;
`

export const EditBtn = styled.button`
  border: 1px solid lightgreen;
  border-radius: 10px;
  padding: 10px;
  color: lightgreen;
  background-color: transparent;
  cursor: pointer;
  transition: 150ms ease-in-out;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`

export const Button = styled.button`
  width: 80%;
  margin: 0 auto;
  padding: 5px auto;
  color: white;
  background-color: transparent;
  border: 2px solid lightgreen;
  cursor: pointer;
  font-size: 30px;
  border-radius: 10px;
  text-decoration: none;
`
