import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { s, vs } from "react-native-size-matters";

const TobTapsComponent = () => {
  return (<TobTaps/>)

}
export default TobTapsComponent;

const tabsArr = ["Live", "Recorded"];
const ACTIVE_BG = '#1077AF';
const ACTIVE_TEXT = '#fff';
const INACTIVE_TEXT = '#2c2016';

const TobTaps = () => {

  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {
        tabsArr.map((tabName) => {
          const isActive = activeTab === tabName;

          return (
            <TouchableOpacity onPress={() => setActiveTab(tabName)}
              key={tabName}
              style={[styles.tabButton,
            isActive && { backgroundColor: ACTIVE_BG }]}>
              <Text style={isActive ? styles.activeText : styles.inActiveText}>
                {tabName}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f4',
    borderRadius: s(8),
    height: vs(40),
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(4)
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vs(32),
    borderRadius: s(6),
    flex: 1
  },
  activeText: {
    color: ACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: 500
  },
  inActiveText: {
    color: INACTIVE_TEXT,
    fontSize: s(14)
  }
})
