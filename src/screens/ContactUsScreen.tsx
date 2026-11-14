import { StyleSheet, Text, View } from "react-native";
import UserAvatarComponent from "../components/UserAvatar";
import BackButtonComponent from "../components/BackButton";
import { s, vs } from 'react-native-size-matters'

const ContactUsScreenComponent = () => {
  return (
    <ContactUsScreen />
  )
}
export default ContactUsScreenComponent;

const ContactUsScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <BackButtonComponent />
        <UserAvatarComponent />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: vs(50),
    paddingHorizontal: s(17)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
