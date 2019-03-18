export const getSongUrl = song => {
  if (!song) return "";

  return `http://localhost:3001/static/${song.filename}`;
};
