import React from 'react';

import * as styled from './Toolbar.styled';

const Toolbar = ({ children, footer }) => (
  <styled.Container footer={footer}>{children}</styled.Container>
);

export default Toolbar;
