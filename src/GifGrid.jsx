import PropTypes from "prop-types";
import { getGifs } from "./helpers/getGifs";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, [category]);

  return (
    <>
      <h4>{category}</h4>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
