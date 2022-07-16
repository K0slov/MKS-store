import styled from "styled-components";

export const Button =  styled.button`
display: flex;
flex-direction: row;
width: 5.62rem;
height: 2.81rem;
background: #fff;
border-radius: 0.5rem;
justify-content: space-evenly;
margin-right: 9rem;
align-content: center;
align-items: center;
border: none;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
`
export const Icon = styled.p`
color: #000;
` 
export const Count = styled.span`
font-family: 'Montserrat';
font-weight: 700;
font-size: 1.12rem;
line-height: 1.37rem;
`