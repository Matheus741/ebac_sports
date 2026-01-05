import React from 'react'
import { Button, Card } from './styles'
import { useAppDispatch } from '../../store/hooks'
import { addItem } from '../../store/modules/cart/slice'
import type { Product } from '../../store/services/productsApi'

type Props = { produto: Product }

const Produto: React.FC<Props> = ({ produto }) => {
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    dispatch(
      addItem({
        id: produto.id,
        title: produto.title,
        price: produto.price,
        image: produto.image
      })
    )
  }

  return (
    <Card>
      <img src={produto.image} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p>R$ {produto.price.toFixed(2)}</p>
      <Button onClick={handleAdd}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Produto
