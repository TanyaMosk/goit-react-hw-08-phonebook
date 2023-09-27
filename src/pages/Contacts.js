import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1>Your contacts</h1>
            <ContactForm />
            <ContactList/>
     </div>
    )
};

export default Contacts;