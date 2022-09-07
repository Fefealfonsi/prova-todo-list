import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Navigator from './src/Navigator/index';

export default function App() {  
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

