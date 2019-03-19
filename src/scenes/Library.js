import React from "react";
import SongCard from "../components/SongCard";
import MediaControl from "../components/MediaControl";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getSongUrl } from "../helpers";

const styles = theme => ({
  container: { height: "100%", display: "flex", flexDirection: "column" },
  mediaControl: {},
  library: {
    maxWidth: 800,
    flex: 1,
    alignSelf: "center",
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  songCard: {}
});
class Library extends React.Component {
  async componentDidMount() {
    await this.props.loadSongsAsync();
  }
  render() {
    const {
      classes,
      songs,
      setCurrentSong,
      player,
      play,
      pause,
      currentSongUrl
    } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.library}>
          {songs.map(song => (
            <SongCard
              onPlay={() => setCurrentSong(song)}
              key={song.id}
              isCurrentSong={song.id === player.currentSong}
              {...song}
            />
          ))}
        </div>
        <MediaControl
          {...player}
          play={play}
          pause={pause}
          currentSongUrl={currentSongUrl}
        />
      </div>
    );
  }
}

const mapState = state => ({
  songs: state.songs.ids.map(id => state.songs.data[id]),
  loading: state.songs.loading,
  hasError: state.songs.hasError,
  player: state.player,
  currentSongUrl: getSongUrl(state.songs.data[state.player.currentSong])
});

const mapDispatch = ({
  songs: { loadSongsAsync },
  player: { play, pause, setCurrentSong }
}) => ({
  loadSongsAsync,
  play,
  setCurrentSong,
  pause
});
export const StyledLibrary = withStyles(styles, { withTheme: true })(Library);
const ConnectedLibrary = connect(mapState, mapDispatch)(StyledLibrary);

export default ConnectedLibrary;
