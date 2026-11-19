export interface Candidatura {
    cdUser: number;
    descricao_vaga: string;
    nome_empresa: string;
    data_candidatura: string;
    status: string;
    meio_contato: string;
    modalidade: string;
    salario_proposto: number;
    canal_fonte: string;
    endereco_empresa: string;
    observacoes: string;
    criado_em: string;
    requisitos: string;
}

export interface Etapa {
    cdUser: number;
    candidatura_id: string;
    nome_etapa: string;
    data_etapa: string;
}

export interface DadosCandidato {
    cdUser: number;
    nome_completo: string;
    email: string;
    telefone: string;
    cidade: string;
    estado: string;
    linkedin: string;
    github: string;
    cargo_objetivo: string;
    nivel_experiencia: string;
    resumo_profissional: string;
    tecnologias: string;
    modalidade_preferida: string;
    pretensao_salarial: number;
    disponibilidade: string;
    link_curriculo: string;
}