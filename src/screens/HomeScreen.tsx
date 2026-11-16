import { StyleSheet, Text, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import TobTapsComponent from "../components/TopTabs";

const HomeScreenComponent = () => {
  return (
    <HomeScreen />
  )
}
export default HomeScreenComponent;

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text__title}>Meditations</Text>
      <Text style={styles.text__subtitle}>
        Lorem ipsum is simply dummy text
      </Text>
      <TobTapsComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: vs(20),
    paddingHorizontal: s(16),
  },
  text__title: {
    color: "#1D150F",
    fontSize: s(20),
    fontWeight: 500,
    marginBottom: vs(6)
  },
  text__subtitle: {
    fontSize: s(14),
    color: '#2C2016',
    marginBottom: vs(16)
  }
})
