import clsx from "clsx";

import styles from "./Button.module.css";

const Button = ({ text, type = "submit", onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(styles.btn, className)}
    >
      {text}
    </button>
  );
};

export default Button;
