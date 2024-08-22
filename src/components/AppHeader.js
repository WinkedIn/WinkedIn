import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import config from '../config';

const AppHeader = ({
  title,
  navigation,
  leftImg,
  rightimg,
  rightImageStyle,
  leftImageEnabled=true,
  onRightPress,
  onPress,
  tintColor,
  color,
  backgroundColor
}) => {

  return (
    <View style={[styles.container,{    backgroundColor:backgroundColor?backgroundColor:config.colors.white
  }]}>
    {leftImageEnabled&&
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => (onPress ? onPress() : navigation.goBack())}>
        <Image
          source={leftImg?leftImg:config.ImageList.BackArrowIcon}
          style={[
            styles.backimgStyle,
            {tintColor: tintColor && tintColor },
          ]}
        />
      </TouchableOpacity>}

      <View style={{justifyContent: 'center',  flex: 1}}>
        <Text style={[styles.textStyle, {color: color ? color: config.colors.black}]}>
          {title}
        </Text>
      </View>

      {rightimg && (
        <TouchableOpacity activeOpacity={0.6} onPress={onRightPress}>
          <Image source={rightimg} style={[styles.rightimgStyle,rightImageStyle]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    flexDirection: 'row',
    width: '100%',
    height: 55,
    alignItems: 'center',

  },
  textStyle: {
    fontFamily: config.fonts.HeadingFont,
    color: config.colors.black,
    fontSize: 16,
    lineHeight:24,
    textAlign:'center'
  },
  backimgStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightimgStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    // right: 10,
  },
});
