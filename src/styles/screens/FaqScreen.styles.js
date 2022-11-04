import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
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