import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
  I18nManager,
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
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      {inputTextLabelVisible && (
        <View style={styles.labelContiner}>
          <Text
            style={[
              {
                ...styles.labelText,
                textAlign: 'left',
                marginHorizontal:
                  inputLabelmarginHorizontal && inputLabelmarginHorizontal,
              },
              labelStyle,
            ]}>
            {inputTextLabel && inputTextLabel}
          </Text>
        </View>
      )}
      <View style={[styles.contentView, viewStyle]}>
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
        <TextInput
          {...props}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, textInputStyle]}
          ref={inputRef => {
            onRefs && onRefs(inputRef);
          }}
          pointerEvents={editable == false ? 'none' : 'auto'}
          autoCorrect={false}
          placeholderTextColor={config.colors.placeHolderColor}
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
  mainContainer: {},
  contentView: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: config.colors.lightGreyColor,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 48,
    fontSize: 14,
    color: config.colors.black,
    lineHeight: 21,
    fontFamily: config.fonts.LibreFranklinRegularFont,
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
    color: config.colors.labelColor,
    fontSize: 14,
  },
  rightIconImage: {
    width: 20,
    height: 20,
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
