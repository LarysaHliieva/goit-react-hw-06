import { BsFillTelephoneFill } from "react-icons/bs";

import Button from "../Button/Button";

import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={styles.contact}>
      <p>
        <BsFillTelephoneFill className={styles.icon} />
        {name}: {number}
      </p>
      <Button
        text="Delete"
        type="button"
        onClick={() => onDelete(id)}
        className={styles.contact__btn}
      />
    </li>
  );
};

export default Contact;
