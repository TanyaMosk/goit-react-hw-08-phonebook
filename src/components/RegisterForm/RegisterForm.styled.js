import styled from 'styled-components';

export const FormWrapper = styled.div`
width: 360px;
background-color: transparent;
  margin: auto;
  padding: 20px;  
  border-radius: 10px;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,128,0.3),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
   text-align: center;
   margin-top: 40px;
`;

export const Form = styled.form` 
  
display: flex;
flex-direction: column;
gap: 10px;
`;