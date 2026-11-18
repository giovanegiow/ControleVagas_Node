import sql from "../db.js";
import { randomUUID } from 'node:crypto';

export async function InserirCandidaturas(candidatura){
    const id = randomUUID();
    
    await sql `INSERT INTO candidaturas (id, cdUser, descricao_vaga, nome_empresa, data_candidatura, status
    meio_contato, modalidade, salario_proposto, canal_fonte, endereco_empresa, observacoes, criado_em) 
    VALUES (${id}, ${candidatura.cdUser}, ${candidatura.descricao_vaga}, ${candidatura.nome_empresa},
    ${candidatura.data_candidatura}, ${candidatura.status}, ${candidatura.meio_contato}, ${candidatura.modalidade}, 
    ${candidatura.salario_proposto}, ${candidatura.canal_fonte}, ${candidatura.endereco_empresa}, 
    ${candidatura.observacoes}, ${candidatura.criado_em})`
}

export async function InserirEtapaCandidatura(etapa){
    const id = randomUUID();
    
    await sql `INSERT INTO etapas_candidatura (id, cdUser, candidatura_id, nome_etapa, data_etapa) 
    VALUES (${id}, ${etapa.cdUser}, ${etapa.candidatura_id}, ${etapa.nome_etapa},
    ${etapa.data_etapa})`
}

export async function InserirDadosCandidato(dados){
    await sql `INSERT INTO area_candidato (cdUser, nome_completo, email, telefone, cidade, estado, linkedin, 
    github, cargo_objetivo, nivel_experiencia, resumo_profissional, tecnologias, modalidade_preferida, pretensao_salarial, 
    disponibilidade, link_curriculo) 
    VALUES (${dados.cdUser}, ${dados.nome_completo}, ${dados.email}, ${dados.telefone}, ${dados.cidade}, 
    ${dados.estado}, ${dados.linkedin}, ${dados.github}, ${dados.cargo_objetivo}, ${dados.nivel_experiencia}, 
    ${dados.resumo_profissional}, ${dados.tecnologias}, ${dados.modalidade_preferida}, 
    ${dados.pretensao_salarial}, ${dados.disponibilidade}, ${dados.link_curriculo})`
}