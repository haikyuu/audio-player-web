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
  effects: dispatch => ({})
};

export default player;
