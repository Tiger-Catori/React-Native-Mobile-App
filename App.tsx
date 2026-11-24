import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import IntroScreenComponent from './src/screens/IntroScreen';
import ContactUsScreenComponent from './src/screens/ContactUsScreen';
import HomeScreenComponent from './src/screens/HomeScreen';
import PaymentScreenComponent from './src/screens/PaymentScreen';
import MyTabs from './src/navigation/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <MyTabs/>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
