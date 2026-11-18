import sql from "../db.js";

export async function SelecionarCandidaturas(cdUser){
    const candidaturas = await sql `SELECT * FROM candidaturas WHERE cdUser = ${cdUser}`

    return candidaturas;
}

export async function SelecionarEtapasCandidaturas(cdUser, idCandidatura){
    const etapas = await sql `SELECT * FROM etapas_candidatura WHERE cdUser = ${cdUser} AND candidatura_id = ${idCandidatura}`

    return etapas;
}

export async function SelecionarDadosCandidato(cdUser){
    const candidato = await sql `SELECT * FROM area_candidato WHERE cdUser = ${cdUser}`

    return candidato;
}