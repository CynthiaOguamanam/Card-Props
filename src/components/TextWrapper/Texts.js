import React from "react"
import styled from 'styled-components'

const Text = () =>{
    return (
        <Div>
             <Title>Reliable, efficient delivery</Title>
             <Title2>
             <SubTitle>Powered by technology</SubTitle>
             <Para>Our artfical intelligence powered tools use millions of project data points to ensure that your project is successful </Para>
             </Title2>
        </Div>
    )
}

export default Text;

const Div = styled.div`
width: 1000px;
height: 60px;
// background-color: grey;
Display: flex;
flex-direction: column;
justify-content: center;
align-items: space-bbetween;
margin-top: 20px;
`;

const Title = styled.div`
margin-top: 70px;
font-size: 50px;
font-weight: 400;
margin-left: 250px;
`;
const Title2 = styled.div`
font-size: 40px;
font-weight: 700;

`;
const SubTitle = styled.div`
margin-left: 300px;
margin-top: 10px;
`;
const Para = styled.div`
width: 450px;
font-size: 17px;
font-weight: 400;
margin-left: 300px;
margin-top: 30px;
font-family: cambria;
`;