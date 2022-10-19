import { useContext } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import PlantContext from "../store/Context";

function DetailsScreen() {
	const {plantCart} = useContext(PlantContext);
	Alert.alert(JSON.stringify(plantCart));
	return (
	  <View style={styles.container}>
		<Text>Details Screen</Text>
	  </View>
	);
  }

export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: "center",
	  justifyContent: "center",
	},
  });