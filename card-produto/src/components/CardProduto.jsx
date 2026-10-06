import styled from "styled-components";

/* ============ ESTILOS ============ */

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 280px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const NomeProduto = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  color: #212529;
`;

const PrecoProduto = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
  color: #0d6efd;
`;

// $adicionado é uma "transient prop": usada só no estilo, não vai para o DOM
const BotaoCarrinho = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  background-color: ${(props) => (props.$adicionado ? "#198754" : "#6c757d")};
  transition: background-color 0.3s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

/* ============ COMPONENTE ============ */

function CardProduto({ nome, preco, adicionado = false, onClick }) {
  return (
    <Card>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>
        {preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </PrecoProduto>
      <BotaoCarrinho $adicionado={adicionado} onClick={onClick}>
        {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
      </BotaoCarrinho>
    </Card>
  );
}

export default CardProduto;
