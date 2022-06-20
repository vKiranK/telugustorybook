import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
/**
 * Primary UI component for user interaction
 */
export default {
  title: "Button",
  component Button,
}
export const Red () => <Button label="pressme" backgroundColor="red" />
/*
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
    rAudioPlayer
      src="https://vkirank.com/storybook/sounds/1_1.m4a"
      onPlay={e => console.log("onPlay")}
      // other props here
      hasDefaultKeyBindings="false"
    />
  );
};

*/
