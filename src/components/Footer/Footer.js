import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { fontSizes } from '../../utilities/sizes'
import colors from '../../utilities/colors'

const Footer = ({text, link}) => {

  let navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.footer}  onPress={() => navigation.navigate(link)}>
      <Text style={styles.text}>{text}<Text style={styles.spanText}>{link}</Text></Text>
    </TouchableOpacity>  
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    justifyContent:'center',
    alignContent:'center',
    alignItems: 'center'
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: fontSizes.md,
  },

  spanText: {
    color: colors.lightOrange,
    fontFamily: 'Poppins_400Regular'
  }

})