'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server({  
    host: 'localhost',
    port: 3000
  })

const port = process.env.port || 3000;

// server.connection({port: port});
const { routes } = require('./lib/routes')
server.route(routes);

server.start(function(){
    console.log('Listening on ' + server.info.uri)
})