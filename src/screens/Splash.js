import { StyleSheet, Image, View } from 'react-native';
import Header from '../components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import colors from '../utilities/colors';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';

const Splash = () => {
  let navigation = useNavigation();

  const submitHandler = () => {
    navigation.replace('Sign Up');
  };

  return (
    <View style={styles.container}>
      <Header
        title='Get things done with TODo'
        text='An app that makes you timetable easy for you'
      />

      <Image style={styles.img} source={require('../imgs/manWithMob.jpg')} />

      <ButtonSecondary name='Get Started' submitHandler={submitHandler} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
  },

  img: {
    width: 250,
    height: 200,
    opacity: 0.9,
  },
});
