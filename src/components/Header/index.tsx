import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleCart } from '../../store/modules/cart/slice'
import { HeaderBar, CartBadge, CartButton } from './styles'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()

  const totalItems = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  )

  const totalPrice = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

  return (
    <HeaderBar>
      <h1>EBAC Sports</h1>

      <CartButton onClick={() => dispatch(toggleCart())}>
        Carrinho
        <CartBadge>{totalItems}</CartBadge>
        <span>R$ {totalPrice.toFixed(2)}</span>
      </CartButton>
    </HeaderBar>
  )
}

export default Header
