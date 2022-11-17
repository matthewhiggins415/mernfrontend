import styled from 'styled-components';
import { Link } from 'react-router-dom';

//here
export const LessonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin: 10px auto; 
`
//here
export const SectionBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid lightgreen;
`

//here
export const BtnContainer = styled.div`
  display: flex;
  background-color: transparent;
  align-items: end;
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