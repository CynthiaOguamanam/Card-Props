import React from 'react'
import styled from 'styled-components'
import Card from '../Card/card'
import pic from '../img/12.png'
import icon from '../img/13.png'
import conic from '../img/14.png'



const Home = () =>{ 
    
    return (
                  <Div>
                  <Card Colors='#E28525' Titles='SEDANS' Contents='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip' Icons={pic}/>
                  <Card Buton='Learn More' Colors='#016972' Titles='SUVS' Contents='Take an SUV for its spacious interior, power and versatility. erfect for your next family vacation and off-road adventures.' Icons={icon}/>
                  <Card Buton='Learn More' Colors='#00403F' Titles='LUXURY' Contents='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' Icons={conic}/>
                </Div>
      
    )
}
export default Home;

const Div = styled.div`
width: 1000px;
height: 60%;
background-color: grey;
display: flex;
justify-content: space-between;
`;



