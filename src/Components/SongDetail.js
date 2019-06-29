import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div> No Song Selected.</div>;
  }
  return (
    <div>
      <h3>Song Details</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration} min
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
