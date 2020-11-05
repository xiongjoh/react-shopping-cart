import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// contexts
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		// console.log(item.id)
		// console.log(cart.some(existingItem => existingItem.id === item.id))
		setCart([...cart, {...item, id:item.id+Date.now()}])
	};

	const removeItem = itemId => {
		const cartIndex = cart.findIndex(item => item.id === itemId)
		const newCart = cart.filter((item, idx) => idx != cartIndex)
		setCart([...newCart])
	}

	return (
		<ProductContext.Provider value={{ products, addItem, removeItem}}>
			<CartContext.Provider value={{cart}}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
