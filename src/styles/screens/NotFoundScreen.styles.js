import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(black, #202020);
`

export const NotFound = styled.h1`
  font-family: 'Catamaran', sans-serif;
  letter-spacing: 20px;
  font-weight: 900;
  max-width: 800px;
  display: block;
  font-size: 60px;
  color: rgba(20, 241, 0, 0.72);
  text-shadow:
  -10px 10px 0 rgba(20, 130, 0, 0.8),		
  -1px 1px 0 rgba(28, 231, 2, 0.84),
  -2px 2px 0 rgba(28, 231, 2, 0.84),
  -3px 3px 0 rgba(28, 231, 2, 0.84),
  -4px 4px 0 rgba(28, 231, 2, 0.84),
  -5px 5px 0 rgba(28, 231, 2, 0.84),
  -6px 6px 0 rgba(28, 231, 2, 0.84),
  -7px 7px 0 rgba(28, 231, 2, 0.84),
  -8px 8px 0 rgba(28, 231, 2, 0.84),
  -9px 9px 0 rgba(28, 231, 2, 0.84),
  -10px 10px 0 rgba(28, 231, 2, 0.84),
  -11px 11px 0 rgba(28, 231, 2, 0.84),
  -12px 12px 0 rgba(28, 231, 2, 0.84),
  -13px 13px 0 rgba(28, 231, 2, 0.84),
  -14px 14px 0 rgba(28, 231, 2, 0.84),
  -15px 15px 35px rgba(0, 0, 0, 0.2),
  -35px 15px 10px rgba(0, 0, 0, 0.1);
  transition: all .1s ;
  line-height: 240px;
`