import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';

const BackButtonComponent = () => {
  return <BackButton />;
};

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={s(20)} color="black" />
    </TouchableOpacity>
  );
};

export default BackButtonComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: s(40),
    width: s(40),
    borderRadius: s(20),
    backgroundColor: "#ECF0F4",
  },
});
