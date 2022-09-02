import React from 'react';
import { handleOnSwitch } from '../../../preview/onThemeSwitch';

export const ObserverThemeIds = ({ theme, themeInd,onThemeSwitch,}) => {
    React.useEffect(() => {
      handleOnSwitch({ theme, onThemeSwitch });
    }, [themeInd]);

    return null
  }

  export const MemoizedObserverThemeIds = React.memo(ObserverThemeIds)