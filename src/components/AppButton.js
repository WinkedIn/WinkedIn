import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../config';
import LinearGradient from 'react-native-linear-gradient';
const AppButton = ({buttonStyle, textStyle, text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // marginHorizontal: 20,
  },

  button: {
    borderRadius: 24,
    height: 48,
    backgroundColor: config.colors.pinkColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: config.colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: config.fonts.LibreFranklinBold,
    lineHeight: 24,
  },
});

export default AppButton;
