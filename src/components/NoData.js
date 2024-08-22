import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import config from '../config';

const NoData = ({text, visible,width,height}) => {
  return (
    visible && (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          style={{width: width?width:160, height: height?height:160, resizeMode: 'contain'}}
          source={config.ImageList.noDataIcon}
        />
        <Text
          style={{
            fontFamily: config.fonts.HeadingFont,
            fontSize: width?width/6:24,
            color: config.colors.black,
            lineHeight: 34,
            textAlign: 'center',
          }}>
          {text ?? 'No Data Found!'}
        </Text>
      </View>
    )
  );
};

export default NoData;

const styles = StyleSheet.create({});
