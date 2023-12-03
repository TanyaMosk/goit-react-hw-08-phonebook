import { Container } from "@mui/material";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Loader from "components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";

const Contacts = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>            
            <ContactForm />
            <Filter />
            {loading && !error ? <Loader/> : <ContactList/>}            
     </Container>
    )
};

export default Contacts;