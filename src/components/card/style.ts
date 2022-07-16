import styled from "styled-components";

export const Item = styled.div`
display: flex;
flex-direction: column;
width: 13.70rem;
height: 22rem;
background: #FFFFFF;
box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.135216);
border-radius: 0.5rem;
justify-content: space-between;
margin: 1.5rem;
padding-top: 0.5rem ;
align-items: stretch;
`
export const DivContent = styled.div`
display: flex;
flex-direction: row;
padding: 0.1rem 0.9rem;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
margin: 0;
`
export const NameItem = styled.p`
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-size: 1rem;
line-height: 1.18rem;
` 
export const DivValor = styled.div`
display: flex;
justify-content: center;
width: max-content;
height: 1.62rem;
background: #373737;
border-radius: 0.31rem;
padding: 0.2rem;
align-items: center;
justify-content: center;
`
export const Valor = styled.span`
font-family: 'montserrat';
font-style: normal;
font-weight: 700;
font-size: 0.93rem;
line-height: 0.93rem;
color: #fff;
`
export const Description =styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 0.62rem;
line-height: 0.75rem;
color: #2C2C2C;
padding-bottom: 0.5rem;
`
export const BuyButton = styled.button`
display: flex;
justify-content: center;
height: 2.5rem;
border: none;
background: #0F52BA;
border-radius: 0 0 0.5rem 0.5rem;
align-content: center;
align-items: center;
flex-wrap: nowrap;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
`
export const BuyText = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 0.87rem;
line-height: 1.12rem;
color: #FFFFFF;
`
export const Img = styled.img`
display: flex;
width: 99%;
`