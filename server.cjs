const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

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

// Front (Vite build)
app.use(express.static(path.join(__dirname, "dist")));

// SPA fallback
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
