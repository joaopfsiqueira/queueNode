//ENV
.env é o arquivo que serve para alterar os dados importantes da sua aplicação em determinado momento.
Dificultando o acesso por terceiro às informações principais.
Sendo assim, basta colocarmos as variaveis dentro do .env e os seus dados e chama-las onde quisermos
process.env.NOMEDAVARIAVEL (EXEMPLO DENTRO DE MAIL.JS)
Lembrando que a config deve ser importada dentro do server.
e no terminal node -> yarn add dotenv


//BULL
bull é outra biblioteca utilizada, trabalharemos com JOBS.
o bull permite que seja administrado o envio de e-mail de uma forma mais especifica.
dentro de jobs, será criado todo o tipo de e-mail. de Registro, de Cadastro Efetuado, de de=
terminada tarefa, 


//REDIS
redis é o banco de dados utilizado para armazenar os jobs.

//RUN ALL
yann add npm-run-all -D serve para pode executar mais de um script ao mesmo tempo. 
