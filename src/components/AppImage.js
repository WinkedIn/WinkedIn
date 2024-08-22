import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../config';

const AppImage = ({imageStyle, type, uri, imageSource}) => {
  return (
    <Image
      style={[styles.image, imageStyle]}
      source={uri?{uri: uri, placeholder: imageSource}:imageSource}
      
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
   
  },
});

export default AppImage;
