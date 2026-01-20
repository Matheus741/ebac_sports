import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types/Produto'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { adicionarProduto } = cartSlice.actions
export default cartSlice.reducer
