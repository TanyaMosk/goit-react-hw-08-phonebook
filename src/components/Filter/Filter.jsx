import { useDispatch } from "react-redux";
import { setContactFilter } from "redux/contacts/contactSlice";
import { FilterWrapper, InputFilter, TextFilter, TitleFilter } from "./Filter.styled";

const Filter = () => { 
  const dispatch = useDispatch();
  
  return (
    <FilterWrapper> 
    <TitleFilter>Contacts</TitleFilter>  
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"        
        onChange={(evt)=>dispatch(setContactFilter(evt.target.value))} 
      />
    </FilterWrapper>
  );
};

export default Filter