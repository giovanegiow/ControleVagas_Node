import { fastify } from 'fastify'
import { SelecionarCandidaturas } from './functions/select_functions.ts';

const server = fastify();

server.get('/SelecionarCandidaturas', () => {
  return SelecionarCandidaturas(0);
})

server.listen({
  port: 3333
})