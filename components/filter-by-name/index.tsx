import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { Search, Delete } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";

const FilterByName = ({ filterCharacters }: { filterCharacters: (name: string) => {} }) => {
  const [name, setName] = useState("");
  const startTimmer = useRef(false);
  const isSearching = name.length > 0;

  useEffect(() => {
    if (!startTimmer.current) return;
    const search = setTimeout(() => {
      // delay the filter 500s
      filterCharacters(name);
    }, 500);
    return () => clearTimeout(search);
  }, [name]);

  const handleTextChange = (e) => {
    startTimmer.current = true;
    setName(e.target.value);
  };

  return (
    <Box className={styles.filter_container}>
      <TextField
        className={styles.input}
        variant="standard"
        id="input-with-sx" 
        value={name}
        onChange={handleTextChange}
      />
      {isSearching ? (
        <Delete
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
          onClick={() => {
            setName("");
          }}
        />
      ) : (
        <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      )}
    </Box>
  );
};
export default FilterByName;
