import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jsonServer from "json-server";

const app = express();
const PORT = process.env.PORT || 3000;

// --- JSON Server API ---
const api = jsonServer.create();
const router = jsonServer.router("server/products.json");
const middlewares = jsonServer.defaults();

api.use(middlewares);
api.use("/api", router); // endpoints: /api/products, /api/products/:id

app.use(api);

// --- Serve Vite build (dist) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
