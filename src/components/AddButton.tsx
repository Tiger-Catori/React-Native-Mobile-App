import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { s, vs } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';

const AddButtonComponent = () => {
  return (
    <AddButton />
  )
}
export default AddButtonComponent;

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.addButtonBox}>
      <Feather name="plus" size={24} color="#ff7622" />
      <Text style={styles.text}>Add new</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  addButtonBox: {
    borderColor: '#f0f5fa',
    borderWidth: s(2),
    borderRadius: s(10),
    backgroundColor: '#fff',
    paddingVertical: vs(22),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: s(15),
    columnGap: s(2)
  },
  text: {
    textTransform: 'uppercase',
    fontSize: s(14),
    color: '#ff7622'
  }
})
