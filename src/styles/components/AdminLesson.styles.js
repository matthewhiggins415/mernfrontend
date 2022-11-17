import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LessonHeader = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
`
export const Lesson = styled.div`
  padding: 5px;
  margin: 2px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TinyBtn = styled.button`
  padding: 4px 6px;
  margin: 2px;
  cursor: pointer;
  color: lightgreen;
  background-color: transparent;
  transition: 150ms ease-in-out;
  border: none;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`