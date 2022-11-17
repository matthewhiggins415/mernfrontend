import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  padding-top: 80px;
  width: 100%;
  background: linear-gradient(black, #202020);
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const H1 = styled.h1`
  color: white;
`

export const CourseContainer = styled.div`
  background-color: transparent;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 90vh;
  margin: 0 auto;
`

export const NewCourseBtn = styled.button`
  width: 100px;
  padding: 15px 25px;
  background-color: transparent;
  border: 1px solid lightgreen;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
  color: lightgreen;
  transition: 150ms ease-in-out;

  :hover {
    color: black;
    background-color: lightgreen;
  }
`

export const CourseHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`