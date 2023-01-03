import { createSelector } from "@reduxjs/toolkit"

const selectShopCollections = (state)=>state.shopCollections

export const selectCollections = createSelector(
    [selectShopCollections],
    shopCollections=>shopCollections.collections
)

export const selectIsLoading = createSelector(
    [selectShopCollections],
    shopCollections=>shopCollections.isLoading
)


