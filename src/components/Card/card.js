import React from 'react'
import styled from 'styled-components'

const Card = ({Titles, Contents, Icons, Colors})=>{ 

    return (
        <Container Colors={Colors}>
                <Icon src={Icons} alt='icons'/>
                <Title>{Titles}</Title>
                <Content>{Contents}</Content>
                <Wrapper>
            <Button>Learn More</Button>
                </Wrapper>
        </Container>
            
        
    )
}
export default Card;

const Container = styled.div`
width: 333.3px;
height: 100%;
background-color: ${({Colors})=> Colors};
display: flex;
flex-direction: column;
`;

const Wrapper = styled.div`

`;

const Icon = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-top: 30px;
    margin-left: 30px;

`;


const Title = styled.div`
    font-size: 30px;
    font-weight: 900;
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-top: 20px;
    margin-left: 30px;
    color: white;
    
    `;
const Content = styled.div`
    font-size: 20px;
    font-weight: 500;
    width: 250px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-top: 40px;
    margin-left: 30px;
    color: white;

`;
const Button = styled.button`
font-family:Georgia, 'Times New Roman', Times, serif;
font-weight: 900;
border-radius: 50px;
padding: 20px;
margin-top: 80px;
margin-left: 30px;
cursor: pointer;
`;
