import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
  I18nManager,
  Animated,
} from 'react-native';
import config from '../config';

const AppTextInput = ({
  containerStyle,
  inputTextLabel,
  showVerticalLine,
  viewStyle,
  textInputStyle,
  onChangeText,
  editable,
  value,
  textAlignVertical,
  autoCapitalize,
  rightIcon,
  rightIconStyle,
  rightIconViewStyle,
  rightIconPress,
  leftIcon,
  leftIconStyle,
  leftIconPress,
  onRefs,
  secureTextEntry,
  placeholder,
  keyboardType,
  inputLabelmarginHorizontal,
  multiline,
  numberOfLines,
  labelStyle,
  maxLength,
  inputTextLabelVisible = true,
  onSubmitEditing,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!props.value) {
      setIsFocused(false);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });
  return (
    <View style={[styles.mainContainer, containerStyle]}>

    <View
      style={[
        styles.contentView,
        viewStyle,
        {
          borderColor: isFocused
            ? config.colors.cyanBlueColor
            : config.colors.white,
        },
      ]}>
      {leftIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={leftIconPress}
          style={{
            borderLeftColor: '#D6D6D6',
            borderLeftWidth:
              showVerticalLine && showVerticalLine == true ? 1 : 0,
          }}>
          <Image
            source={leftIcon && leftIcon}
            style={[styles.leftIconImage, leftIconStyle]}
          />
        </TouchableOpacity>
      )}
      <Animated.Text
        style={[
          {
            ...styles.labelText,
            textAlign: 'left',
            marginHorizontal:
              inputLabelmarginHorizontal && inputLabelmarginHorizontal,
            transform: [{translateY}],
          },
          labelStyle,
        ]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        {...props}
        secureTextEntry={secureTextEntry}
        style={[styles.textInput, textInputStyle]}
        ref={inputRef => {
          onRefs && onRefs(inputRef);
        }}
        pointerEvents={editable == false ? 'none' : 'auto'}
        autoCorrect={false}
        keyboardType={keyboardType}
        multiline={multiline ? multiline : false}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        autoCapitalize={'none'}
        textAlignVertical={textAlignVertical}
        editable={editable}
        value={value}
        caretHidden={false}
        maxLength={maxLength}
        returnKeyType={'done'}
        onSubmitEditing={onSubmitEditing}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {rightIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={rightIconPress}
          style={[
            rightIconViewStyle,
            {
              borderLeftColor: '#D6D6D6',
              borderLeftWidth:
                showVerticalLine && showVerticalLine == true ? 1 : 0,
            },
          ]}>
          <Image
            source={rightIcon && rightIcon}
            style={[styles.rightIconImage, rightIconStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: config.colors.white,
  },
  textInput: {
    height: 56,
    fontSize: 14,
    color: config.colors.black,

    fontFamily: config.fonts.Poppins_Regular,
  },
  eyeIcon: {
    height: 40,
    width: 40,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContiner: {
    marginBottom: 5,
  },
  labelText: {
    fontFamily: config.fonts.PrimaryFont,
    color: config.colors.placeHolderColor,
    fontSize: 12,
    position: 'absolute',
    left: 15,
    top: 20,
  },
  rightIconImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
  leftIconImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
});

export default AppTextInput;
