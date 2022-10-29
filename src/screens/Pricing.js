import React from 'react'
import { PricingScreenContainer, H2, PricingOfferContainer, H1, PricingButton, FaqLink} from '../styles/screens/PricingScreen.styles'

const Pricing = () => {
  return (
    <PricingScreenContainer>
      <div>
        <h2>
          Build and deploy MERN stack projects from scratch using the latest technologies. Learn by doing. Make your projects STAND OUT!
        </h2>
        <PricingOfferContainer>
          <H1>What we offer:</H1>
          <H2>Step by step guidance of how to make web apps.</H2>
          <H2>A Slack community to discuss questions/challenges.</H2>
          <H2>Access to Github project repos.</H2>
          <PricingButton>$10/month</PricingButton>
        </PricingOfferContainer>
        <FaqLink to="/faq">Have questions? Ask me.</FaqLink>
      </div>
    </PricingScreenContainer>
  )
}

export default Pricing