import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LessonHeader = styled.div`
  display: flex;
  min-width: 150px;
  justify-content: space-between;
`
export const Lesson = styled.div`
  width: 100%;
  border: 1px solid lightgreen;
  padding: 5px;
  margin: 4px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TinyBtn = styled.button`
  padding: 4px 6px;
  cursor: pointer;
  color: lightgreen;
  background-color: transparent;
  transition: 150ms ease-in-out;
  border: none;
  text-align: center;
  
  :hover {
    background-color: lightgreen;
    color: black;
  }
`

export const TinyLink = styled(Link)`
  padding: 4px 6px;
  margin: 2px;
  cursor: pointer;
  color: lightgreen;
  background-color: transparent;
  transition: 150ms ease-in-out;
  border: none;
  text-decoration: none;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`