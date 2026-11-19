import sql from "../db.ts";
import { Candidatura, Etapa, DadosCandidato } from './interfaces.ts'

export async function InserirCandidaturas(candidatura: Candidatura){
    await sql `INSERT INTO candidaturas (cd_user, descricao_vaga, nome_empresa, data_candidatura, status,
    meio_contato, modalidade, salario_proposto, canal_fonte, endereco_empresa, observacoes, requisitos, criado_em) 
    VALUES (${candidatura.cd_user}, ${candidatura.descricao_vaga}, ${candidatura.nome_empresa},
    ${candidatura.data_candidatura}, ${candidatura.status}, ${candidatura.meio_contato}, ${candidatura.modalidade}, 
    ${candidatura.salario_proposto}, ${candidatura.canal_fonte}, ${candidatura.endereco_empresa}, 
    ${candidatura.observacoes}, ${candidatura.requisitos}, ${candidatura.criado_em})`
}

export async function InserirEtapaCandidatura(etapa: Etapa){

    await sql `INSERT INTO etapas_candidatura (cd_user, candidatura_id, nome_etapa, data_etapa) 
    VALUES (${etapa.cd_user}, ${etapa.candidatura_id}, ${etapa.nome_etapa},
    ${etapa.data_etapa})`
}

export async function InserirDadosCandidato(dados: DadosCandidato){
    await sql `INSERT INTO area_candidato (cd_user, nome_completo, email, telefone, cidade, estado, linkedin, 
    github, cargo_objetivo, nivel_experiencia, resumo_profissional, tecnologias, modalidade_preferida, pretensao_salarial, 
    disponibilidade, link_curriculo) 
    VALUES (${dados.cd_user}, ${dados.nome_completo}, ${dados.email}, ${dados.telefone}, ${dados.cidade}, 
    ${dados.estado}, ${dados.linkedin}, ${dados.github}, ${dados.cargo_objetivo}, ${dados.nivel_experiencia}, 
    ${dados.resumo_profissional}, ${dados.tecnologias}, ${dados.modalidade_preferida}, 
    ${dados.pretensao_salarial}, ${dados.disponibilidade}, ${dados.link_curriculo})`
}