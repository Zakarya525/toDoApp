import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import colors from '../utilities/colors';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import { fontSizes } from '../utilities/sizes';
import { spacing } from '../utilities/sizes';
import AuthContext from '../context/Authentication/authContext';

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = () => {
    signUp(inputs.name, inputs.email, inputs.password);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Header title='Welcome onboard!' text='Lets help you meet your tasks' />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('name', value)}
          clearTextOnFocus={true}
          value={inputs.name}
          autoComplete='name'
          placeholder='Enter your username'
        />

        <TextInput
          style={styles.input}
          autoComplete='email'
          onChangeText={(value) => handleChange('email', value)}
          value={inputs.email}
          placeholder='Enter your email'
        />

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('password', value)}
          value={inputs.password}
          placeholder='Enter password'
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder='Confirm password'
          secureTextEntry
        />

        <ButtonSecondary name='Register' submitHandler={submitHandler} />
      </View>

      <Footer text='Already have an account ? ' link='Sign In' />
    </KeyboardAvoidingView>
  );
};

export default Register;

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
});
