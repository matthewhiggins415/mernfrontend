import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border: 2px solid lightgreen;
  border-radius: 5px;
  margin: 10px 0px;
  align-items: center;
`

export const H2 = styled.h2`
  color: white;
`

export const EditBtn = styled.button`
  border: 1px solid lightgreen;
  border-radius: 10px;
  padding: 10px;
  color: lightgreen;
  background-color: transparent;
  cursor: pointer;
  transition: 150ms ease-in-out;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`