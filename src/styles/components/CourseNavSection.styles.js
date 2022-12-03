import styled from 'styled-components';
import { Link } from 'react-router-dom';

// this is the container for sections within the course navbar
export const CourseSectionContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, .1);
  padding: 10px;
  margin-top: 10px;
`

// this is where we will make the section expand to show lesson container . 
export const CourseSectionContainerHeader = styled.div`
  height: auto;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CourseSectionHeaderNavBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  color: white;
  transition: 150ms ease-in-out;
  :hover {
    color: lightgreen;
  }
`

export const CourseSectionHeaderTitle = styled.h4`
  color: white;
`

export const CourseSectionLessonsContainer = styled.div`
  display: ${(props) => (props.sectionNavActive ? "flex" : "none")};
  height: auto;
  width: 100%;
  flex-direction: column;
  background-color: transparent;
`

export const LessonContainer = styled.div`
  padding: 10%;
  width: 100%;
  height: auto;
  color: white;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  transition: 150ms ease-in-out;

  :hover {
    color: lightgreen;
  }
`