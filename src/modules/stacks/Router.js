import {
  ActivityIndicator,
  SafeAreaView,
  Platform,
  NativeModules,
} from 'react-native';
import React from 'react';

import MainNavigator from '../../navigation/MainStack';

const Router = () => {
  return <MainNavigator />;
};

export default Router;
