import { FlatList, StyleSheet, View } from "react-native";
import { CashIcon, MasterCardIcon, VisaIcon, PayPalIcon } from "../assets/icons";
import PayMethodCardComponent from "./PayMethodCard";
import {s, vs} from 'react-native-size-matters'
import { useState } from "react";

const PaymentListComponent = () => {
  return (
    <PaymentList />
  )
}
export default PaymentListComponent;

const paymentMethods = [
  { label: 'Cash', icon: <CashIcon /> },
  { label: 'Visa', icon: <VisaIcon /> },
  { label: 'Mastercard', icon: <MasterCardIcon /> },
  { label: 'PayPal', icon: <PayPalIcon />},
]


const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("")
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.containerStyle}
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>
          <PayMethodCardComponent
            isSelected={selectedMethod === item.label}
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.label)}
          />
        }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  containerStyle: {
    gap: s(16),
    paddingHorizontal: s(16),
    paddingTop: vs(15)
  }
})
