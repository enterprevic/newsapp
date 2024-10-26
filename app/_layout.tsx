import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";
import {useFonts} from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const navigation = useNavigation();
  useFonts({'Metropolis-Regular': require('../assets/fonts/Metropolis-Regular.otf')})
  useEffect(() => {
    // Automatically navigate to the 'homescreen' after 2.5 seconds
    
    const timer = setTimeout(() => {
      navigation.navigate('(tabs)'); // Correct path based on file structure
    }, 2500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (

    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
       <Stack.Screen name="(tabs)" options={{ headerShown: false }}/> 
      {/* <Stack.Screen name="(tabs)/fullread" />
      <Stack.Screen name="(tabs)/settings" /> */}
    </Stack>

  );


}
