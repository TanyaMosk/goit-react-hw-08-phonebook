import { useDispatch, useSelector } from "react-redux";
import { deleteContact, updateContact } from "redux/contacts/operations";
import { selectError, selectVisibleContacts } from "redux/contacts/selectors";
import { Btn, List, WrapItem, Text, WrappText, IconClose, TitleList, TotalText, FormInput, Form, ChangeBtn } from "./ContactList.styled"
import { MdDriveFileRenameOutline } from "react-icons/md";
import Error from '../Error';
import { useState } from "react";
import { FormLabel } from "@mui/material";

const ContactList = () => {
  const dispatch = useDispatch();  
  const [changes, setChanges] = useState(null);  

  const contacts = useSelector(selectVisibleContacts);  
  const error = useSelector(selectError);
  

  const handleChanges = (e, id) => {
    e.preventDefault();
    setChanges(null);     
    dispatch(updateContact({
      contactId: id,
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value
    }));   
  }; 
  
  return (
    <>      
      {error ? <Error /> : null}
      {(contacts.length !== 0)
        ? (<>
          <TotalText>Total contacts: {contacts.length}</TotalText>
          <List>
            {contacts.map(({ id, name, number }) => (
              <li key={id}>
                <WrapItem>
                  {changes !== id ? (
                    <>
                      <WrappText>
                        <Text>{name}</Text>
                        <Text> {number}</Text>
                      </WrappText>
                      <Btn onClick={() => setChanges(id)}>
                        <MdDriveFileRenameOutline />
                      </Btn>
                      <Btn onClick={() => dispatch(deleteContact(id))}>
                        <IconClose />
                      </Btn> </>)
                    : (
                      <Form key={id} onSubmit={(e) => handleChanges(e, id)} >
                      <FormLabel>
                        <FormInput
                          type="name"
                          name="name"
                          defaultValue={name}
                        />
                      </FormLabel>
                      <label>
                        <FormInput
                          type="text"
                          name="number"
                          defaultValue={number}
                        />
                      </label>
                      <ChangeBtn type="submit">Change</ChangeBtn>
                    </Form>)            
                  }
                </WrapItem>
              </li>
            ))}
          </List>
        </>)
        : (error ? null : <TitleList>Sorry, you have no saved contacts.</TitleList>)
      }
    </>
  );
};

export default ContactList;

