import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import IntroScreenComponent from './src/screens/IntroScreen';
import ContactUsScreenComponent from './src/screens/ContactUsScreen';
import HomeScreenComponent from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/*<IntroScreenComponent />*/}
        {/*<ContactUsScreenComponent />*/}
        <HomeScreenComponent />
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
