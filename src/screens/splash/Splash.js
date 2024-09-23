import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import config from '../../config';
import {goToTopNavigation} from '../../components/NavigationRef';
import AppImage from '../../components/AppImage';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    const res = await AsyncStorage.getItem(config.AsyncKeys.USER_LOGGED_IN);
    const result = JSON.parse(res);
    console.log('result', result);
    setTimeout(function () {
      if (result == true) {
        goToTopNavigation(config.routes.HOME_SCREEN);
      } else {
        navigation.replace(config.routes.ONBOARDING);
      }
    }, 3000);
  };
  return (
    <SafeAreaView style={styles.bgImg}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={config.colors.white}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AppImage
          imageSource={config.ImageList.appLogo}
          imageStyle={{width: 273, height: 50}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    backgroundColor: config.colors.white,
  },
  logoimg: {
    height: config.constants.Height,
    width: config.constants.Width,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontFamily: config.fonts.TeXGyreAdventorFont,
    fontSize: 36,
    color: config.colors.GreenColor,
  },
  primaryText: {
    fontFamily: config.fonts.PPHattonFont,
    fontSize: 16,
    color: config.colors.black,
  },
});

export default Splash;
