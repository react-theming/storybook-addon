import { styled, keyframes } from '@storybook/theming';
import { Block } from '@storybook/addon-devkit';
import { bounceInUp } from 'react-animations';

const animate = keyframes`${bounceInUp}`;

export const Container = styled(Block)`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: auto;
  label: Container;
`;

export const PickerHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 50%, 0.35);
  height: 1px;
  flex-grow: 1;
`;

export const Animate = styled.div`
  animation: 3s ${animate};
`;
