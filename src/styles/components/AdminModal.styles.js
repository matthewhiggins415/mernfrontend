import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalContainer = styled.div`
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  color: white;
`

export const ModalFormContainer = styled.div`
  position: fixed;
  width: 50%;
  min-width: 200px;
  max-width: 400px;
  height: auto;
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
  z-index: 10;
`

export const ModalHeader = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export const ModalForm = styled.form`
  width: 90%;
  height: 70%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  z-index: 10;
`

export const ModalCloseBtn = styled.button`
  font-size: 35px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const Input = styled.input`
  padding: 15px; 
  width: 80%;
  margin: 0 auto;
  outline: none;
  color: white;
  background-color: transparent;
  border: 1px solid lightgreen;
  z-index: 10;
`

export const CheckboxContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`

export const Btn = styled.button`
  padding: 15px;
  width: 80%;
  margin: 0 auto;
  background-color: transparent;
  border: 1px solid lightgreen;
  color: lightgreen;
  cursor: pointer;
  transition: 150ms ease-in-out;

  :hover {
    background-color: lightgreen;
    color: black;
  }
`