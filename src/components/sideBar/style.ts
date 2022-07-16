import styled from "styled-components";

export const  Base = styled.nav`
width: 28rem;
height: 100%;
position: fixed;
background: #0F52BA;
box-shadow: -0.31rem 0 0.37rem rgba(0, 0, 0, 0.13);
display: flex;
flex-direction: column;
align-content: space-around;
align-items: stretch;
justify-content: space-between;
right: 0;
top: 0;
`
export const Divisor = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
justify-content: space-around;
align-items: center;
align-content: center;
margin-top: 1rem;
` 
export const Divisor2 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: flex-start;
align-items: center;
align-content: center;
padding: 0.5rem 0;
` 
export const Finilly = styled.button`
display: flex;
width: 100%;
height: 6rem;
background: #000;
border: none;
cursor: pointer;
align-items: center;
justify-content: center;

&:hover {
    opacity: 0.8;
}
`
export const Text = styled.span`
font-family: 'Montserrat';
font-weight: 700;
font-size: 1.68rem;
line-height: 2rem;
color: #FFFFFF;
`