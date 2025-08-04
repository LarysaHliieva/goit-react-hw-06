import styles from "./SearchBox.module.css";

const SearchBox = ({ handleFilter }) => {
  return (
    <label className={styles.label}>
      <h3>Find contacts by name</h3>
      <input
        className={styles.input}
        onChange={handleFilter}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default SearchBox;
