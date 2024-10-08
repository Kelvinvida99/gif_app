export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=UnIX4nZwBgMjiGlJwK7h3InhTE2sur8H&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
