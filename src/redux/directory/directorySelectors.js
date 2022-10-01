import { createSelector } from "@reduxjs/toolkit"

const selectDirectory = (state)=> state.directory
export const selectSections = createSelector(
    [selectDirectory],
    directory=>directory.sections
)