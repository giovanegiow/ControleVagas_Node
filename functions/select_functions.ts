import sql from "../db.js";

export async function SelecionarCandidaturas(cd_user: number){
    const candidaturas = await sql `SELECT * FROM candidaturas WHERE cd_user = ${cd_user}`

    return candidaturas;
}

export async function SelecionarEtapasCandidaturas(cd_user: number, idCandidatura: number){
    const etapas = await sql `SELECT * FROM etapas_candidatura WHERE cd_user = ${cd_user} AND candidatura_id = ${idCandidatura}`

    return etapas;
}

export async function SelecionarDadosCandidato(cd_user: number){
    const candidato = await sql `SELECT * FROM area_candidato WHERE cd_user = ${cd_user}`

    return candidato;
}