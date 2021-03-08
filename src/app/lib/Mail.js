import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

export default nodemailer.createTransport(mailConfig);


//esse mail foi criado para importar as configurações para o envio de e-mail