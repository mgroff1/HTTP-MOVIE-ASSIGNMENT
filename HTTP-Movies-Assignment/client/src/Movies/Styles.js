import React from 'react';
import styled from 'styled-components';


export const CardShell = styled.div`
  width:60vw;
  height:100%;
  background:rgba(55,55,55,1);
  box-shadow:2px 1px 7px 1px black,inset 2px 1px 7px 1px black,inset -2px -1px 7px -1px black;
  color:rgba(105,105,185,1);
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  padding:20px;
`;

export const Title = styled.h1`
  font-family: 'Black Ops One', cursive;
    text-align:center;
    font-size:38px;
    color:blue;
    text-shadow:2px .5px 5px rgba(195,195,255,1), -2px -.5px 5px rgba(195,195,255,1);
`;

export const Info = styled.div`
   background: black;
   text-align:center;
   margin-left:10%;
   border-radius:7px;
     box-shadow:inset 2px 1px 7px 1px white,inset -2px -1px 7px -1px white;
   justify-content:space-around;
   width: 80%;
   padding:10px;
`
