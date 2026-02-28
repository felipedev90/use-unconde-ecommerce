const express = require("express");
const path = require("path");
const fs = require("fs");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ OTIMIZAÇÃO 1: Compressão gzip/brotli — reduz ~60-70% do tamanho das respostas
app.use(compression());

function readProducts() {
  const filePath = path.join(__dirname, "server", "products.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);
  return json.products || [];
}

// API
app.get("/api/products", (req, res) => {
  res.json(readProducts());
});

app.get("/api/products/:id", (req, res) => {
  const products = readProducts();
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

// ✅ OTIMIZAÇÃO 2: Cache headers para assets estáticos
// Arquivos com hash no nome (ex: index-abc123.js) ficam em cache por 1 ano
// index.html recebe no-cache para o usuário sempre ver a versão mais recente
app.use(
  express.static(path.join(__dirname, "dist"), {
    maxAge: "1y",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// SPA fallback
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
