import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Image,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../utilities/colors';
import { fontSizes, spacing } from '../utilities/sizes';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import user_api from '../api/user_api';

const Login = () => {
  let navigation = useNavigation();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = () => {
    user_api({
      username: inputs.username,
      password: inputs.password,
    }).then((result) => {
      console.log(result.data);
      if (result.status === 200) {
        navigation.replace('Dashboard');
      }
    });
    setInputs({});
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Header title='Welcome back!' text='Lets help you meet your tasks' />

      <Image style={styles.img} source={require('../imgs/loginScr.jpg')} />

      <View>
        <TextInput
          style={styles.input}
          autoComplete='username'
          onChangeText={(value) => handleChange('username', value)}
          value={inputs.username}
          placeholder='Enter your username'
        />

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('password', value)}
          value={inputs.password}
          placeholder='Enter password'
        />

        <ButtonSecondary name='Login' submitHandler={submitHandler} />
      </View>
      <Footer text="Don't have an account ? " link='Sign Up' />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
  },

  input: {
    width: 320,
    margin: 12,
    padding: 12,
    borderRadius: 30,
    backgroundColor: colors.white,
    fontFamily: 'Poppins_400Regular',
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: fontSizes.md,
    lineHeight: spacing.xxl,
  },

  img: {
    width: 250,
    height: 250,
    opacity: 0.9,
  },
});
