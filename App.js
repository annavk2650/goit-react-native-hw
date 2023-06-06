import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

export default function App() {
  const routing = useRoute(false);

  const [fonstLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  if (!fonstLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
