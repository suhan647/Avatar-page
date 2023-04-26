import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
  }
  
  export const AvatarCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        state.items.push(action.payload)
      }, 
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
      },
      resetCart: state => {
        return initialState;
      },
     
    }
  })
  
  export const { addItem, removeItem,resetCart } = AvatarCart.actions
  
  export default AvatarCart.reducer
  