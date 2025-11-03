# StarHealthyBook API

API REST para gerenciamento de um caderno digital de receitas saudáveis.

## Funcionalidades
- Cadastro de usuários (Administrador ou Convidado)
- Login com autenticação JWT
- CRUD de receitas (apenas administradores podem criar, editar e excluir)
- Consulta de receitas (administrador e convidado)
- Filtros múltiplos, paginação e ordenação nas consultas
- Categorias, tags, informações nutricionais e auditoria nas receitas
- Documentação Swagger disponível em `/api-docs`

## Instalação

```bash
npm install
```

## Execução

```bash
node app.js
```

## Endpoints principais

- `POST /api/users/register` — Cadastro de usuário
- `POST /api/users/login` — Login e obtenção de token JWT
- `GET /api/recipes` — Listar receitas (filtros, paginação, ordenação)
- `POST /api/recipes` — Criar receita (admin)
- `GET /api/recipes/{id}` — Obter receita por ID
- `PUT /api/recipes/{id}` — Editar receita (apenas criador/admin)
- `DELETE /api/recipes/{id}` — Excluir receita (apenas criador/admin)

## Autenticação

- Utilize o token JWT retornado no login no header `Authorization: Bearer <token>`
- Usuários convidados só podem consultar receitas
- Usuários administradores podem criar, editar e excluir suas próprias receitas

## Documentação Swagger

Acesse a documentação interativa em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Observações
- Banco de dados em memória (os dados são perdidos ao reiniciar a aplicação)
- Campos de auditoria `criado_em` e `atualizado_em` são gerenciados automaticamente
- Respostas de erro seguem um padrão JSON
