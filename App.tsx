import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import ApplicationNavigator from './src/navigators/Application';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <ApplicationNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
