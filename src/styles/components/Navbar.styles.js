import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
`

export const DesktopNav = styled.div`
  display: flex;
  background-color: black;
  height: 100%;
  width: auto;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
`

export const DesktopNavItem = styled(Link)`
  margin: 10px 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  background-color: transparent;
  padding: 10px;

  :hover {
    color: lightgreen;
  }
`

export const MobileExtendedNavItem = styled(Link)`
  margin: 10px 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 1px;
  background-color: transparent;
  padding: 10px;

  :hover {
    color: lightgreen;
  }
`

export const LeftNavContainer = styled.div`
  width: 50%;
`

export const RightNavContainer = styled.div`
  width: auto;
`

export const MobileNav = styled.div`
  background-color: purple;
  display: flex;
  width: 100%;
`

export const ExtendedMobileNav = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  height: 100%;
  background: linear-gradient(black, #202020);
  width: 100%;
  background-color: black;
  align-items: center;
  justify-content: center;
  overflow: none;
`

export const NotExtendedMobileNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;
  background-color: black;
`

export const MobileBtn = styled.button`
  font-size: 30px;
  width: 35px;
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
`

export const RegisterBtn = styled(Link)`
  margin: 10px 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  background-color: transparent;
  border: 2px solid lightgreen;
  padding: 10px;
  border-radius: 25px;

  :hover {
    color: black;
    background-color: lightgreen;
  }


`