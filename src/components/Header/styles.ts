import styled from 'styled-components'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #111;
  color: #fff;
`

export const CartButton = styled.button`
  border: none;
  background: #fff;
  color: #111;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    filter: brightness(0.95);
  }
`

export const CartBadge = styled.span`
  display: inline-block;
  min-width: 24px;
  padding: 0 6px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  background: #ff3b3b;
  color: #fff;
  font-size: 12px;
  text-align: center;
`
