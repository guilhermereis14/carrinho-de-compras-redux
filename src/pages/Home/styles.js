import styled from 'styled-components';
import { darken } from 'polished'; /* Biblioteca de cores do JavaScript. O "darken" é utilizado para escurecer a tonalidade da cor*/

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Replica em 3 colunas de tamanho igual */
  grid-gap: 20px; /* espaçamento entre as colunas (produtos) */
  list-style: none;


  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;

    }

    > strong { /* O sinal de "maior" irá considerar somente a TAG strong do "li" */
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span { /* O sinal de "maior" irá considerar somente a TAG span do "li" */
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #DF013A;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s; /* Tempo de transição para escurecer o botão */

      &:hover {
        background: ${darken(0.03, '#DF013A')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);


        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;

      }
    }
  }
`;
