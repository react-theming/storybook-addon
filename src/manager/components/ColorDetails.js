import React from 'react';
import { ChromePicker } from 'react-color';

import * as styled from './ColorDetails.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import { copyToClipboard, guardHEXColor } from '../../utils';

const ColorDetails = ({ selectedValue, selectedWord, onChange, isSbDark }) => {
  const { value, name, type } = selectedValue || {};
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
        {isColor && (
          <ChromePicker color={value} onChangeComplete={handleChange} />
        )}
        {selectedWord && guardHEXColor(selectedWord) && <ChromePicker color={selectedWord} />}
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
