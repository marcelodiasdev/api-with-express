## Criando uma API com EXPRESS




Esta API foi desenvolvida utilizando Node.js e Express para gerenciar um catálogo de livros. A API permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em livros armazenados em um arquivo JSON.

Funcionalidades:
  - Listar todos os livros
  - Obter um livro por ID
  - Adicionar um novo livro
  - Atualizar as informações de um livro existente
  - Deletar um livro

Endpoints

## 1. GET /livros

Descrição: Retorna uma lista de todos os livros cadastrados.
Resposta de Sucesso: 200 OK
exemplo da resposta:
```
[
  {
    "id": 1,
    "nome": "Livro A",
    "autor": "Autor A"
  },
  {
    "id": 2,
    "nome": "Livro B",
    "autor": "Autor B"
  }
]
```


## 2. GET /livros/:id
Descrição: Retorna os detalhes de um livro específico com base no id.
Parâmetros:
   -  id: ID do livro a ser retornado.
Resposta de Sucesso: 200 OK
Resposta de Erro: 422 Invalid ID (Se o ID não for válido ou não encontrado)
exemplo da resposta:
```
{
  "id": 1,
  "nome": "Livro A",
  "autor": "Autor A"
}
```

## 3. POST /livros
Descrição: Adiciona um novo livro ao catálogo.
Corpo da Requisição:
```
{
  "nome": "Novo Livro",
  "autor": "Novo Autor"
}

```

Resposta de Sucesso: 201 Created
Resposta de Erro: 422 (Se o campo nome não for fornecido)
Exemplo de resposta:
```
  "Book insert successful"
```

4. PATCH /livros/:id
Descrição: Atualiza as informações de um livro existente com base no id.
Parâmetros:
    - id: ID do livro a ser atualizado.
Corpo da Requisição:

```
{
  "nome": "Livro Atualizado",
  "autor": "Autor Atualizado"
}

```

Resposta de Sucesso: 200 OK
Resposta de Erro: 422 Invalid ID (Se o ID não for válido ou não encontrado)
Exemplo de resposta:
```
"Item modified successfully"
```


5. DELETE /livros/:id
Descrição: Deleta um livro com base no id.
Parâmetros:
    - id: ID do livro a ser deletado.
Resposta de Sucesso: 200 OK
Resposta de Erro: 422 Invalid ID (Se o ID não for válido ou não encontrado)
Exemplo de resposta:
```
"Book deleted successfully"
```






