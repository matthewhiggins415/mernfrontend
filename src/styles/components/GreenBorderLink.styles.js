import styled from "styled-components";
import { Link } from 'react-router-dom'

export const GreenBorderLink = styled(Link)`
  border: 2px solid lightgreen;
  padding: 15px;
  border-radius: 15px;
  color: white;
  text-decoration: none;
  letter-spacing: 1.5px;
  width: 80%;
  text-align: center;
  cursor: pointer;
  transition: 150ms ease-in-out;
  font-weight: 600;
  font-size: 20px;

  :hover {
    background-color: lightgreen;
    color: black;
  }
` 