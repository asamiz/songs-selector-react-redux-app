import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Never Give Up", duration: "4:05" },
    { title: "Girls Like You", duration: "3:55" },
    { title: "Way you are", duration: "2:55" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
