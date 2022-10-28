import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
`

export const DesktopNav = styled.div`
  display: flex;
  background-color: red;
  height: 100%;
  align-items: center;
`

export const DesktopNavItem = styled(Link)`
  margin: 10px auto;
  color: white;
  text-decoration: none;
  cursor: pointer;
`

export const MobileExtendedNavItem = styled(Link)`
  margin: 10px auto;
  color: black;
  text-decoration: none;
  cursor: pointer;
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
  width: 100%;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`

export const NotExtendedMobileNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;
  background-color: blue;
`

export const MobileBtn = styled.button`
  font-size: 30px;
  width: 35px;
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
`