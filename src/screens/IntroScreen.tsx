import { StyleSheet, View, Image } from "react-native"
import FoodLogo from "../assets/FoodLogo"
import SunImage from "../assets/SunImage"

const IntroScreenComponent = () => {
  return (
    <IntroScreen/>
  )
}

export default IntroScreenComponent

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunImage style={styles.sunImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sunImage: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
})
