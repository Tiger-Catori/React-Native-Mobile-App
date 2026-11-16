import { StyleSheet, Text, View } from "react-native";
import UserAvatarComponent from "../components/UserAvatar";
import BackButtonComponent from "../components/BackButton";
import { s, vs } from 'react-native-size-matters'
import SocialSectionComponent from "../components/SocialSection";
import {FontAwesome, FontAwesome6} from '@expo/vector-icons'

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
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social media platforms</Text>
        <SocialSectionComponent icon={<FontAwesome name="whatsapp" size={26} color="#178AD9" />} title="WhatsApp"/>
        <SocialSectionComponent icon={<FontAwesome6 name="x-twitter" size={24} color="#178AD9" />} title={"X/Twitter"} />
        <SocialSectionComponent icon={<FontAwesome name="facebook-square" size={26} color="#178AD9" />} title={"Facebook"} />
        <SocialSectionComponent icon={<FontAwesome name="instagram" size={26} color="#178AD9" />} title={"Instagram"} />
        <SocialSectionComponent icon={<FontAwesome6 name="tiktok" size={25} color="#178AD9" />} title={"TikTok"} />
        <SocialSectionComponent icon={<FontAwesome name="telegram" size={26} color="#178AD9" />} title={"Telegram"} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: vs(10),
    paddingHorizontal: s(17)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialContainer: {
    backgroundColor: '#f5f5fa',
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22)
  },
  socialTitle: {
    fontWeight: 500,
    fontSize: s(16),
    textTransform: 'capitalize'
  },
  screenTitle: {
    fontWeight: 500,
    fontSize: s(30),
    marginTop: vs(20),
    marginStart: s(15)
  }
})
