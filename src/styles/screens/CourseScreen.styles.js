import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScreenContainer = styled.div`
  min-height: 90vh;
  width: 100vw;
  width: 100%;
  margin: 0;
  background: linear-gradient(black, #202020);
`

//learning container will have the learning portal and the collapsable nav for the course within it. 
export const LearningContainer = styled.div`
  min-width: 95vw;
  height: 95vh;
  display: flex;
  margin: 0 auto; 
  background-color: green;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    //height should be auto eod
  }

`

// Learning portal is where video and resources will live within column 
export const LearningPortal = styled.div`
  display: flex;
  flex-direction: column; 
  width: 80%;
  background-color: purple;
  min-height: 600px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const CourseNavigation = styled.div`
  width: ${(props) => (props.courseNavActive ? "20%" : "5%")};
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const CourseNavigationNav = styled.div`
  display: flex;
  width: 100%;
  min-height: 20px; 
  background-color: gray;
`

export const CourseNavCollapseBtn = styled.button`
  padding: 5px; 
  cursor: pointer; 
`

export const CourseNavTitle = styled.h2`
  display: ${(props) => (props.courseNavActive ? "block" : "none")};
  color: black;
`

// this is where all the sections will live 
// display should be none when not active 
export const CourseNavigationContainer = styled.div`
  display: ${(props) => (props.courseNavActive ? "block" : "none")};
  background-color: black;
  width: 90%;
  margin: 0 auto;
  height: 100%;
`

export const VideoContainer = styled.div`
  height: 70%;
  background: yellow;
  width: 100%;
`

//this is where resources for lesson will live - has a navigation bar and container with respective info. 
export const ResourceContainer = styled.div`
  min-height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column; 
  background-color: blue;
`