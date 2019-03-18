import React from "react";
import { storiesOf } from "@storybook/react";
import MediaControl from '../MediaControl'

storiesOf("MediaControl", module)
  .add("paused", () => <MediaControl  isPaused/>)

  .add("playing", () => <MediaControl />)
  .add("playing 50% progress", () => <MediaControl progress={50} bufferProgress={75}/>);
