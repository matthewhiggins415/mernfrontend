import React from 'react'
import { PricingScreenContainer, H2, PricingOfferContainer, H1, FaqLink, PricingInfoContainer} from '../styles/screens/PricingScreen.styles'
import { GreenBorderLink } from '../styles/components/GreenBorderLink.styles'

const Pricing = () => {
  return (
    <PricingScreenContainer>
      <PricingInfoContainer>
        <PricingOfferContainer>
          <H1>What we offer:</H1>
          <H2>Step by step guidance of how to make web apps</H2>
          <H2>A Slack community to discuss questions/challenges</H2>
          <H2>Access to Github project repos</H2>
          <H1 style={{color: 'white'}}>$15/mo.</H1>

        </PricingOfferContainer>
        <GreenBorderLink to='/register' >sign up now</GreenBorderLink>
        <FaqLink to="/faq">Have questions? Ask me.</FaqLink>
      </PricingInfoContainer>
    </PricingScreenContainer>
  )
}

export default Pricing