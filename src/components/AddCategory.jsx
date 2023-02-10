import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
