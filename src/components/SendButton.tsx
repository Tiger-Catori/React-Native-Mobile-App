import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s } from 'react-native-size-matters'
import { SendIcon } from "../assets/icons";
const SendButtonComponent = () => {
  return (
    <SendButton/>
  )
}
export default SendButtonComponent;

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendIcon />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1077AF'

  }
})
