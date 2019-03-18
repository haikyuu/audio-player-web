const songs = {
  state: { ids: [], data: {}, loading: false, hasError: false },
  reducers: {
    loadSongs(state, songs) {
      return {
        ...state,
        ids: songs.map(({ id }) => id),
        data: songs.reduce((acc, song) => ({ ...acc, [song.id]: song }), {})
      };
    },
    setLoading(state, loading) {
      return { ...state, loading };
    },
    setError(state, hasError) {
      return { ...state, hasError };
    }
  },
  effects: dispatch => ({
    async loadSongsAsync(payload, rootState) {
      try {
        dispatch.songs.setLoading(true);
        const { data } = await fetch("/songs/").then(res => res.json());
        dispatch.songs.loadSongs(data);
      } catch (error) {
        console.warn(error);
        dispatch.songs.setError(true);
      } finally {
        dispatch.songs.setLoading(false);
      }
    }
  })
};
export default songs;
