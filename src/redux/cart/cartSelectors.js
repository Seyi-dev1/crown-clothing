import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
)

export const selectCartVisibility = createSelector(
    [selectCart],
    cart=>cart.isVisible
)

export const cartItemsCount = createSelector(
    [selectCartItems],
    cartItems=> cartItems.map((cartItem)=>{
        return cartItem.quantity
    }).reduce((index,value)=>{
        return index + value
    },0)
)