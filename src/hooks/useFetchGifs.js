import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGif = async (category) => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getGif(category);
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
