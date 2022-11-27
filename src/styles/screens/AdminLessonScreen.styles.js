import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 90vh;
  margin: 0px;
  width: 100%;
  background: linear-gradient(black, #202020);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const BackBtn = styled(Link)`
  width: 60px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  margin-bottom: 50px;
`

export const InfoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
`

export const InfoContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const TinyBtn = styled.button`
  padding: 4px 6px;
  margin: 2px;
  cursor: pointer;
  color: lightgreen;
  background-color: transparent;
  transition: 150ms ease-in-out;
  border: none;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`

export const VideoContainer = styled.video`
  width: 100%;
  border: 2px solid lightgreen;
  border-radius: 10px;
  height: auto;
  padding: 10px;
  margin: 0 auto;
`