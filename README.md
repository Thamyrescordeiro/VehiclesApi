# Vehicles API

API RESTful para gerenciamento de usuários, marcas, modelos de carros e veículos, construída com **Node.js**, **NestJS**, **Sequelize** e **PostgreSQL**.

---

## Tecnologias

- Node.js  
- NestJS  
- Sequelize (ORM)  
- PostgreSQL  
- TypeScript  

---

## Instalação

1. Clone o repositório:  
   `git clone <https://github.com/Thamyrescordeiro/VehiclesApi>`  
   `cd seu-projeto`

2. Instale as dependências:  
   `npm install`

3. Configure o banco de dados PostgreSQL e crie um arquivo `.env` com as variáveis:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco


4. Crie as tabelas no banco (via migrations ou manualmente).

5. Execute o projeto em modo desenvolvimento:  
   `npm run start:dev`

---

## Endpoints

### Usuários (`/user`)

- `POST /user/create` — Criar usuário  
- `GET /user` — Listar usuários  
- `GET /user/:id` — Buscar usuário por ID  
- `PATCH /user/update/:id` — Atualizar usuário  
- `DELETE /user/delete/:id` — Deletar usuário  

### Marcas (`/brand`)

- `POST /brand/create` — Criar marca  
- `GET /brand` — Listar marcas  
- `GET /brand/:id` — Buscar marca por ID  
- `GET /brand/user/:id` — Listar marcas por usuário  
- `PATCH /brand/update/:id` — Atualizar marca  
- `DELETE /brand/delete/:id` — Deletar marca  

### Modelos de Carro (`/carmodel`)

- `POST /carmodel/create` — Criar modelo  
- `GET /carmodel` — Listar modelos  
- `GET /carmodel/:id` — Buscar modelo por ID  
- `GET /carmodel/brand/:id` — Listar modelos por marca  
- `PATCH /carmodel/update/:id` — Atualizar modelo  
- `DELETE /carmodel/delete/:id` — Deletar modelo  

### Veículos (`/vehicles`)

- `POST /vehicles/create` — Criar veículo  
- `GET /vehicles` — Listar veículos  
- `GET /vehicles/:id` — Buscar veículo por ID  
- `GET /vehicles/user/:id` — Listar veículos por usuário  
- `PATCH /vehicles/update/:id` — Atualizar veículo  
- `DELETE /vehicles/delete/:id` — Deletar veículo  

---

## Observações

- Todos os endpoints retornam JSON.  
- Os identificadores usados são UUIDs.  
- Validações são feitas via DTOs.  
- Para testar, use Insomnia, Postman ou outro client REST de sua preferência.

---

## Rodando localmente

Após configurar banco e `.env`, execute:

npm run start:dev

---

## Autor

Thamyres Cordeiro

---

## Licença

MIT License