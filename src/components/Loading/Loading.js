import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../utils/colors';

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
