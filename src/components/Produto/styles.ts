import styled from 'styled-components'

export const Card = styled.article`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  background: #fff;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  h3 {
    margin: 8px 0;
    font-size: 1rem;
  }

  p {
    margin: 4px 0 12px;
    font-weight: 600;
  }
`

export const Button = styled.button`
  border: none;
  background: #111;
  color: #fff;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }
`
