import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(black, #202020);
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  width: 80%;
  margin: 10px auto;
  color: white;
  padding: 20px;
  background-color: purple;
  display: flex;
  flex-direction: column;
`
export const InfoContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const LessonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: white;
  margin: 0 auto;
  width: 90vw;
  background-color: purple;
`

export const Lesson = styled.div`
  width: 90%;
  margin: 15px auto;
  border: 1px solid lightgreen;
  padding: 10px;
  color: white;
`