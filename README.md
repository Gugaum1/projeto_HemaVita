# 🩸 HemaVita Campina

Projeto web desenvolvido com foco em **facilitar o acesso à informação sobre doação de sangue em Campina Grande (PB)**, conectando pessoas a orientações, campanhas e locais de doação.

🔗 **Acesse o projeto:** https://hemavita.netlify.app/

---

## 📌 Sobre o projeto

O **HemaVita Campina** surgiu como uma solução para um problema real:
muitas pessoas desejam doar sangue, mas não sabem **onde ir, quem pode doar ou quais são as necessidades atuais**.

A plataforma centraliza essas informações de forma clara, moderna e acessível.

---

## 🚀 Funcionalidades

* 📢 Exibição de campanhas e avisos em destaque (via API)
* 📋 Requisitos para doação de sangue
* 📍 Informações sobre onde doar em Campina Grande
* 📩 Formulário de contato integrado com backend
* 🌐 Deploy completo (frontend + backend)

---

## 🛠️ Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### Backend

* Node.js
* Express
* API REST

### Deploy

* Frontend: Netlify
* Backend: Render

---

## 🧠 Arquitetura do projeto

O sistema foi dividido em duas camadas:

### 🔹 Frontend

Responsável pela interface e experiência do usuário.
Consome dados da API através de requisições HTTP (`fetch`).

### 🔹 Backend (API)

Responsável por fornecer os dados dinâmicos do sistema:

* campanhas
* requisitos
* mensagens do formulário

Atualmente utiliza um arquivo JSON como base de dados.

---

## 🔌 Integração com API

O frontend consome a API hospedada no Render:

```js
const API_URL = "https://hemavita-api.onrender.com";
```

Para ambiente local:

```js
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://hemavita-api.onrender.com";
```

---

## 📂 Estrutura do projeto

```bash
PROJETO_VIDA_EM_GOTAS/
│
├── api/                      # Backend (Node + Express)
│   ├── server.js
│   ├── data.json
│   └── package.json
│
└── projeto-doacao-sangue/    # Frontend
    ├── components/
    ├── css/
    ├── js/
    ├── index.html
    ├── contato.html
    ├── onde_doar.html
    └── quem-pode-doar.html
```

---

## ⚙️ Como rodar o projeto localmente

### 🔹 Backend

```bash
cd api
npm install
node server.js
```

A API ficará disponível em:

```bash
http://localhost:3000
```

---

### 🔹 Frontend

Abra o projeto com o Live Server (VS Code) ou diretamente no navegador.

---

## 📈 Melhorias futuras

* 🔐 Sistema de autenticação (admin)
* 📝 Painel para cadastro de campanhas
* 🗄️ Integração com banco de dados (MongoDB)
* 📊 Dashboard com estatísticas
* 📱 Melhorias de responsividade

---

## 💡 Aprendizados

Este projeto proporcionou aprendizado prático em:

* Integração frontend ↔ backend
* Criação de APIs com Express
* Consumo de API com JavaScript
* Deploy de aplicações web
* Estruturação de projetos reais

---

## 👨‍💻 Autor

**Guga**
Estudante de Análise e Desenvolvimento de Sistemas

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de portfólio.
