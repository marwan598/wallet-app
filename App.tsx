import React from 'react';
import RootStack from './navigator/RootStack';
import 'react-native-gesture-handler';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootStack />
    </GestureHandlerRootView>
  );
}

export default App;
