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
    theme,
    classes,
    isPaused = true,
    bufferProgress = 0,
    progress = 0,
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
          <IconButton aria-label="Previous" onClick={onPrevious}>
            <SkipPreviousIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton
            onClick={isPaused ? onPlay : onPause}
            aria-label="Play/pause"
          >
            {isPaused ? (
              <PlayArrowIcon
                color="primary"
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
          <IconButton aria-label="Next" onClick={onNext}>
            <SkipNextIcon color="primary" fontSize="large" />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
export default withStyles(styles, { withTheme: true })(MediaControl);
