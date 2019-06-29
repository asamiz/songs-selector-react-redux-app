// Action Creator
export const selectSong = song => {
  return {
    // Action itself
    type: "SELECTED_SONG",
    payload: song
  };
};
