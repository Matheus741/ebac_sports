import React from 'react'
import { useGetProductsQuery } from '../store/services/productsApi'
import Produto from '../components/Produto'
import { Container, Produtos as GridProdutos } from './styles'

const Produtos: React.FC = () => {
  const { data: produtos, isLoading, isError } = useGetProductsQuery()

  if (isLoading) return <p>Carregando...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>

  return (
    <Container>
      <GridProdutos>
        {produtos?.map((p) => (
          <li key={p.id}>
            <Produto produto={p} />
          </li>
        ))}
      </GridProdutos>
    </Container>
  )
}

export default Produtos
