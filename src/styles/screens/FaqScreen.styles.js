import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 90vh;
  background-color: black;
  display: flex;
  padding: 20px;
  flex-direction: column;
`

export const H1 = styled.h1`
  margin: 0 auto;
  color: white;
  letter-spacing: 1.8px;
  font-size: 40px;
  margin-bottom: 20px;
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 20px auto;
  width: 100%;

  @media (min-width: 700px) {
    width: 50%;
  }
`

export const Question = styled.h2`
  color: lightgreen;
`

export const Answer = styled.h3`
  color: white;
`

export const GreenLink = styled(Link)`
  border: 2px solid lightgreen;
  background-color: black;
  position: fixed;
  left: calc(100vw / 3);
  bottom: 30px;
  padding: 15px;
  border-radius: 15px;
  color: white;
  text-decoration: none;
  letter-spacing: 1.5px;
  width: 50vw;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  transition: 150ms ease-in-out;
  font-weight: 600;
  font-size: 20px;
  transition: 150ms ease-in-out;

  :hover {
    background-color: lightgreen;
    color: black;
  }

  @media (max-width: 700px) {
    left: calc(100vw / 4);
  }
`