import Button from "../Button/Button";
import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";

const ContactList = ({ items = [], onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {items.map((item) => (
        <Contact
          key={item.id}
          className={styles.contact}
          onDelete={onDelete}
          {...item}
        />
      ))}
    </ul>
  );
};

export default ContactList;
