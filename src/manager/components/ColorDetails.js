import React from 'react';
import { ChromePicker } from 'react-color';

import * as styled from './ColorDetails.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import Notification from '../UI/Notification/Notification';
import { copyToClipboard } from '../../utils';

const ColorDetails = ({ selectedValue, selectedWord, onChange, isSbDark }) => {
  const { value, name, type } = selectedValue || selectedWord || {};
  const isColor = type === 'color';

  const handleChange = colorInfo => {
    const { hex } = colorInfo;
    onChange(hex);
  };

  return (
    <styled.Container size={350}>
      <Toolbar>
        <Caption>{name || 'Select color'}</Caption>
      </Toolbar>
      <styled.PickerHolder>
        {isColor ? (
          <styled.Animate>
            <ChromePicker color={value} onChangeComplete={handleChange} />
          </styled.Animate>
        ) : (
          <Notification />
        )}
      </styled.PickerHolder>
      <Toolbar footer>
        <IconButton
          isDark={isSbDark}
          icon="copy"
          title="copy to clipboard"
          onClick={copyToClipboard(value)}
        />
        <Text>{value || 'Select color'}</Text>
      </Toolbar>
    </styled.Container>
  );
};

export default ColorDetails;
