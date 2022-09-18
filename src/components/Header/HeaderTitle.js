import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { fontSizes } from '../../utilities/sizes'
import { spacing } from '../../utilities/sizes'

const HeaderTitle = ({text}) => {
  


  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: fontSizes.lg,
  }
})