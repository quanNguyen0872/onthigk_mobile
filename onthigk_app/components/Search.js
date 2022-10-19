import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Search() {
  return (
	<View style={styles.container}>
		<TextInput style={styles.textInput} placeholder='Search for plants'/>
		<TouchableOpacity style={styles.searchButton}>
			<FontAwesome name="search-plus" size={28} color="black" />
		</TouchableOpacity>
	</View>
  )
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
	},
	textInput: {
		flex: 1,
		borderColor: 'black',
		borderRadius: 5,
		padding: 12,
		backgroundColor: '#d4cfcf'
	},
	searchButton: {
		padding: 12,
		marginLeft: 10,
		backgroundColor: 'green',
		borderRadius: 6,
	}
});
