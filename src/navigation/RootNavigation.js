import * as React from 'react';
import {View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import config from '../config';

import {navigationRef} from '../components/NavigationRef';
import HomeScreen from '../screens/home/HomeScreen';
import Splash from '../screens/splash/Splash';
import Onboarding from '../screens/onboarding/Onboarding';
import Welcome from '../screens/onboarding/Welcome';
import Register from '../screens/onboarding/Register';
import OtpVerification from '../screens/onboarding/OtpVerification';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* {Platform.OS == 'android' ? (
          <Stack.Screen name="PushController" component={PushController} />
        ) : (
          <Stack.Screen
            name="PushControllerIos"
            component={PushControllerIos}
          />
        )}
    
        <Stack.Screen name={config.routes.ONBOARDING} component={Onboarding} /> */}
        <Stack.Screen name={config.routes.SPLASH} component={Splash} />
        <Stack.Screen name={config.routes.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={config.routes.WELCOME} component={Welcome} />
        <Stack.Screen name={config.routes.REGISTER} component={Register} />
        <Stack.Screen
          name={config.routes.OTP_VERIFICATION}
          component={OtpVerification}
        />
        <Stack.Screen name={config.routes.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
