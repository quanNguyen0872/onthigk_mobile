import PlantContext from "./Context";
import img_plant_1 from '../assets/images/img_plant_1.jpg';
import img_plant_2 from '../assets/images/img_plant_2.jpg';
import { useState } from "react";

function Provider({children}) {
	const plants = [
		{id:1, name: "ABC", price: 100, image: img_plant_1},
		{id:2, name: "XYZ", price: 120, image: img_plant_2},
		{id:3, name: "VCB", price: 143, image: img_plant_1}, 
		{id:4, name: "OPP", price: 167, image: img_plant_2},
		{id:5, name: "UER", price: 178, image: img_plant_1},
	];
	const [plantCart, setPlantCart] = useState([]);
	return (
		<PlantContext.Provider value={{plants, plantCart, setPlantCart}}>
			{children}
		</PlantContext.Provider>
	);
}

export default Provider;