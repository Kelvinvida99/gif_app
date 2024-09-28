import PropTypes from "prop-types";
import { getGifs } from "./helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./components/GifItems";

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
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
