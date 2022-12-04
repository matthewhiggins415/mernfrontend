import styled from 'styled-components';

export const ResourceContainer = styled.div`
  min-height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column; 
  background-color: transparent;
`

export const ResourceContainerHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`

export const HeaderBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: 150ms ease-in-out;

  :hover {
    color: lightgreen;
  }
`