Decisão da arquitetura utilizada:
  A arquitetura do projeto foi pensada depois de bastante pesquisas em sites da Web sobre melhores formas de contruir uma API em node com MySQL.
  Pastas que foram criadas para uma melhor organização do projeto:
  file config - para conectar ao banco de dados MySQL;
  .service - para fazer as consultas e manipulações dos dados armazenados na base de dados;
  .route - servindo como uma 'ponte' para executar o CRUD do sistema. Lendo as requisições e entregando as respostas depois de operadas as operações;
  .__tests__ - para criar o arquivo de testes das rotas, para execução das operações do CRUD.
  
Lista de bibliotecas de terceiros utilizadas:
  .axios(https://www.npmjs.com/package/axios) - Realiza chamadas http;
  .cors(https://www.npmjs.com/package/cors)- Cors middleware;
  .jest(https://jestjs.io/pt-BR/docs/getting-started) - Permiti realizar testes unitários e de integração;
  .mysql2(https://www.npmjs.com/package/mysql2) - Para realizar conexão com o banco MySql.
  
O que você melhoraria se tivesse mais tempo:
  .O layout do frontend para a melhorar ainda mais a experiência do usuário;
  .Controle de log de sucesso e erro, para que possam ser identificados rapidamente erros e bugs.
  
Quais requisitos obrigatórios que não foram entregue:
  .Todos os requisitos do projeto foram implementados segundo as instruções e regras de negócio dadas.
