# Desafio-Precato

Técnologias utilizadas:

-Node.js

-PostgreSQL

-Yarn

-Express

-Typescript

-TypeORM


Configurando o Ambiente:

1°-Execute o comando Yarn para instalar as dependencias.

2°-Cria um DataBase no PostgreSQL

3°-Configure o arquivo .env de acordo com o .env.template

4°-Execute o script: Yarn orm:run para criar as tabelas

5°Para rodar a aplicação execute o script: yarn dev



Routes:
  Credores->

    GET "/creditors/index" = Retorna todos credores cadastrados no Banco.
    
    POST "/creditors/create" 
      body:{
            "name":"name1",
            "cpf":"XXXX",
            "status":"(Aprovado||Recusado)"
            }
            
            
  Entes devedores->

    GET "/debtors/index" = Retorna todos entes devedores cadastrados no Banco.
    
    POST "/debtors/create" 
      body:{
            "name":"name1",
            "cnpj":"XXXX"
            }
            
      
Pagamentos->

    GET "/payments/index" = Retorna todos pedidos de pagamento cadastrados no Banco.
    
    POST "/payments/create" 
      body:{
            "remessa":"X",
            "creditor":"creditor_id", //Precisa estar em formato de uuid valido,
            "debtor":"debtor_id", //Precisa estar em formato de uuid valido,
            "initialValue": X,
            "finalValue": Y,
            "data": "yyyy-mm-dd"
            }  
     GET "/payments/getRefused" = Retorna todos pedidos de pagamento recusados do Banco.

