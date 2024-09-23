import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  I18nManager,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  PanResponder,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import config from '../../config';
import AppButton from '../../components/AppButton';
import AppImage from '../../components/AppImage';

const Onboarding = ({navigation}) => {
  const slider = useRef(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState([1, 2]);
  const slides = [
    {
      key: 's1',
      component: (
        <View style={{flex: 1, paddingHorizontal: 20}}>
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
              }}>{`It's about finding that perfect match who's not on your Slack, but on your wavelength!`}</Text>
            <Text
              style={{
                color: config.colors.black,
                fontSize: 16,
                fontFamily: config.fonts.LibreFranklinRegularFont,
                lineHeight: 20,
                marginTop: 10,
              }}>{`Algorithm to matches not only personal but professional interests.`}</Text>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              {slidesLength.length > 1 &&
                slidesLength.map((_, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.dot,
                      i === currentSlideIndex
                        ? {
                            backgroundColor: config.colors.pinkColor,
                            width: 24,
                          }
                        : {backgroundColor: config.colors.lightGreyColor},
                    ]}
                    onPress={() => slider?.current?.goToSlide(i, true)}
                  />
                ))}
            </View>
          </View>
          <AppImage
            imageSource={config.ImageList.onboarding1Image}
            imageStyle={{
              height: 280,
              width: 280,
              marginTop: 40,
              alignSelf: 'center',
            }}
          />
        </View>
      ),
    },
    {
      key: 's2',
      component: (
        <View style={{flex: 1, paddingHorizontal: 20}}>
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
              }}>{`Goodbye to endless swipes and questionable profiles!`}</Text>
            <Text
              style={{
                color: config.colors.black,
                fontSize: 16,
                fontFamily: config.fonts.LibreFranklinRegularFont,
                lineHeight: 20,
                marginTop: 10,
              }}>{`Connect with verified professionals who are ready to mingle.`}</Text>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              {slidesLength.length > 1 &&
                slidesLength.map((_, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.dot,
                      i === currentSlideIndex
                        ? {
                            backgroundColor: config.colors.pinkColor,
                            width: 24,
                          }
                        : {backgroundColor: config.colors.lightGreyColor},
                    ]}
                    onPress={() => slider?.current?.goToSlide(i, true)}
                  />
                ))}
            </View>
          </View>
          <AppImage
            imageSource={config.ImageList.onboarding2Image}
            imageStyle={{
              height: 280,
              width: 280,
              marginTop: 40,
              alignSelf: 'center',
            }}
          />
        </View>
      ),
    },
  ];

  const RenderItem = ({item}) => {
    return (
      <View style={styles.slideCss}>
        <StatusBar
          barStyle={`dark-content`}
          backgroundColor={config.colors.white}
        />

        {item.component}
      </View>
    );
  };
  const _renderPagination = activeIndex => {
    return (
      <View
        style={{
          backgroundColor: config.colors.white,
          padding: 20,
        }}>
        {currentSlideIndex < 1 ? (
          <View style={styles.buttonContainer}>
            <AppButton
              text={`Skip`}
              buttonStyle={{
                width: '48%',
                backgroundColor: config.colors.white,
              }}
              textStyle={{
                color: config.colors.pinkColor,
                alignSelf: 'flex-start',
              }}
              onPress={() =>
                slider?.current?.goToSlide(currentSlideIndex + 1, true)
              }
            />
            <AppButton
              text={`Next`}
              buttonStyle={{width: '48%'}}
              onPress={() =>
                slider?.current?.goToSlide(currentSlideIndex + 1, true)
              }
            />
          </View>
        ) : (
          <AppButton
            text={`Next`}
            onPress={() => navigation.navigate(config.routes.WELCOME)}
          />
        )}
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        ref={slider}
        keyExtractor={item => item.key}
        onSlideChange={(index, lastIndex) => {
          setCurrentSlideIndex(index);
        }}
        renderPagination={_renderPagination}
        data={slides}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideCss: {
    flex: 1,
    backgroundColor: config.colors.white,
  },
  logoImg: {
    alignSelf: 'center',
    height: 51,
    width: 130,
    marginTop: 20,
  },
  nextText: {
    fontSize: 16,
    textAlign: 'center',
    color: config.colors.white,
    fontFamily: config.fonts.Poppins_Medium,
  },
  introImageStyle: {
    width: 268,
    height: 264,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  introTextStyle: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 25,
    color: '#000',
    fontFamily: config.fonts.Poppins_SemiBold,
  },
  text1: {
    color: config.colors.black,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24,
    marginTop: 15,
    fontFamily: config.fonts.Poppins_Regular,
  },
  buttonCircle: {
    width: 180,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: config.colors.buttonColor,
    alignSelf: 'center',
    // marginTop:10
  },
  next_icon: {
    marginHorizontal: 5,
    height: 8,
    width: 23,
    transform: [{rotate: I18nManager.isRTL ? '180deg' : '0deg'}],
    // marginTop:5
  },
  skipText: {
    color: config.colors.black,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: config.fonts.Poppins_Medium,
  },
  getstartText: {
    color: config.colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 50,
    left: 5,
    right: 5,
    alignItems: 'center',
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 25,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
