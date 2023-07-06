import React, {memo} from 'react';
import {View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomStatusBar: React.FC<any> = props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {height: insets.top, backgroundColor: props.backgroundColor},
        props.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
        translucent={props.translucent}
        {...props}
      />
    </View>
  );
};

CustomStatusBar.defaultProps = {
  backgroundColor: '#000',
  barStyle: 'light-content',
};

export default memo(CustomStatusBar);
