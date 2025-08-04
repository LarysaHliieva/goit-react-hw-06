import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filter = useSelector((state) => state.filters.name);
  const contacts = useSelector((state) => state.contacts.items);

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
    <ul className={styles.contactList}>
      {filteredContacts.map((item) => (
        <Contact key={item.id} className={styles.contact} {...item} />
      ))}
    </ul>
  );
};

export default ContactList;
