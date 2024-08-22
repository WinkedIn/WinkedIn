import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../config';
import LinearGradient from 'react-native-linear-gradient';
const AppButton = ({
  color1 = config.colors.cyanLightBlueColor,
  color2 = config.colors.cyanBlueColor,
  buttonStyle,
  textStyle,
  text,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[color1, color2]}
        style={[
          {
            height: 44,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          },
          buttonStyle,
        ]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // marginHorizontal: 20,
  },

  button: {
    borderRadius: 10,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: config.colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: config.fonts.BigHeadingFont,
    lineHeight: 24,
  },
});

export default AppButton;
