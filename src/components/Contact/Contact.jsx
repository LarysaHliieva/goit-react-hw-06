import { useDispatch } from "react-redux";

import { BsFillTelephoneFill } from "react-icons/bs";

import Button from "../Button/Button";

import { deleteContact } from "../../redux/contactSlice";

import styles from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <p>
        <BsFillTelephoneFill className={styles.icon} />
        {name}: {number}
      </p>
      <Button
        text="Delete"
        type="button"
        onClick={onDelete}
        className={styles.contact__btn}
      />
    </li>
  );
};

export default Contact;
