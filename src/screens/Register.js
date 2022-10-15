import {
  KeyboardAvoidingView,
  Button,
  TextInput,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ButtonSecondary from '@components/Buttons/ButtonSecondary';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { createStyle } from './Styles';
import { useAuth } from '../context/Authentication';
import { useTheme } from '@context/Theme';

const Register = () => {
  const { theme } = useTheme();
  const styles = createStyle(theme);
  const { signUp } = useAuth();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    signUp(data.name, data.email, data.password);
    reset();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset="25">
      <Header title="Welcome onboard!" text="Lets help you meet your tasks" />
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
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.error}>Email is required.</Text>}

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

        <ButtonSecondary name="Register" submitHandler={handleSubmit(submitHandler)} />
      </View>
      <Footer text="Already have an account ? " link="Sign In" />
    </KeyboardAvoidingView>
  );
};

export default Register;
