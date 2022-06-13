import React from 'react'
import styled from 'styled-components'
import Home from './components/home/home'


const App = () =>{
  return(
    <Div>
      <Home/>
    </Div>
  )
};

export default App;


const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
