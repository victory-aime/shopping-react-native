import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import ApplicationNavigator from './src/navigators/Application';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <ApplicationNavigator />;
}
