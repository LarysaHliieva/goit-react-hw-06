import { useEffect, useState } from "react";

import { nanoid } from "nanoid";

import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { changeFilter } from "./redux/filtersSlice";

import styles from "./App.module.css";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });

  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const isDublicate = (name) => {
    const normalizedName = name
      .toLowerCase()
      .split(" ")
      .filter((item) => item)
      .join(" ");

    return contacts.some((item) => normalizedName === item.name.toLowerCase());
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((item) => item.id !== id)
    );
  };

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
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
      <ContactForm onSubmit={addContact} />

      <Filter handleFilter={handleFilter} />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
