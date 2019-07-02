import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Speed Of Sound", duration: "4:05" },
    { title: "Everybody Is Changing", duration: "3:50" },
    { title: "Scientist", duration: "4:33" },
    { title: "Fly on", duration: "5:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
