import React from 'react'
import { Container, QuestionContainer, Question, Answer, H1 } from '../styles/screens/FaqScreen.styles'

const Faq = () => {
  return (
    <Container>
      <H1>Common Questions</H1>
      <QuestionContainer>
        <Question>Do I need to know Javascript?</Question>
        <Answer>Yes, you should know the basics and be aware of most advanced concepts in Javascript</Answer>  
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

    </Container>
  )
}

export default Faq