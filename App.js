import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SeriesList from './src/Screens/SeriesList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="SeriesList" component={SeriesList} options={{ title: 'TV Shows' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
