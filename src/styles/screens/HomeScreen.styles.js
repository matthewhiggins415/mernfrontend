import styled from 'styled-components'
import img from '../../assets/homebackground.jpg'

export const HomeScreenContainer = styled.div`
  min-height: 90vh;
  margin: 0px;
  width: 100%;
  background: linear-gradient(black, #202020);
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 30px;
  margin: auto;
  color: white;
  border: 1px solid red;

  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Hero = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 60px 30px;
  margin: auto;
  color: white;

  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  min-width: 300px;
  border-radius: 20px;
`

export const InspirationalDiv = styled.div`
  position: absolute;
  top: 250px;
  width: 260px;
  left: calc(100vw / 3);
  color: black;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 20px;
`