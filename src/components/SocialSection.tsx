import { View, StyleSheet, Text } from "react-native";
import {s, vs} from 'react-native-size-matters'
import SendButtonComponent from "./SendButton";
import SocialCircleComponent from "./SocialCircle";
import { FC } from "react";

interface SocialSection {
  title: string,
  icon: React.ReactNode
}

const SocialSectionComponent:FC<SocialSection> = ({ title, icon }) => {
  return (
    <SocialSection title={title} icon={icon} />
  )
}
export default SocialSectionComponent;

const SocialSection:FC<SocialSection> = ({title, icon}) => {
  return (
    <View style= {styles.container}>
      {/*<SocialCircleComponent />*/}
      <View style={styles.circle}>
        {icon}
      </View>
      <Text style={styles.text}>{title}</Text>
      <SendButtonComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15)
  },
  text: {
    marginStart: s(14),
    flex: 1,
    color: '#8083A3',
    fontSize: s(12)
  },
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: s(1),
    borderColor: "#E4E6E8"
  }
})
