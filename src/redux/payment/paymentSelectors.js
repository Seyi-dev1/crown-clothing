import { createSelector } from "@reduxjs/toolkit";

export const selectPayment = (state)=> state.payment

 export const selectPaymentVisibility = createSelector(
    [selectPayment],
    payment=> payment.isMounted
) 