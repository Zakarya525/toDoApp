import { Image, View } from 'react-native';
import Header from '../components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { createStyle } from './Styles';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import { useTheme } from '@context/Theme';
const Splash = () => {
  const styles = createStyle(useTheme());
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
