import Queue from 'bull';
import redisConfig from '../../config/redis';
import RegistrationMail from '../jobs/RegistrationMail';

//jeito prático de criar filas para cada e-mail sem ter que ficar declarando um por um.
import * as jobs from '../jobs';
const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}));

export default {
    queues,
    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name) ;
    return queue.bull.add(data, queue.options);
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job) => {
                console.log('Job Failed', queue.key, job.data);
                console.log(err);
            });

        })
    }
};


//configurações da Fila.

//RegistrationMail.key = é o nome da fila
// const mailQueue = new Queue (RegistrationMail.key, redisConfig); 



// export default mailQueue;