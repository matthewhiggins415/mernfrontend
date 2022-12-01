import React from 'react';
import { Container, Hero, TitleWrapper, TopTitle, BottomTitle, SweetTitle, AskSection,ProjectContainer, ProjectCard, OfferList, Image } from '../styles/screens/LandingScreen.styles';

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
            <li>step-by-step videos</li>
            <li>Slack support for project questions</li>
            <li>Slack to connect with other students</li>
            <li>Real projects with 3rd party APIs</li>
            <li></li>
            <li>Git & Github guidance</li>
          </ul>
        </OfferList>
        <ProjectCard>
          <h2>Project 12</h2>
        </ProjectCard>
      </ProjectContainer>
      <AskSection>
        <h2>Learning to code is like climbing a mountain. And climbing a mountain is a hell of a lot easier with a trusted route, companions, and a sherpa. <br>
        </br>
        <br></br>
        MERN stands for MongoDB, Express, React, and Node - all are popular, modern technologies used to create fullstack single page web apps and all leverage Javascript.
        <br></br>
        <br></br>
        To participate successfully in these courses you will need to know Javascript, basics of React, basics of how the internet works (api calls), and css.
        <br></br>
        <br></br>
        If you have questions leave your email.
        </h2>
      </AskSection>
    </Container>
  )
}

export default Landing