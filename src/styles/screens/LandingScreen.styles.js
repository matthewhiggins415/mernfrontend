import styled from 'styled-components';
import img from '../../assets/mountain.jpg'

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
  min-height: 90vh;
  width: 100%;
  background-color: blue;
  display: flex;
`

export const AskSectionLeft = styled.image`
  height: 900px;
  width: 50vw;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;  
  background-size: contain;
`

export const AskSectionRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: purple;
`