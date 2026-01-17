import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

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
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find((p) => p.id === action.payload.id)

      if (!existe) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionarAoCarrinho } = cartSlice.actions
export default cartSlice.reducer
