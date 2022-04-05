import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import SeriesList from './src/Screens/SeriesList';
import SeriesDetail from './src/Screens/SeriesDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="SeriesList" component={SeriesList} options={{ title: 'TV Shows' }} />
          <Stack.Screen
            name="SeriesDetail"
            component={SeriesDetail}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
