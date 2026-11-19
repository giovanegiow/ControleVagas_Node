import sql from "../db.ts";
import { Candidatura, DadosCandidato } from './interfaces.ts'

export async function EditarCandidatura(candidatura: Candidatura, id: string){
    await sql`UPDATE candidaturas SET descricao_vaga = ${candidatura.descricao_vaga}, nome_empresa = ${candidatura.nome_empresa}, 
    data_candidatura = ${candidatura.data_candidatura}, status = ${candidatura.status}, meio_contato = ${candidatura.meio_contato},
    modalidade = ${candidatura.modalidade}, salario_proposto = ${candidatura.salario_proposto}, canal_fonte = ${candidatura.canal_fonte},
    endereco_empresa = ${candidatura.endereco_empresa}, observacoes = ${candidatura.observacoes}, requisitos = ${candidatura.requisitos} 
    WHERE id = ${id} AND cd_user = ${candidatura.cd_user}`
}

export async function EditarDadosCandidato(candidato: DadosCandidato){
    await sql`UPDATE area_candidato SET nome_completo = ${candidato.nome_completo}, email = ${candidato.email}, telefone = ${candidato.telefone}, cidade = ${candidato.cidade}, 
    estado = ${candidato.estado}, linkedin = ${candidato.linkedin}, github = ${candidato.github}, cargo_objetivo = ${candidato.cargo_objetivo}, nivel_experiencia = ${candidato.nivel_experiencia}, 
    resumo_profissional = ${candidato.resumo_profissional}, tecnologias = ${candidato.tecnologias}, modalidade_preferida = ${candidato.modalidade_preferida}, pretensao_salarial = ${candidato.pretensao_salarial}, 
    disponibilidade = ${candidato.disponibilidade}, link_curriculo = ${candidato.link_curriculo} WHERE cd_user = ${candidato.cd_user}`
}