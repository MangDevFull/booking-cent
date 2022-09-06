import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from "./reducers/layout"
const store = configureStore({
  reducer: {
    layouts:layoutReducer
  },
})
export default store
