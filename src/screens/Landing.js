import React from 'react';
import { Container, Hero, TitleWrapper, TopTitle, BottomTitle, SweetTitle, AskSection,ProjectContainer, ProjectCard, OfferList, Image, GetStartedBtn, ValueSection, CardContainer, Card, SlackContainer, VidContainer} from '../styles/screens/LandingScreen.styles';

const Landing = () => {
  return (
    <Container>
      <Hero>
        <TitleWrapper>
          <SweetTitle className="sweet-title">
            <span data-text="Actual">Actual</span>
            <span data-text="Projects">Projects</span>
          </SweetTitle>
          <TopTitle>create & deploy</TopTitle>
          <BottomTitle className="bottom-title">using MERN</BottomTitle>
        </TitleWrapper>
      </Hero>
      <ValueSection>
        <CardContainer>
          <Card>
          </Card>
          <Card>
          </Card>
          <Card>
          </Card>
        </CardContainer>
        <SlackContainer>video of slack questions</SlackContainer>
      </ValueSection>

      <ProjectContainer>
        <OfferList>
          <ul>
            <li>Immediate Discord support for project questions</li>
            <li>Discord to connect with other students</li>
            <li>step-by-step videos</li>
            <li>Real projects with 3rd party APIs</li>
            <li>Git & Github guidance</li>
          </ul>
          <GetStartedBtn to="/register">Get Started</GetStartedBtn>
        </OfferList>
        <ProjectCard>
          <h2>Project 12</h2>
        </ProjectCard>
      </ProjectContainer>
      <AskSection>
        <h2>
        Building a deployed project is like climbing a mountain. And climbing a mountain is a hell of a lot easier with a trusted route, companions, and a guide. 
        <br></br>
        <br></br>
        MERN stands for MongoDB, Express, React, and Node - these technologies are popular, modern, used to create fullstack web apps, and all rely on one language - JavaScript. Combined together, they are very powerful. 
        <br></br>
        <br></br>
        In these courses you will create fully deployed web apps. Not a silly calculator app or to-do list. Something meaningful & impressive from start to finish. You will have guidance for each step and Slack channels to ask specific questions and connect with colleagues also working on the same course.
        <br></br>
        <br></br>
        If you have questions leave your email :^)
        </h2>
      </AskSection>
    </Container>
  )
}

export default Landing