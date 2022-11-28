import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  margin: 0;
  background: linear-gradient(black, #202020);
`

export const BackBtn = styled(Link)`
  padding: 10px; 
  border: 1px solid lightgreen;
  color: lightgreen;
  margin: 20px;

`