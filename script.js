// Produtos demonstrativos de teste para validar o layout visual
const produtosMock = [
  {
    id: '1',
    titulo: 'Hambúrguer Artesanal Duplo',
    descricao: 'Pão brioche, 2 carnes 120g, queijo cheddar derretido e bacon crocante.',
    preco: 28.90,
    categoria: 'Lanches',
    vendedor_bloco: 'Bloco 3 - Ap 204',
    whatsapp: '5521999999999',
    foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '2',
    titulo: 'Bolo de Pote Ninho com Nutella',
    descricao: 'Feito no dia, super recheado e geladinho. Entrega na porta do ap.',
    preco: 12.00,
    categoria: 'Doces',
    vendedor_bloco: 'Bloco 1 - Ap 101',
    whatsapp: '5521999999999',
    foto: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '3',
    titulo: 'Manutenção e Limpeza de Ar-Condicionado',
    descricao: 'Higienização completa, recarga de gás e manutenção preventiva.',
    preco: 150.00,
    categoria: 'Serviços',
    vendedor_bloco: 'Bloco 5 - Ap 502',
    whatsapp: '5521999999999',
    foto: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80'
  }
];

// Função para renderizar os produtos na tela
function renderizarProdutos(lista) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  lista.forEach(item => {
    // Formata o preço para R$ 0,00
    const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    // Mensagem formatada para o WhatsApp
    const mensagemWA = encodeURIComponent(`Olá! Vi seu anúncio no HubBloco: *${item.titulo}*. Ainda está disponível?`);
    const linkWhatsApp = `https://wa.me/${item.whatsapp}?text=${mensagemWA}`;

    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.foto}" alt="${item.titulo}" class="product-img">
      <div class="product-info">
        <span class="product-tag">${item.categoria}</span>
        <h2 class="product-title">${item.titulo}</h2>
        <p class="product-desc">${item.descricao}</p>
        <p class="product-seller">Anunciante: ${item.vendedor_bloco}</p>
        <div class="product-footer">
          <span class="product-price">${precoFormatado}</span>
          <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp">
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Inicializar a tela carregando os produtos de teste
document.addEventListener('DOMContentLoaded', () => {
  renderizarProdutos(produtosMock);
});