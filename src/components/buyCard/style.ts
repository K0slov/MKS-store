import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: row;
width: 75%;
height:  18%;
padding: 0.5rem;
justify-content: space-between;
background: #FFFFFF;
box-shadow: -0.12rem 0.12rem 0.65rem rgba(0, 0, 0, 0.05);
border-radius: 0.5rem;
margin: 0.5rem 0;
align-items: stretch;
padding-right: 0;
`
export const Adjust = styled.div`
display: flex;
align-content: center;
justify-content: center;
align-items: stretch;
padding: 0;
margin: 0 0.3rem;
`
export const NameText = styled.p`
font-family: 'Montserrat';
font-weight: 400;
font-size: 0.81rem;
line-height: 1rem;
color: #2C2C2C;
align-self: center;
`
export const PriceText  = styled.span`
font-family: 'Montserrat';
font-weight: 700;
font-size: 0.87rem;
line-height: 1rem;
color: #000000;
align-self: center;
position: relative;
right: -1rem;
`
export const Img = styled.img`
display: flex;
width: 95%;
`
export  const Close = styled.div`
width: min-content;
height: min-content;
border: none;
background: #000;
padding: 0;
border-radius: 8rem;
display: flex;
position: relative;
right: -1rem;
top: -1.3rem;
cursor: pointer;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
font-family: 'Montserrat';
font-weight: 400;
font-size: 0.6rem;
line-height: 0.37rem;
color: #000000;
justify-content: center;
`
export const AddSub = styled.a`
border: solid 1px #202020;
width: 1.2rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
cursor: pointer;
`
export const Input = styled.input`
width: 1rem;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px #202020;
cursor: alias;
`
export const DivSelect = styled.div`
display: flex;
width: 3rem;
flex-direction: row;
margin: 0.2rem 0;
border-radius: 1rem;
`
