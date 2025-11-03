1. Objetivo: 
Criar uma API Rest para gerenciar um caderno digital de receitas saudaveis chamado StarHealthyBook.

2. Contexto: 
A API possui as seguintes funcionalidades: registro do Administrador, registro do convidado, inclusão, edição, consulta e exclusão de receitas.
Para que o usuário possa usar as funcionalidades de inclusão, edição, consulta e exclusão de receitas precisa fazer login como Administrador.
Para que o usuário possa apenas consultar as receitas precisa fazer login Como convidado.
Convidados apenas consultam as receitas e os Administradores acessam todas as funcionalidades do sistema.
O Administrador pode visualizar todas as receitas, mas só pode editar ou excluir as que ele próprio criou.
As receitas serão categorizadas por tipo: Pães, Bolos, Sobremesas, Sopas, Carne, Peixe, Frango e etc.
Quantidade de calorias: 0 - 200, 200-500, 500-700, 700-1000. 
Nivel de Preparo: Fácil, Médio, Difícil.
Custo: $, $$, $$$.
Cada receita pertence a uma categoria, mas pode ter várias tags informando se é uma receita: "sem glutém","vegana","Sem açucar","sem lactose" e etc.
Cada receita pode ter suas informações nutricionais.
Cada receita é associada ao usuário criador e o campo é atribuído automaticamente a partir do token JWT.
Deve existir campos de auditoria criado_em e atualizado_em que serão atualizados automaticamente pela aplicação.
Deve existir um padrão de resposta para os fluxos de erro e de exceção.
A API deve permite filtros múltiplos e os filtros.
A API deve permite que a paginação e ordenação sejam combinadas livremente. 


3. Regras: 
A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos;
O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada; 
O Swagger também deve contemplar os status code de erro que serão implementados na API;
Adicione um endpoint para renderizar o Swagger;
Construa um arquivo README para descrever o projeto;
Divida a API em camadas: routes, controllers, service e model e coloque dentro da pasta SRC para melhor organização e escalabilidade do projeto;
Armazene os dados da API em um banco de dados em memória;
Utilize a biblioteca express para construir a API Rest;
Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações 
descritas no contexto.