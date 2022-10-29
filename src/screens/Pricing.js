import React from 'react'
import { PricingScreenContainer } from '../styles/screens/PricingScreen.styles'

const Pricing = () => {
  return (
    <PricingScreenContainer>
      <div>
        <h2>
          Build and deploy MERN stack projects from scratch using the latest technologies. Learn by doing. Make your projects STAND OUT!
        </h2>
        <div>
          <div>
            <h4>Do I need to know Javascript?</h4>
            <p>Yes! Knowing Javascript is super helpful. We won't explicitly be discussing common Javascript concepts but any related Javascript questions to the projects can be discussed.</p>
          </div>
        </div>
        <p>Have questions <a href="">click here</a></p>
      </div>
    </PricingScreenContainer>
  )
}

export default Pricing