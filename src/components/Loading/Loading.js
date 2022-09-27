import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../utilities/colors';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator
        animating={true}
        size='large'
        color={colors.lightOrange}
      />
    </View>
  );
};

export default Loading;
