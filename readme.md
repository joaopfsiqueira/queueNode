//ENV
.env é o arquivo que serve para alterar os dados importantes da sua aplicação em determinado momento.
Dificultando o acesso por terceiro às informações principais.
Sendo assim, basta colocarmos as variaveis dentro do .env e os seus dados e chama-las onde quisermos
process.env.NOMEDAVARIAVEL (EXEMPLO DENTRO DE MAIL.JS)
Lembrando que a config deve ser importada dentro do server.
e no terminal node -> yarn add dotenv


