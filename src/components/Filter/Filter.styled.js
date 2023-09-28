import styled from 'styled-components'

export const FilterWrapper = styled.div`
text-align: center;
`;

export const InputFilter = styled.input`
border-radius: 5px;
padding: 4px 10px;
text-align: center;
&:hover{
    border: 2px solid darkblue;
}

&:focus{
    border: 2px solid darkblue;
    outline: none;
    color: darkblue;
}
`;

export const TextFilter = styled.p`
font-weight: 600;
text-transform: uppercase;
/* color:gainsboro; */
color: navy;
`;

export const TitleFilter = styled.h2`
text-transform: uppercase;
/* color: white; */
color: navy;
`;