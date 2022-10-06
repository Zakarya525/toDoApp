import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { ButtonSecondary } from '@components/Buttons';

const Form = ({ link }) => {
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

  return (
    <KeyboardAvoidingView style={styles.container} behavior='hieght'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('name', value)}
          clearTextOnFocus={true}
          value={inputs.name}
          autoComplete='name'
          placeholder='Enter your full name'
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
        />

        <TextInput style={styles.input} placeholder='Confirm password' />
      </View>

      <ButtonSecondary text={link} />

      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate(link)}>
        <Text style={styles.text}>
          {' '}
          Already have an account ? <Text style={styles.spanText}>{link}</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
