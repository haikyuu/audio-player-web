import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const styles = theme => ({
  card: { display: "flex", marginBottom: theme.spacing.unit, minWidth: 350 },
  currentSong: { borderLeft: `solid 20px ${theme.palette.secondary.light}` },
  action: { transition: "border-width .6s" },
  content: { flex: 1 },
  playButton: { transition: 'opacity .6s' },
  hidden: {opacity: 0}
});
function SongCard(props) {
  const { classes, title, artist, isCurrentSong, onPlay } = props;
  return (
    <Card className={classes.card}>
      <CardActions
        className={`${classes.action} ${
          isCurrentSong ? classes.currentSong : ""
        }`}
      >
	      <IconButton className={`${classes.playButton} ${isCurrentSong ? classes.hidden: ''}`} aria-label="Play/pause" onClick={onPlay}>
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
      </CardActions>

      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default withStyles(styles, { withTheme: true })(SongCard);
