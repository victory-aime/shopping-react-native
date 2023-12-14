import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type MainParamsList = {
  GetStarted: undefined;
  HomeStack: undefined;
  Notification: undefined;
  Home: undefined;
  ProductList: undefined;
  test: undefined;
  test2: undefined;
  Settings: undefined;
};
export type AuthParamsList = {
  Login: undefined;
  Register: undefined;
};

export type ApplicationStackParamList = {
  Main: NavigatorScreenParams<MainParamsList>;
  Auth: NavigatorScreenParams<AuthParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
