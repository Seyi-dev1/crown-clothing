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
        },

        removeFromCart:(state, action)=>{
            state.cartItems= state.cartItems.filter((cartItem)=>{
                return cartItem.id !== action.payload
            })
        },

        increaseCartItemQuantity:(state, action)=>{
            state.cartItems= state.cartItems.map((cartItem)=>{
              return  cartItem.id === action.payload?
              {...cartItem, quantity:cartItem.quantity + 1}
              :cartItem
            })
        },

        decreaseCartItemQuantity:(state, action)=>{
            state.cartItems = state.cartItems.map((cartItem)=>{
            return cartItem.id === action.payload?
            {...cartItem, quantity:cartItem.quantity - 1}
            : cartItem    
            })
        },
        clearCart:(state)=>{
            state.cartItems = []
        }
    }

})

export const { 
    changeVisibility,
     addToCart,
     removeFromCart,
     decreaseCartItemQuantity,
     increaseCartItemQuantity,
     clearCart 
    } = cartSlice.actions

export default cartSlice.reducer