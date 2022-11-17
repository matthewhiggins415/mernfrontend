import styled from 'styled-components'
import { Link } from 'react-router-dom'
  
export const Container = styled.div`
  width: 100%;
  padding: 20px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  color: white;
  background-color: transparent;
  border: 2px solid lightgreen;
`

export const EditLink = styled(Link)`
  color: lightgreen;
  text-decoration: none;
  cursor: pointer;
`
