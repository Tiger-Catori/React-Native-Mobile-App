import { StyleSheet, View, Text } from "react-native";
import {s, vs} from 'react-native-size-matters'
import BackButtonComponent from "../components/BackButton";
import PaymentListComponent from "../components/PaymentList";

const PaymentScreenComponent = () => {
  return (
    <PaymentScreen/>
  )
}
export default PaymentScreenComponent;

const PaymentScreen = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.childView}>
        <BackButtonComponent />
        <Text style={styles.text}>Payment</Text>
      </View>
      <PaymentListComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    paddingTop: vs(10),
  },
  childView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(37),
    paddingHorizontal: s(16)
  },
  text: {
    fontSize: s(17),
    color: "#181C2E",
    marginStart: s(12)
  }
})
