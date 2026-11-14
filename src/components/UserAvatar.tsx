import { StyleSheet, Text, View, Image } from "react-native";
import {s} from 'react-native-size-matters'

const UserAvatarComponent = () => {
  return (
    <UserAvatar />
  )
}
export default UserAvatarComponent;

const UserAvatar = () => {
  return (
    <Image
      source={{uri:"https://img.magnific.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740&q=80"}}
      style={styles.avatar} />
  )
}

const styles = StyleSheet.create({
  avatar: {
    height: s(40),
    width: s(40),
    borderRadius: s(20)
  }
})
