import { useState } from "react";
import styled from "styled-components";
import CardProduto from "./components/CardProduto";

const Pagina = styled.main`
  min-height: 100vh;
  padding: 40px 16px;
  background: #f8f9fa;
  font-family: system-ui, sans-serif;
`;

const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  color: #212529;
`;

const Lista = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

// Dados estáticos (a prop `adicionado` inicial de cada produto)
const PRODUTOS = [
  { id: 1, nome: "Fone Bluetooth", preco: 199.9, adicionado: false },
  { id: 2, nome: "Teclado Mecânico", preco: 349.9, adicionado: true },
  { id: 3, nome: "Mouse Gamer", preco: 129.5, adicionado: false },
];

function App() {
  const [produtos, setProdutos] = useState(PRODUTOS);

  // Só alterna a prop para demonstrar a mudança de cor (não é carrinho real)
  const alternar = (id) =>
    setProdutos((lista) =>
      lista.map((p) => (p.id === id ? { ...p, adicionado: !p.adicionado } : p))
    );

  return (
    <Pagina>
      <Titulo>Nossos Produtos</Titulo>
      <Lista>
        {produtos.map((p) => (
          <CardProduto
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            adicionado={p.adicionado}
            onClick={() => alternar(p.id)}
          />
        ))}
      </Lista>
    </Pagina>
  );
}

export default App;
