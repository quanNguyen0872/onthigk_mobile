import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'
import PlantContext from '../store/Context'
import PlantItem from './PlantItem'

export default function PlantList() {
	const {plants} = useContext(PlantContext);
  	return (
		<View>
			<FlatList
				horizontal= {true}
				data={plants}
				 renderItem={({item}) => {
					return (
						<PlantItem
							item={item} 
						/>
					)
				 }}
				 keyExtractor={(item, index) => {
					return item.id;
				 }}
			/>
		</View>
  )
}
