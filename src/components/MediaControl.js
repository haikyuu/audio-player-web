import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAudio } from "react-use";

const styles = theme => ({
  card: {},
  actionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  actions: {},
  controls: {},
  playIcon: {}
});
function MediaControl(props) {
  const {
    classes,
    isPaused = true,
    play,
    pause,
    onNext,
    onPrevious,
    currentSongUrl
  } = props;

  const [audio, state, controls] = useAudio({
    src: currentSongUrl,
    autoPlay: true
  });
  const onPlay = () => {
    play();
    controls.play();
  };
  const onPause = () => {
    pause();
    controls.pause();
  };
  const songProgress = Math.round(100 * state.time / state.duration);
  return (
    <Card className={classes.card}>
      {audio}
      <LinearProgress
        color="secondary"
        value={songProgress}
        variant="determinate"
      />
      <div className={classes.actionsContainer}>
        <CardActions className={classes.actions}>
          <IconButton
            disabled={!currentSongUrl}
            aria-label="Previous"
            onClick={onPrevious}
            color="primary"
          >
            <SkipPreviousIcon color="inherit" fontSize="large" />
          </IconButton>
          <IconButton
            disabled={!currentSongUrl}
            onClick={isPaused ? onPlay : onPause}
            aria-label="Play/pause"
            color="primary"
          >
            {isPaused ? (
              <PlayArrowIcon
                color="inherit"
                fontSize="large"
                className={classes.playIcon}
              />
            ) : (
              <PauseIcon
                fontSize="large"
                color="primary"
                className={classes.playIcon}
              />
            )}
          </IconButton>
          <IconButton
            disabled={!currentSongUrl}
            aria-label="Next"
            onClick={onNext}
            color="primary"
          >
            <SkipNextIcon color="inherit" fontSize="large" />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
export default withStyles(styles, { withTheme: true })(MediaControl);
