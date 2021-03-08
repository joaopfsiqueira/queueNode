import Mail from '../lib/Mail';
export default {
    async store(req, res) {
        const { name, email, password} = req.body;



        const user = {
            name,
            email,
            password,
        };

        //ENVIAR UM E-MAIL
        //o await serve para o envio de email funcionar para ai sim enviar a resposta.
       await Mail.sendMail({
            from: 'Queue Teste <queue@teste.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem vindo ao teste.`,
        });

        return res.json(user);
    }
}