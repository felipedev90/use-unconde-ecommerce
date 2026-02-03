# Mini E-commerce – Desafio Frontend Jr | Uncode

Este projeto é um mini e-commerce funcional desenvolvido como parte do desafio técnico para a vaga de Desenvolvedor Frontend Júnior na Uncode.

O objetivo foi construir uma aplicação completa, priorizando organização de código, componentização, lógica de carrinho, responsividade e comunicação técnica, mais do que perfeição visual.

## Links

**Deploy:** [Clique aqui](https://use-unconde-ecommerce.onrender.com/)

**Repositório:** [Clique aqui](https://github.com/felipedev90/use-unconde-ecommerce.git)

## Tecnologias utilizadas

- React (Vite)
- React Router
- Context API (gerenciamento de estado do carrinho)
- Tailwind CSS
- Node.js + Express (API)
- LocalStorage (persistência do carrinho)

## Por que escolhi essa stack?

- Vite + React: setup rápido, leve e moderno para SPAs.
- Context API: solução nativa e suficiente para o escopo do carrinho, evitando dependências externas.
- Tailwind CSS: facilita consistência visual, responsividade e manutenção.
- Express: API simples e confiável para servir os dados do products.json, funcionando bem tanto localmente quanto em produção.

## Estrutura de pastas

```bash
src/
├─ components/ # Componentes reutilizáveis (Header, Cart, MiniCart, etc.)
├─ context/ # CartContext, CartProvider e hook useCart
├─ pages/ # Páginas (Home, Product)
├─ hooks/ # Hooks customizados para lógica de dados e derivados (busca, filtro, categorias, fetch)
├─ services/ # Camada de acesso à API (fetch de produtos) e integração externa
├─ utils/ # Funções utilitárias (ex: formatCurrency)
├─ App.jsx
└─ main.jsx

server/
└─ products.json # Dados dos produtos

server.cjs # Servidor Express (API + SPA fallback)
```

#### **Funcionalidades**

```md
## Funcionalidades implementadas

### Produtos

- Listagem de produtos com imagem, nome, categoria e preço
- Página de detalhes do produto
- Filtro por categoria (ordenado alfabeticamente)
- Busca por nome

### Carrinho

- Adicionar produto ao carrinho
- Incrementar e decrementar quantidade
- Remover item individual
- Total atualizado em tempo real
- Persistência com LocalStorage
- MiniCarrinho em formato de drawer/sidebar
- Feedback visual ao adicionar itens

### UI / UX

- Layout mobile-first
- Header adaptado para desktop e mobile
- Ícones SVG
- Microinterações (hover, cursor, feedback visual)
- Tipografia customizada com fontes locais
```

## API

A API lê os dados diretamente do arquivo products.json e expõe os endpoints:

- GET /api/products → lista todos os produtos
- GET /api/products/:id → retorna um produto específico

A API e o front-end são servidos pelo mesmo servidor, evitando problemas de CORS e facilitando o deploy.

## Como rodar o projeto localmente

_Pré-requisitos_

- Node.js (v18+ recomendado)
- npm

Passos:

# instalar dependências

```bash
npm install
```

# build do front-end

```bash
npm run build
```

# iniciar servidor (API + front)

```bash
npm start
```

A aplicação ficará disponível em:

http://localhost:3000

## Responsividade

O projeto foi desenvolvido com abordagem mobile-first, garantindo boa usabilidade em:

- Mobile: 375px
- Desktop: 1440px

No mobile, a busca e o filtro são exibidos abaixo do header para manter clareza visual.

## Diferenciais

- Context API bem isolado (sem prop drilling)
- Persistência de estado do carrinho
- Componentização clara
- Organização de commits
- Feedback visual em ações do usuário
- SPA com fallback correto no servidor (React Router em produção)

## Decisões técnicas relevantes

O carrinho foi centralizado em um Context Provider, mantendo a lógica desacoplada da UI.

A confirmação de remoção de itens foi tratada na camada de interface (MiniCart), preservando a responsabilidade do Context.

A API foi implementada em Express para maior controle no deploy, em vez de depender diretamente do JSON Server em produção.

## Testes

Não foram implementados testes unitários ou E2E neste projeto devido ao escopo e ao prazo do desafio.

A estrutura foi organizada de forma a facilitar a adição futura de testes, especialmente para:

- lógica do carrinho (Context API);
- funções utilitárias;
- fluxos principais do usuário (adicionar/remover itens).

## Uso de IA

Utilizei IA (ChatGPT) como apoio durante o desenvolvimento, principalmente para:

- troubleshooting e correção de erros (ex.: rotas de fallback para SPA em produção, ajustes de build/deploy);
- revisão de abordagem e arquitetura (ex.: migração do carrinho para Context API);
- dúvidas pontuais de implementação e boas práticas.

Além da IA, utilizei amplamente:

- Documentação do React;
- MDN Web Docs;
- Documentação do Tailwind CSS;
- Pesquisas pontuais no Google.

Todas as decisões técnicas, implementações, testes e ajustes finais foram realizadas por mim. As ferramentas citadas foram utilizadas como suporte ao processo de aprendizado e desenvolvimento.

**Desenvolvido por:**
Felipe Augusto
