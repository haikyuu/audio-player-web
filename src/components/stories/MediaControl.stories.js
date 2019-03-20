import React from "react";
import { storiesOf } from "@storybook/react";
import MediaControl from '../MediaControl'

storiesOf("MediaControl", module)
  .add("paused", () => <MediaControl isPaused currentSongUrl="a" />)

  .add("playing", () => <MediaControl isPaused={false} currentSongUrl="a"/>)
