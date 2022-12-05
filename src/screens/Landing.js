import React from 'react';
import { Container, Hero, TitleWrapper, TopTitle, BottomTitle, SweetTitle, AskSection,ProjectContainer, ProjectCard, OfferList, Image, GetStartedBtn } from '../styles/screens/LandingScreen.styles';

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
      <ProjectContainer>
        <OfferList>
          <ul>
            <li>Slack support for project questions</li>
            <li>Slack to connect with other students</li>
            <li>step-by-step videos</li>
            <li>Real projects with 3rd party APIs</li>
            <li>Git & Github guidance</li>
          </ul>
          <GetStartedBtn>Get Started</GetStartedBtn>
        </OfferList>
        <ProjectCard>
          <h2>Project 12</h2>
        </ProjectCard>
      </ProjectContainer>
      <AskSection>
        <h2>
        Learning to code is like climbing a mountain. And climbing a mountain is a hell of a lot easier with a trusted route, companions, and a sherpa. 
        <br></br>
        <br></br>
        MERN stands for MongoDB, Express, React, and Node - these technologies are popular, modern, used to create fullstack web apps, and all rely on one language - JavaScript. Combined together, they are very powerful. 
        <br></br>
        <br></br>
        In these courses you will create fully deployed web apps. Not a silly calculator app or to-do list. Something meaningful & impressive from start to finish. You will have lessons for each step and Slack channels to ask questions and conversate with colleagues.
        <br></br>
        <br></br>
        If you have questions leave your email and I will reach out when I have the time.
        </h2>
      </AskSection>
    </Container>
  )
}

export default Landing