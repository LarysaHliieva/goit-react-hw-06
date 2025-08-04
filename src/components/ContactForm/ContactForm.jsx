import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { nanoid } from "nanoid";

import Button from "../Button/Button";

import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contactSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const { name, number } = state;

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    resetForm();
  };

  const isDublicate = (name) => {
    const normalizedName = name
      .toLowerCase()
      .split(" ")
      .filter((item) => item)
      .join(" ");

    return contacts.some((item) => normalizedName === item.name.toLowerCase());
  };

  const resetForm = () => {
    setState({
      name: "",
      number: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          onChange={hangleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          onChange={hangleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button text="Add contact" />
    </form>
  );
};

export default ContactForm;
