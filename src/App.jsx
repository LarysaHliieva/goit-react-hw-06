import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import styles from "./App.module.css";

import "./App.css";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("contacts")) ?? [];
  // });

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const contacts = useSelector((state) => state.contacts.items);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((item) => item.id !== id)
    );
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedFilter) ||
        item.number.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />

      <SearchBox />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
