import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import config from '../config';
import {UIReducer} from '../redux/reducers';

/**
 * This component is for custom loader. Whenever loading state changed in redux
 * it will show/hide loader
 */
const Apploader = () => {
  const isLoading = useSelector(UIReducer.selectLoader);
  // console.log('isLoading', isLoading)
  if (!isLoading) {
    return null;
  }

  const spinValue = new Animated.Value(0);
  const spinLoader = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spinLoader());
  };

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.mainBackViewStyle}>
      {spinLoader()}
      <View style={styles.loaderStyle}>
        <Animated.View style={{transform: [{rotate}]}}>
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              tintColor: config.colors.skyColor,
            }}
            source={config.ImageList.loadingIcon}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBackViewStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0.1)',
  },
  loaderStyle: {
    backgroundColor: config.colors.aliceBlueColor,
    maxWidth: '80%',
    zIndex: 5,
    borderRadius: 16,
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default Apploader;
