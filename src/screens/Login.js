import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Image,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import colors from '../utilities/colors';
import { fontSizes, spacing } from '../utilities/sizes';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import AuthContext from '../context/Authentication/authContext';

const Login = () => {
  const { signIn } = useContext(AuthContext);
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

  //will be implementing this using context
  const submitHandler = () => {
    signIn(inputs.username, inputs.password);
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
          secureTextEntry
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
