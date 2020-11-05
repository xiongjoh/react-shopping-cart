import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//custom hooks
import { useProductContent } from './customHooks/useProductContent'

// contexts
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	// custom hook
	const [products, cart, addItem, removeItem] = useProductContent(data)

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
