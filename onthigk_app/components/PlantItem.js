import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PlantContext from '../store/Context';

export default function PlantItem({item}) {
	const navigation = useNavigation();
	const {plantCart, setPlantCart} = useContext(PlantContext);
	function addToCart() {
		if(plantCart.length > 0) {
			plantCart.forEach((plantCartItem) => {
				if(item.id == plantCartItem.id) {
					plantCartItem.quantity += 1;
					return setPlantCart(plantCart);
				} else {
					item.quantity = 1;
					return setPlantCart([...plantCart, item]);
				}
			})
		} else if (plantCart.length === 0) {
			item.quantity = 1;
			return setPlantCart([...plantCart, item]);
		}
		navigation.navigate('Details')
	}

  	return (
      <View>
        <TouchableOpacity style={styles.container} onPress={addToCart}>
          <View style={styles.img}>
            <Image
              style={{
                width: 60,
                height: 100,
              }}
              source={item.image}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.price} types</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#90EE90',
		alignItems: 'center',
		borderRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		minWidth: 150
	},
	img: {
		padding: 10
	},
	content: {
		borderRadius: 10,
		backgroundColor: 'white',
		padding: 8,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 8,
		alignItems: 'center',
		minWidth: 150,
	},
	title: {
		color: 'red',
		fontWeight: 'bold',
		paddingBottom: 2,
		fontSize: 15
	}
})
