import styled from "styled-components";

export const DivColumn =  styled.div`
display: flex;
flex-direction: column;
`
export const DivRow =  styled.div`
display: flex;
flex-direction: row;
`
export const Div2 =  styled.div`
display: flex;
margin: 8rem 10rem;
flex-direction: column;
align-items: center;
justify-content: space-between;
align-content: center;
flex-wrap: nowrap;
`
export const Li = styled.li`
display: flex;
flex-direction: column;
box-sizing: border-box;
align-items: center;
justify-content: center;
`
export const Ul = styled.ul`
display: grid;
flex-direction: row;
padding: 0;
grid-template-columns: 1fr 1fr 1fr 1fr;
`