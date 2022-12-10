import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  min-height: 90vh;
  margin: 0px;
  width: 100%;
  background: linear-gradient(black, #202020);
  overflow-y: scroll;
  align-items: center;
  transition: 150ms ease-in-out;
`

export const BackBtn = styled(Link)`
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

export const InfoContainer = styled.div`
  width: 80%;
  margin: 10px auto;
  color: white;
  display: flex;
  flex-direction: column;
`
export const InfoContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
//here
export const BtnContainer = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
`
export const Btn = styled.button`
  padding: 5px;
  border: none;
  color: lightgreen;
  background-color: transparent;
  cursor: pointer;
  margin: 5px;
  transition: 150ms ease-in-out;

  :hover {
    color: black;
    background-color: lightgreen;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 5px;
`
//here
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

export const SectionBtn = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
//here
export const LessonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`
//here
export const LessonHeader = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
`
//here
export const Lesson = styled.div`
  padding: 5px;
  margin: 2px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
//here - leave
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

export const DeleteBtn = styled.button`
  padding: 15px;
  margin: 0 auto;
  background-color: transparent;
  color: red;
  cursor: pointer;
  border: 1px solid red;
  transition: 150ms ease-in-out;
  border-radius: 4px;

  :hover {
    color: white;
    background-color: red;
  }
`