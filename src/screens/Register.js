import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ButtonSecondary from '@components/Buttons/ButtonSecondary';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';
import { useAuth } from '../context/Authentication';

const Register = () => {
  const styles = createStyle(useTheme());
  const { signUp } = useAuth();
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
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Header title="Welcome onboard!" text="Lets help you meet your tasks" />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('name', value)}
          clearTextOnFocus={true}
          value={inputs.name}
          autoComplete="name"
          placeholder="Enter your username"
        />

        <TextInput
          style={styles.input}
          autoComplete="email"
          onChangeText={(value) => handleChange('email', value)}
          value={inputs.email}
          placeholder="Enter your email"
        />

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('password', value)}
          value={inputs.password}
          placeholder="Enter password"
          secureTextEntry
        />

        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />

        <ButtonSecondary name="Register" submitHandler={submitHandler} />
      </View>

      <Footer text="Already have an account ? " link="Sign In" />
    </KeyboardAvoidingView>
  );
};

export default Register;
