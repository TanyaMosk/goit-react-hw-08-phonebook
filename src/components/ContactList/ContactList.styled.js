import styled from 'styled-components';
import { GrClose } from "react-icons/gr";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
padding-left: 20px;
list-style: square;
/* color: gainsboro; */
color: navy;
width: 500px;
margin: auto;
`;

export const WrapItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:20px;

`;

export const Text = styled.p`
margin: 0;
padding: 5px;
text-transform: capitalize;
font-size: 18px;
/* color: gainsboro; */
color: navy;
`;

export const Btn = styled.button`
padding: 4px  8px;
display: flex; 
border: none;
border-radius: 4px;
background-color: transparent;
cursor: pointer;
padding: 2px;

 &:hover{
  background-color: gainsboro;   
}
`; 

export const WrappText = styled.div`
display: contents;

:last-child{
  margin-left: auto;
}
`;

export const IconClose = styled(GrClose)`
 path{
  stroke: red; 
 }  
`;

export const TotalText = styled.p`
/* color: lightsteelblue; */
text-align: center;
color: navy;
`;

export const TitleList = styled.h2`
/* color: gainsboro; */
color: navy;
text-align: center;
`; 

export const Form = styled.form`
display: flex;
gap: 15px;
`;

export const FormLabel = styled.label`
/* width: 100px; */
`;

export const FormInput = styled.input`
/* width: 100px; */
/* border: none; */
background-color: transparent;
border-radius: 5px;
border: 1px solid navy;
padding: 4px 10px;
`;

export const ChangeBtn = styled.button`
margin-right: auto;
border-radius: 5px;
padding: 4px  8px;

&:hover{
    background-color: darkblue;
    color: white;
}
&:focus{
    background-color: darkblue;
    color: white;
}
`;