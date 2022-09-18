import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Pressable, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../utilities/colors'
import { fontSizes } from '../../utilities/sizes'
import { spacing } from '../../utilities/sizes'
import ButtonSecondary from '../Buttons/ButtonSecondary'

const Form = ({link}) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    }
    )

  }

  const submitHandler = () => {
    console.warn(inputs.name, inputs.email, inputs.password);
    setInputs({});
  }

  return (

    <KeyboardAvoidingView style={styles.container} behavior='hieght'>
      <View style={styles.inputContainer}>

        <TextInput style={styles.input} onChangeText={value => handleChange('name', value)} clearTextOnFocus={true} value={inputs.name} autoComplete='name' placeholder='Enter your full name'/>
        
        <TextInput style={styles.input} autoComplete='email' onChangeText={value => handleChange('email', value)} value={inputs.email} placeholder='Enter your email'/>
        
        <TextInput style={styles.input} onChangeText={value => handleChange('password', value)} value={inputs.password} placeholder='Enter password'/>
        
        <TextInput style={styles.input} placeholder='Confirm password'/>
    </View>
      
      <ButtonSecondary text={link} />
     

      <TouchableOpacity style={styles.footer}       onPress={() => navigation.navigate(link)}>
        <Text style={styles.text}> Already have an account ? <Text style={styles.spanText}>{link}</Text></Text>
      </TouchableOpacity>  
    
    </KeyboardAvoidingView>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    width: '100%'
  },

  input: {
    width: 350,
    margin: 12,
    padding: 12,
    borderRadius: 30,
    backgroundColor: colors.white,
    fontFamily: 'Poppins_400Regular'
    
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: fontSizes.md,
    lineHeight: spacing.xxl
  },

  spanText: {
    color: colors.lightOrange,
    fontFamily: 'Poppins_400Regular'
  }
})