import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  title: string
  price: number
  image?: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen
    },
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      const product = action.payload
      const existing = state.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    increaseQty(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQty(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { toggleCart, addItem, removeItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
