import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './src/context/Authentication';
import CustomStatusBar from './src/components/StatusBar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import { ThemeProvider } from './src/context/Theme';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  useEffect(() => {
    async function prapare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prapare();
  }, []);

  if (!fontsLoaded) return undefined;

  SplashScreen.hideAsync();

  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <CustomStatusBar />
          <StackNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
