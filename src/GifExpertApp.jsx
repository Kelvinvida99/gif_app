import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    const newCategories = [newCategory, ...categories];
    setCategories(newCategories);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
