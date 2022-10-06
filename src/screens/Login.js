import { Image, KeyboardAvoidingView, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ButtonSecondary from '@components/Buttons/ButtonSecondary';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';
import { useAuth } from '@context/Authentication';

const Login = () => {
  const styles = createStyle(useTheme());
  const { signIn } = useAuth();

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
