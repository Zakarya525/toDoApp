import { Image, KeyboardAvoidingView, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ButtonSecondary from '@components/Buttons/ButtonSecondary';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { createStyle } from './Styles';
import { useAuth } from '@context/Authentication';
import { useTheme } from '@context/Theme';

const Login = () => {
  const { theme } = useTheme();
  const styles = createStyle(theme);
  const { signIn } = useAuth();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    signIn(data.name, data.password);
    reset();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset="25">
      <Header title="Welcome back!" text="Lets help you meet your tasks" />

      <Image style={styles.img} source={require('../imgs/loginScr.jpg')} />

      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>Username is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            minLength: {
              value: 8,
              message: 'Min length is 8',
            },
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder=" Enter password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.error}>Password is required.</Text>}

        <ButtonSecondary name="Login" submitHandler={handleSubmit(submitHandler)} />
      </View>
      <Footer text="Don't have an account ? " link="Sign Up" />
    </KeyboardAvoidingView>
  );
};

export default Login;
