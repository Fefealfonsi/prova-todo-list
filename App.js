import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer} from '@react-navigation/native'
// import Navigator from './src/Navigator';
import Login from './src/pages/Login/index';
// import Registration from './src/pages/Registration/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <Text>AQUI-------</Text>
      {/* <Registration/> */}
    
    </View>
    // <NavigationContainer >
    //    <Navigator/> 
    // </NavigationContainer>
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

