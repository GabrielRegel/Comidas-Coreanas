// Dados dos produtos
const produtos = {
  apimentados: [
    {
      nome: "Kimchi Jjigae",
      descricao: "Ensopado de kimchi com tofu e carne.",
      preco: "R$99,99",
      imagem: "/images/kimchi-jjigae-on-plate-korean-food-free-png.webp"
    },
    {
      nome: "Bulgogi Picante",
      descricao: "Carne marinada com molho picante.",
      preco: "R$89,99",
      imagem: "/images/Bulgogi-Picante.jpg"
    },
    {
      nome: "Tteokbokki",
      descricao: "Bolinhos de arroz com molho apimentado.",
      preco: "R$79,99",
      imagem: "imagens/tteokbokki.jpg"
    },
    {
      nome: "Sundubu Jjigae",
      descricao: "Ensopado de tofu macio e picante.",
      preco: "R$89,99",
      imagem: "imagens/sundubu-jjigae.jpg"
    },
    {
      nome: "Dakgalbi",
      descricao: "Frango grelhado com vegetais e molho picante.",
      preco: "R$99,99",
      imagem: "imagens/dakgalbi.jpg"
    },
    {
      nome: "Gochujang",
      descricao: "Pasta de pimenta coreana.",
      preco: "R$19,99",
      imagem: "imagens/gochujang.jpg"
    },
    {
      nome: "Kimchi",
      descricao: "Repolho fermentado e picante.",
      preco: "R$29,99",
      imagem: "imagens/kimchi.jpg"
    },
    {
      nome: "Jjajangmyeon Picante",
      descricao: "Macarrão com molho de feijão preto picante.",
      preco: "R$79,99",
      imagem: "imagens/jjajangmyeon-picante.jpg"
    },
    {
      nome: "Gyeran-jjim Picante",
      descricao: "Omelete coreano picante.",
      preco: "R$39,99",
      imagem: "imagens/gyeran-jjim-picante.jpg"
    }
  ],
  suaves: [
    {
      nome: "Japchae",
      descricao: "Macarrão de batata-doce com vegetais.",
      preco: "R$89,99",
      imagem: "imagens/japchae.jpg"
    },
    {
      nome: "Samgyeopsal",
      descricao: "Fatias de barriga de porco grelhadas.",
      preco: "R$99,00",
      imagem: "imagens/samgyeopsal.jpg"
    },
    {
      nome: "Bibimbap",
      descricao: "Arroz com vegetais e ovo.",
      preco: "R$79,99",
      imagem: "imagens/bibimbap.jpg"
    }
  ],
  bebidas: [
    {
      nome: "Soju",
      descricao: "Bebida alcoólica tradicional coreana.",
      preco: "R$49,99",
      imagem: "imagens/soju.jpg"
    },
    {
      nome: "Chá de Ginseng",
      descricao: "Chá revigorante de ginseng.",
      preco: "R$19,99",
      imagem: "imagens/cha-ginseng.jpg"
    },
    {
      nome: "Makgeolli",
      descricao: "Vinho de arroz levemente doce.",
      preco: "R$39,99",
      imagem: "imagens/makgeolli.jpg"
    }
  ],
  sobremesas: [
    {
      nome: "Bingsu",
      descricao: "Sobremesa de gelo raspado com frutas.",
      preco: "R$39,99",
      imagem: "imagens/bingsu.jpg"
    },
    {
      nome: "Hotteok",
      descricao: "Panqueca doce recheada.",
      preco: "R$29,99",
      imagem: "imagens/hotteok.jpg"
    },
    {
      nome: "Yakgwa",
      descricao: "Biscoito de mel tradicional.",
      preco: "R$19,99",
      imagem: "imagens/yakgwa.jpg"
    }
  ]
};

// Função para gerar os itens do cardápio
function gerarCardapio(categoria, containerId) {
  const container = document.getElementById(containerId);
  produtos[categoria].forEach(produto => {
    const item = document.createElement("div");
    item.classList.add("prato");
    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <p><strong>${produto.nome}</strong><br>${produto.descricao}<br><span class="preco">${produto.preco}</span></p>
    `;
    container.appendChild(item);
  });
}

// Gerar os itens para cada categoria
gerarCardapio("apimentados", "apimentados-list");
gerarCardapio("suaves", "suaves-list");
gerarCardapio("bebidas", "bebidas-list");
gerarCardapio("sobremesas", "sobremesas-list");

// Função para rolar até a seção
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Impedir arrastar e copiar elementos
document.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

document.addEventListener("selectstart", (event) => {
  event.preventDefault();
});