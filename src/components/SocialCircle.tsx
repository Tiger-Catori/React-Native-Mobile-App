import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s } from 'react-native-size-matters'
import { SendIcon } from "../assets/icons";
const SocialCircleComponent = () => {
  return (
    <SocialCircle/>
  )
}
export default SocialCircleComponent;

const SocialCircle = () => {
  return (
    <View style={styles.circle}>

    </View>
  )
}


const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: s(1),
    borderColor: "#E4E6E8"
  }
})
