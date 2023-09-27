import { useDispatch, useSelector } from "react-redux";
import { deleteContact, updateContact } from "redux/contacts/operations";
import { selectError, selectVisibleContacts } from "redux/contacts/selectors";
import { DeleteBtn, List, WrapItem, Text, WrappText, IconClose, TitleList, TotalText } from "./ContactList.styled"
import { MdDriveFileRenameOutline } from "react-icons/md";
import Error from '../Error';
import { useState } from "react";

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
    console.log(id);
  }; 
  
  return (
        <>
      {error ? <Error/> : null}
      {(contacts.length !== 0 )
      ? (<>
          <TotalText>Total contacts: {contacts.length}</TotalText>
    <List>
            {contacts.map(({ id, name, number }) => (         
        <li key={id}>          
          <WrapItem>
            <WrappText>
              <Text>{name}</Text>
              <Text> {number}</Text>
            </WrappText>
            {changes === id ? (
              <form key={id} onSubmit={(e) => handleChanges(e, id)} >
                <label>               
                  <input
                    type="name"
                    name="name"
                    defaultValue={name}                    
                  />
                </label>
                <label>               
                  <input
                    type="text"
                    name="number"
                    defaultValue={number}                
                  />
                </label>
                <button >Change</button>
              </form>
            ) : (
              <button onClick={() => setChanges(id)}>
                <MdDriveFileRenameOutline/> 
              </button>
            )}
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
              <IconClose />
            </DeleteBtn>
          </WrapItem>
        </li>
      ))}
    </List>
      </>)
        : (error ? null : <TitleList>Sorry, you have no saved contacts.</TitleList>)
         }        
    </>
  )
};

export default ContactList;

 // <>
    //   {error ? <Error/> : null}
    //   {(contacts.length !== 0 )
    //   ? (<>
    //       <TotalText>Total contacts: {contacts.length}</TotalText>
    // <List>
    //   {contacts.map(({id, name, number}) => (        
    //     <li key={id}>
    //       <WrapItem>
    //         <WrappText>
    //         <Text>{name}</Text>
    //         <Text> {number}</Text>
    //         </WrappText>
    //         <button key={id} onClick={()=>changeContact(id)}>
    //           <MdDriveFileRenameOutline/>Edit 
    //         </button>           
    //         <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
    //           <IconClose />
    //         </DeleteBtn>
    //       </WrapItem>
    //       {changes && <form>
    //           <label>               
    //             <input type="name" name="name" defaultValue={name} />
    //           </label>
    //           <label>               
    //             <input type="text" name="number" defaultValue={number} />
    //           </label>
    //           <button onClick={(e)=>handleChanges(e, id)} >Change</button>
    //         </form> }
    //     </li>
    //   ))}
    // </List>
    //   </>)
    //     : (error ? null : <TitleList>Sorry, you have no saved contacts.</TitleList>)
    //      }        
    // </>
