import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import imageIndex from '../../assets';
import colors from '../../theme/colors';
import {HeaderProps} from './header.interface';
import fonts from '../../theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
const Header = (props: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={props.onBack}>
          <imageIndex.svgBackIcon fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={props.onSearch}>
        <imageIndex.svgSearchIcon fill={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  backBtn: {
    padding: 8,
  },
  searchBtn: {
    padding: 8,
  },
  titleText: {
    fontFamily: fonts.titilliumWebRegular,
    fontSize: 15,
    color: colors.white,
    marginLeft: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.black,
    shadowColor: '#F1F1F1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 3,
  },
});
