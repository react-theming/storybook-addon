import React from 'react';
import * as styled from './Notification.styled';

const Notification = () => {
  return (
    <styled.Box>
      <styled.Title>Changing the editor</styled.Title>
      <styled.SubTitle>
        At the top of the panel, click on the JSON or YAML button
      </styled.SubTitle>
      {/* <img src="./assets/editor.png" alt="editor" /> */}
      <styled.Wrapper>
        <styled.ButtonsEditor isDark={false}>
          <button type="button">JSON</button>
        </styled.ButtonsEditor>
        <styled.ButtonsEditor isDark={false}>
          <button type="button">YAML</button>
        </styled.ButtonsEditor>
      </styled.Wrapper>
    </styled.Box>
  );
};

export default Notification;
