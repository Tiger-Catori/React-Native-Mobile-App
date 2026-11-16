import { StyleSheet, Text, View, FlatList} from "react-native";
import { vs, s } from "react-native-size-matters";
import TobTapsComponent from "../components/TopTabs";
import MeditationCardComponent from "../components/MeditationCard";
import { dummyData } from "../data/data";

const HomeScreenComponent = () => {
  return (
    <HomeScreen />
  )
}
export default HomeScreenComponent;

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text__title}>Meditations</Text>
      <Text style={styles.text__subtitle}>
        Lorem ipsum is simply dummy text
      </Text>
      <TobTapsComponent />
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MeditationCardComponent imageURL={item.image} title={item.title} date={item.date} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: vs(10),
    paddingHorizontal: s(16),
  },
  text__title: {
    color: "#1D150F",
    fontSize: s(20),
    fontWeight: 500,
    marginBottom: vs(6)
  },
  text__subtitle: {
    fontSize: s(14),
    color: '#2C2016',
    marginBottom: vs(16)
  },
  columWrapperStyle: {
    marginBottom: vs(12),
    justifyContent: 'space-between'
  },
  contentContainerStyle: {
    paddingBottom: vs(150),
    paddingTop: vs(24)
  }
})
