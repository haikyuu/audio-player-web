const player = {
  state: { currentSong: null, isPaused: true, progress: 0 },
  reducers: {
    playSong(state, payload) {
      return { ...state, isPaused: false, currentSong: payload.id };
    },
    pause(state) {
      return { ...state, isPaused: true };
    }
  },
  effects: dispatch => ({})
};

export default player;
