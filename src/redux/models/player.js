const player = {
  state: { currentSong: null, isPaused: true, progress: 0 },
  reducers: {
    setCurrentSong(state, payload) {
      return { ...state, isPaused: false, currentSong: payload.id };
    },
    pause(state) {
      return { ...state, isPaused: true };
    },
    play(state) {
      return { ...state, isPaused: false };
    }
  },
  effects: dispatch => ({
    // offset should be -1 for previous song.
    // slightly less readable but reusable 👀
    setNextSong(offset = 1, rootState) {
      const { ids } = rootState.songs;
      const nextSongIndex = Math.abs(
        (ids.indexOf(rootState.player.currentSong) + offset) % ids.length
      );
      dispatch.player.setCurrentSong({ id: ids[nextSongIndex] });
    }
  })
};

export default player;
