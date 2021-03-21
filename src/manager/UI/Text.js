import React from 'react';
import { styled } from '@storybook/theming';

const Span = styled.span`
  margin-left: 10px;
`;

const Text = ({ children }) => <Span>{children}</Span>;

export default Text;
