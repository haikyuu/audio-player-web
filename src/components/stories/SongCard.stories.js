import React from "react";
import { storiesOf } from "@storybook/react";
import SongCard from '../SongCard'

const defaultProps = {
        title: "Ma philosophie",
        artist: "Amel Bent"
}
storiesOf("SongCard", module)
  .add("default", () => <SongCard {...defaultProps} />)

  .add("selected", () => <SongCard isCurrentSong {...defaultProps} />);
