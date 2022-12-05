import styled from 'styled-components';

export const ScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  margin: 0;
  background: linear-gradient(black, #202020);
`

//learning container will have the learning portal and the collapsable nav for the course within it. 
export const LearningContainer = styled.div`
  min-width: 95vw;
  min-height: 95vh;
  display: flex;
  margin: 0 auto; 
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    //height should be auto eod
  }

`

// Learning portal is where video and resources will live within column 
export const LearningPortal = styled.div`
  width: ${(props) => (props.courseNavActive ? "80%" : "100%")};
  display: flex;
  flex-direction: column; 
  background-color: transparent;
  min-height: 600px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const CourseNavigation = styled.div`
  width: ${(props) => (props.courseNavActive ? "20%" : "auto")};
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
// --------------------------------------------- course navigation styling ------------------------------
export const CourseNavigationNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  min-height: 20px; 
  background-color: transparent;
  padding: ${(props) => (props.courseNavActive ? "10px" : "none")};
  border-bottom: ${(props) => (props.courseNavActive ? "2px solid lightgreen" : "none")};
`

export const CourseNavCollapseBtn = styled.button`
  padding: 5px; 
  cursor: pointer; 
  color: white;
  background-color: transparent;
  border: none;
  margin: ${(props) => (props.courseNavActive ? "none" : "5px")};
`

export const CourseNavTitle = styled.h2`
  display: ${(props) => (props.courseNavActive ? "block" : "none")};
  color: white;
`

// this is where all the sections will live 
// display should be none when not active 
export const CourseNavigationContainer = styled.div`
  display: ${(props) => (props.courseNavActive ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  width: 90%;
  margin: 0 auto;
  height: auto;
`


// this is the container for them lessons 
export const NoLessonContainer = styled.div`
  height: 70%;
  background: transparent;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

// -------------------------------- course navigation styling END ---------------------------------------


//this is where resources for lesson will live - has a navigation bar and container with respective info. 
