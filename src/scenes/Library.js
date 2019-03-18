import React from "react";
import SongCard from "../components/SongCard";
import MediaControl from "../components/MediaControl";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: { height: "100%", display: "flex", flexDirection: "column" },
  mediaControl: {},
  library: { maxWidth: 800,  flex: 1, alignSelf: 'center', marginBottom: theme.spacing.unit , marginTop: theme.spacing.unit },
  songCard: {}
});
class Library extends React.Component {
  async componentDidMount() {}
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.library}>
          <SongCard />
          <SongCard />
        </div>
        <MediaControl />
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Library)
