import PropTypes from "prop-types";
import { getGifs } from "./helpers/getGifs";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([])

  const getGif = async (category) => {
    const newGifs = await getGifs(category)
    setGifs(newGifs)
  }

  useEffect(() => {
    getGif(category);
  }, [category]);

  return (
    <>
      <h4>{category}</h4>
      <ol>
        {gifs.map((gif) => {
          return <li key={gif.id}>{gif.title}</li>
        })}
      </ol>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
