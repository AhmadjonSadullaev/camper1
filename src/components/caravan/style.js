import styled from "styled-components";

export const HContainer = styled.div`
  width: 223px;
height: 400px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
align-items:center;
justify-content:center;

flex-direction: column;


`;
export const Vcontainer = styled.div`
width: 955px;
height: 180px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
gap:40px;
margin-top: 20px;

`;
export const Maincontainer = styled.div`
  display:grid;
  grid-template-areas:'a a a a ';
  gap: 20px;

`;

