import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type MainParamsList = {
  GetStarted: undefined;
  Home: undefined;
  Notification: undefined;
  test: undefined;
  test2: undefined;
};
export type AuthParamsList = {
  Login: undefined;
  Register: undefined;
};

export type ApplicationStackParamList = {
  Main: NavigatorScreenParams<MainParamsList>;
  Auth: NavigatorScreenParams<AuthParamsList>;
  Tabs: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
