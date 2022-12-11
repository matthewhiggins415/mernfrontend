import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  margin: 0px;
  width: 100%;
  background: linear-gradient(black, #202020);
`

export const Hero = styled.div`
  width: 100%;
  min-height: 80vh;
  color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  transform: skew(0, -10deg);
`

export const TopTitle = styled.span`
  order: 1;
  text-align: center;
  display: block;
  color: #fff;
  font-size: clamp(1rem, 4vw, 1.5rem);
  margin-bottom: 1rem;
  padding-right: 2rem;
`

export const BottomTitle = styled.span`
  order: 3;
  text-align: center;
  display: block;
  color: #fff;
  font-size: clamp(1rem, 4vw, 1.5rem);
  margin-top: 1rem;
  padding-left: 2rem;
`

export const SweetTitle = styled.h1 `
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@300;700;900&display=swap");
  order: 2;
  color: #fde9ff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.75em;
  text-align: center;
  text-shadow: 3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff,
    3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb,
    6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,
    6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb,
    9px 7px 1px #4af7ff;

  span {
    display: block;
    position: relative;

    &:before {
      content: attr(data-text);
      position: absolute;
      text-shadow: 2px 2px 1px #e94aa1, -1px -1px 1px #c736f9,
        -2px 2px 1px #e94aa1, 1px -1px 1px #f736f9;
      z-index: 1;
    }

    &:nth-child(1) {
      padding-right: 2.25rem;
    }

    &:nth-child(2) {
      padding-left: 2.25rem;
    }
  }
`
export const AskSection = styled.div`
  height: auto;
  min-height: 100vh;
  width: 50%;
  margin: 0 auto;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  color: whitesmoke;
  text-align: center;

  h2 {
    padding-bottom: 5px;
    letter-spacing: 1.2px;
  }

  h4 {
    margin-top: 10px;
  }

  @media only screen and (max-width: 700px){
    width: 100%;
  }
`

export const ProjectContainer = styled.div`
  width: 100%;
  background-color: transparent;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const ProjectCard = styled.div`
  height: 400px;
  width: 80%;
  max-width: 600px;
  border: 2px solid lightgreen;
  border-radius: 10px;
`

export const OfferList = styled.div`
  color: white;
  height: 400px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: inside;
  border-top: 5px dashed lightgreen;

  ul {
    list-style: none;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    font-size: 22px;
    letter-spacing: 1.2px;
  }
`

export const GetStartedBtn = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: 3px solid lightgreen;
  background-color: transparent;
  color: lightgreen;
  font-size: 25px;
  transition: 150ms ease-in-out;
  cursor: pointer;

  :hover {
    color: black;
    background-color: lightgreen;
  }
`

export const ValueSection = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const CardContainer = styled.div`
  min-height: 400px;
  min-width: 400px;
  width: 80%;
  height: 80%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Card = styled.div`
  height: 400px;
  width: 250px;
  border: 1px solid green;
  margin: 30px auto;
`

export const SlackContainer = styled.div`
  width: 80%;
  height: 80vh;
  background-color: white;
`

export const VidContainer = styled.div`
  min-height: 660px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`