import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import anh_plant_1 from '../assets/images/img_plant_1.jpg'

export default function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.aSideLeft}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 30,
          }}
        >
          Earth laughts through flowers so let her laugh.
        </Text>
        <View style={{
			flexDirection: 'row'
		}}>
          <TouchableOpacity
            style={{
              borderRadius: 13,
              backgroundColor: "green",
              minHeight: 50,
			  padding: 15,
			  marginTop: 30
            }}
          >
            <Text style={{
				fontSize: 17,
				fontWeight: 'bold',
				color: 'white'
			}}>How to plant</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.aSideRight}>
        <Image style={{ width: 150, height: 200 }} source={anh_plant_1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	aSideLeft: {
		flex: 3,
		padding: 15
	},
	aSideRight: {
		flex: 2,
		padding: 15
	}
})
