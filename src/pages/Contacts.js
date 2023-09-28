import { Container } from "@mui/material";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            {/* <h1>Your contacts</h1> */}
            <ContactForm />
            <Filter/>
            <ContactList/>
     </Container>
    )
};

export default Contacts;