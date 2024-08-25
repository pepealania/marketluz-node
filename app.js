// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged',(arg) => {
//     console.log("emitter emitted!",arg);
// });

// logger.log('message');
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Hello PMVADO');
        res.end();
    }
    else if(req.url === '/api/pmvado'){
        res.write(JSON.stringify(['1. Crear nueva tarea.','Asignar Tarea.','Terminar Tarea.']));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');