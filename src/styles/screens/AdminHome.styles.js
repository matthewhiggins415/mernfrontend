import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  background: linear-gradient(black, #202020);
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const CourseContainer = styled.div`
  background-color: transparent;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 90%;
  height: 90%;
`

export const NewCourseBtn = styled.button`
  width: 100px;
  padding: 15px 25px;
  background-color: lightgreen;
  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 20px 0px;
`