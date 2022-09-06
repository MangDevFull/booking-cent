import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isMobile: false,
}
export const LayoutSlice =  createSlice({
  name: 'layout',
  initialState,
  reducers: {
    checkIsMobile: (state, action) => {
      state.isMobile = action.payload
    },
  },
})
export const { checkIsMobile } = LayoutSlice.actions
export default LayoutSlice.reducer