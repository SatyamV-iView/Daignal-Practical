import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {InputProps} from './input.interface';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import imageIndex from '../../assets';
const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholderTextColor={colors.black}
        style={[styles.inputStyle, props.inputStyle]}
      />
      {props.showClose && (
        <TouchableOpacity onPress={props.onClose}>
          <imageIndex.svgCloseIcon
            fill={colors.gray}
            style={{marginRight: 16}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontFamily: fonts.titilliumWebRegular,
    color: colors.black,
    fontSize: 15,
    paddingLeft: 15,
  },
  container: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});
