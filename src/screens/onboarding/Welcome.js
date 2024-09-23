import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppImage from '../../components/AppImage';
import config from '../../config';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: config.colors.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
          }}>
          <AppImage
            imageSource={config.ImageList.appLogo}
            imageStyle={{height: 32, width: 180}}
          />
          <Text
            style={{
              color: config.colors.black,
              fontSize: 24,
              fontFamily: config.fonts.LibreFranklinBold,
              lineHeight: 30,
              marginTop: 20,
            }}>{`Find a love full of purpose and connection!`}</Text>
          <Text
            style={{
              color: config.colors.black,
              fontSize: 16,
              fontFamily: config.fonts.LibreFranklinRegularFont,
              lineHeight: 20,
              marginTop: 10,
            }}>{`Platform for working professionals Verified using their work email LinkedIn as a source of truth`}</Text>
        </View>
        <AppImage
          imageSource={config.ImageList.onboarding2Image}
          imageStyle={{
            height: 280,
            width: 280,
            alignSelf: 'center',
            marginTop: 40,
          }}
        />
      </ScrollView>
      <View
        style={{
          marginVertical: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate(config.routes.REGISTER);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: config.colors.blueColor,
            borderRadius: 50,
            height: 48,
          }}>
          <AppImage
            imageSource={config.ImageList.linkedInLogo}
            imageStyle={{height: 24, width: 24}}
          />
          <Text
            style={{
              color: config.colors.white,
              fontSize: 16,
              fontFamily: config.fonts.LibreFranklinBold,
              lineHeight: 20,
              marginHorizontal: 10,
            }}>{`Continue with LinkedIn`}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: config.colors.black,
              fontSize: 14,
              fontFamily: config.fonts.LibreFranklinRegularFont,
              lineHeight: 21,
            }}>{`By continuing, you agree to the WinkedIn `}</Text>
          <Text
            style={{
              color: config.colors.pinkColor,
              fontSize: 14,
              fontFamily: config.fonts.LibreFranklinSemiBold,
              lineHeight: 21,
            }}>{`Terms & Conditions.`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
