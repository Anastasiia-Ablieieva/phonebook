import Filter from "components/ContactFilter/ContactFilter";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <p style={{
                margin: 8,
                padding: "12px 16px",
                borderRadius: 4,
                backgroundColor: "hsl(211, 80%, 76%)",
                color: "black",
            }}>PHONEBOOK</p>
            <ContactForm />
            <p style={{
                margin: 8,
                padding: "12px 16px",
                borderRadius: 4,
                backgroundColor: "hsl(211, 80%, 76%)",
                color: "black",
            }}>CONTACTS</p>
            <Filter />
            {isLoading && <p>In process...</p>}
            <ContactList />
        </div>
    );
}
