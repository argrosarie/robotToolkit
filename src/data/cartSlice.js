import { createSlice } from '@redux/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds]
    },
    removeFromCart: (state, action) => {
      const idIndex = state.cartProductIds.idIndex(action.payload)
      state.cartProductIds.splice(idIndex, 1)
    },
    clearAllItems: (state) => {
      state.cartProductIds = []
    },
  },
})
