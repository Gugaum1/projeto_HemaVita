import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = "https://hemavita-api.onrender.com";

function getData() {
  const data = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(data);
}

function saveData(data) {
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
}

app.get("/campanhas", (req, res) => {
  const data = getData();
  res.json(data.campanhas || []);
});

app.get("/requisitos", (req, res) => {
  const data = getData();
  res.json(data.requisitos || []);
});

app.post("/contato", (req, res) => {
  const data = getData();

  const novo = {
    id: Date.now(),
    ...req.body
  };

  if (!data.contatos) {
    data.contatos = [];
  }

  data.contatos.push(novo);
  saveData(data);

  res.json({ mensagem: "Contato salvo com sucesso" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});