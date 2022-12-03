import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeScreenContainer = styled.div`
  min-height: 90vh;
  margin: 0px;
  width: 100%;
  background: linear-gradient(black, #202020);
  `

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 30px;
  margin: auto;
  color: white;
  border: 1px solid red;

  @media (max-width: 700px) {
    width: 90%;
  }
`