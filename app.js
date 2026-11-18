import { fastify } from 'fastify'
import { SelecionarCandidaturas } from './functions/select_functions.js';

const server = fastify();

server.get('/SelecionarCandidaturas', () => {
  return SelecionarCandidaturas();
})

server.listen({
  port: 3333
})