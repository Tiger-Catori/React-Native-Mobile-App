import { StyleSheet, View, Text } from "react-native";
import {s, vs} from 'react-native-size-matters'
import BackButtonComponent from "../components/BackButton";
import PaymentListComponent from "../components/PaymentList";
import BankCardBoxComponent from "../components/BankCardBox";
import AddButtonComponent from "../components/AddButton";

const PaymentScreenComponent = () => {
  return (
    <PaymentScreen/>
  )
}
export default PaymentScreenComponent;

const PaymentScreen = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.childView1}>
        <BackButtonComponent />
        <Text style={styles.text}>Payment</Text>
      </View>
      <PaymentListComponent />
      <View style={styles.childView2}>
        <BankCardBoxComponent />
        <AddButtonComponent />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    paddingTop: vs(10),
  },
  childView1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(20),
    paddingHorizontal: s(16)
  },
  childView2: {
    paddingHorizontal: s(16)
  },
  text: {
    fontSize: s(17),
    color: "#181C2E",
    marginStart: s(12)
  }
})
