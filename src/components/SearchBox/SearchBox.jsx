import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

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
