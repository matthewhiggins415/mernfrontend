import React from 'react'
import { Container, QuestionContainer, Question, Answer, H1, GreenLink } from '../styles/screens/FaqScreen.styles'

const Faq = () => {
  return (
    <Container>
      <H1>Common Questions</H1>

      <QuestionContainer>
        <Question>Disclaimer</Question>
        <Answer>You may know some things this course doesn't touch upon and vice-versa. The goal with these courses is to show aspiring devs the basics, how to build cool, fullstack projects with MERN, and in doing so uncover concepts you can further pursue by a simple Google search.</Answer>  
      </QuestionContainer>

      <QuestionContainer>
        <Question>Technologies we will use in these courses.</Question>
        <Answer>Javascript, React, CSS, Command Line, Github, Git, a 3rd party API, Heroku, and Netlify.</Answer>  
      </QuestionContainer>

      <QuestionContainer>
        <Question>Do I need to know Javascript?</Question>
        <Answer>Yes, you should know the basics and be aware of most advanced concepts in Javascript like async js with async-await</Answer>  
      </QuestionContainer>
      
      <QuestionContainer>
        <Question>Do I need to know CSS?</Question>
        <Answer>Yes, you should know the basics</Answer>  
      </QuestionContainer>

      <QuestionContainer>
        <Question>Do I need to know HTML?</Question>
        <Answer>Yes, you should know the basics</Answer>  
      </QuestionContainer>

      <QuestionContainer>
        <Question>Do I need to know React?</Question>
        <Answer>Yes, you should know some basics. Things like props, useState, & useEffect.</Answer>  
      </QuestionContainer>
      <GreenLink to='/register'>sign up now</GreenLink>
    </Container>
  )
}

export default Faq