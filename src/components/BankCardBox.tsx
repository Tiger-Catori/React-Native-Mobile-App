import { StyleSheet, View, Text } from "react-native";
import {s, vs} from 'react-native-size-matters'
import { BankCardIcon } from "../assets/icons";

const BankCardBoxComponent = () => {
  return (
    <BankCardBox />
  )
}
export default BankCardBoxComponent;

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      <BankCardIcon />
      <Text style={styles.bankCardText1}>No mastercard added</Text>
      <Text style={styles.bankCardText2}>You can add a mastercard and save it for later</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8f9",
    paddingVertical: vs(35),
    borderRadius: s(10),
    marginTop: vs(25),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(30)
  },
  bankCardText1: {
    color: "#32343e",
    fontWeight: 600,
    fontSize: s(18),
    marginTop: vs(17)
  },
  bankCardText2: {
    color: '#2d2d2d',
    marginTop: vs(6),
    fontSize: s(14),
    textAlign: 'center'
  }
})
