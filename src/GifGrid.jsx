import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=UnIX4nZwBgMjiGlJwK7h3InhTE2sur8H&q=${category}`;
    const resp = await fetch(url);
    console.log(resp)
  };

  getGifs()

  return (
    <>
      <h4>{category}</h4>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
