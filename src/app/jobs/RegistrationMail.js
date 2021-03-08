import Mail from '../lib/Mail';


    //ENVIAR UM E-MAIL
    //o await serve para o envio de email funcionar para ai sim enviar a resposta.
export default {
    key: 'RegistrationMail', //key é o nome do job, nome que será chamado nos outros campos.
    //handle é o que o email irá fazer.
    //data é os objetos que serão retornados. No caso, os dados do usuário.
    //const {user} = data.
    async handle({ data }) { 
        const { user} = data;

        await Mail.sendMail({
        from: 'Queue Teste <queue@teste.com.br>',
        to: `${user.name} <${user.email}>`,
        subject: 'Cadastro de usuário',
        html: `Olá, ${user.name}, bem vindo ao teste.`,
    });
}, 
};