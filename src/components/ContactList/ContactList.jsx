import Button from "../Button/Button";

import styles from "./ContactList.module.css";

const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          {name}: {number}
          <Button
            text="Delete"
            type="button"
            onClick={() => onDelete(id)}
            className={styles.contact__btn}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
