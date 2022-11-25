import React from 'react';
import { Container, Hero, TitleWrapper, TopTitle, BottomTitle, SweetTitle, AskSection } from '../styles/screens/LandingScreen.styles'

const Landing = () => {
  return (
    <Container>
      <Hero>
        <TitleWrapper>
          <SweetTitle class="sweet-title">
            <span data-text="Actual">Actual</span>
            <span data-text="Projects">Projects</span>
          </SweetTitle>
          <TopTitle>create & deploy</TopTitle>
          <BottomTitle class="bottom-title">for your portfolio</BottomTitle>
        </TitleWrapper>
      </Hero>
      <AskSection>
        <h1>Join for free</h1>
      </AskSection>
    </Container>
  )
}

export default Landing