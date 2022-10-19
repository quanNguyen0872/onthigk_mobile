import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import img_plant_2 from '../assets/images/img_plant_2.jpg'

export default function banner() {
  return (
	<View style={styles.container}>
		<View style={styles.aSideLeft}>
			<Image style={{ width: 100, height: 150 }} source={img_plant_2}/>
		</View>
		<View style={styles.aSideRight}>
			<Text style={styles.text}>Plants Pots Shopping</Text>
			<Text style={styles.text}>See the list</Text>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 15,
		margin: 15,
		backgroundColor: '#3CB371'
	},
	aSideLeft: {
		flex: 1,
		padding: 15,
	},
	aSideRight: {
		flex: 3,
		paddingLeft: 15,
		justifyContent: 'center'
	},
	text: {
		fontSize: 21,
		color: 'white',
		fontWeight: 'bold',
		padding: 10
	}
});
