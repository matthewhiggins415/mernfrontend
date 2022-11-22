import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalContainer = styled.div`
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  color: white;
`

export const ModalFormContainer = styled.div`
  position: fixed;
  width: 50%;
  min-width: 280px;
  max-width: 400px;
  height: 50%;
  max-height: 700px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: black;
  border: 2px solid lightgreen;
`

export const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: black;
`

export const ModalForm = styled.form`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-evenly;
  margin: 0 auto;
`

export const ModalCloseBtn = styled.button`
  font-size: 35px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  border: none;
`