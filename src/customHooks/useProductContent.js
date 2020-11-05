import React, { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useProductContent = (data) => {

    const [products, setProducts] = useLocalStorage( "products" , data);
    const [cart, setCart] = useLocalStorage("cart", []);
    
    useEffect(() => {
        setProducts(data)
    },[])


	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, {...item, id:item.id+Date.now()}])
	};

	const removeItem = itemId => {
		const cartIndex = cart.findIndex(item => item.id === itemId)
		const newCart = cart.filter((item, idx) => idx != cartIndex)
		setCart([...newCart])
    }
    
    return [products, cart, addItem, removeItem]

}