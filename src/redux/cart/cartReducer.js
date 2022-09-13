import { createSlice } from "@reduxjs/toolkit";

 export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const cartItemAlreadyExists = cartItems.find((cartItem)=> {
        return cartItem.id === cartItemToAdd.id
    })

    if(cartItemAlreadyExists){
        return cartItems.map((cartItem)=>{
            return cartItem.id === cartItemToAdd.id?
            {...cartItem, quantity:cartItem.quantity + 1}:
            cartItem
        })
    }

    else{
        return[...cartItems, {...cartItemToAdd, quantity:1}]
    }
} 

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        isVisible:false,
        cartItems:[]
    },
    reducers:{
        changeVisibility:(state)=>{
            state.isVisible = !state.isVisible
        },

        addToCart:(state, action)=>{
           state.cartItems= addItemToCart(state.cartItems, action.payload)
        }
    }

})

export const { changeVisibility, addToCart } = cartSlice.actions

export default cartSlice.reducer