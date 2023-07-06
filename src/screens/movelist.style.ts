import colors from '../theme/colors';
import fonts from '../theme/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toolTipStyle: {
    width: 'auto',
    right: 0,
    left: 0,
  },
  nodataLabel: {
    fontFamily: fonts.titilliumWebBold,
    fontSize: 15,
    color: colors.white,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listcontentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  posterName: {
    color: 'white',
    marginTop: 8,
    fontFamily: fonts.titilliumWebRegular,
    fontSize: 16,
    marginLeft: 5,
  },
  imageStyle: {
    width: '100%',
    height: 180,
  },
  content: {
    width: '30%',
    marginHorizontal: 7,
    marginTop: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
