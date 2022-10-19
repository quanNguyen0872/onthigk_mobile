import { StyleSheet, Text, View } from "react-native";
import Content from "../components/Content";
import Search from "../components/Search";
import Banner from "../components/Banner";
import PlantList from "../components/PlantList";

function HomeScreen() {
	return (
	  <View style={styles.container}>
      <Search/>
      <Content/>
      <Banner/>
      <PlantList/>
	  </View>
	);
  }

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
    flexDirection: 'column'
  },
});