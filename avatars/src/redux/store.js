import { configureStore } from '@reduxjs/toolkit'
import AvatarCartSlice from './slices/AvatarCartSlice'

export const store = configureStore({
  reducer: {
    AvatarCart: AvatarCartSlice,
  },
})