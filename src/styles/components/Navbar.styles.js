import styled from 'styled-components'

export const DesktopNav = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const MobileNav = styled.div`
  width: 100%;
  height: ${(props) => (props.extended ? "100vh" : "80px")};
  position: absolute;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MobileButton = styled.button`
  border: none;
  font-size: 40px;
  outline: none;
  border-radius: 4px;
  position: absolute;
  top: 15px;
  left: 25px;
  cursor: pointer;
  color: white;
  background-color: black;
`