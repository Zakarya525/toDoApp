import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthContext from '../../context/Authentication/authContext';

const Loading = () => {
  const { isSignedIn } = React.useContext(AuthContext);
  return (
    <View>
      {isSignedIn && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator color={'#000'} animating={true} size='small' />
        </View>
      )}
    </View>
  );
};

export default Loading;
