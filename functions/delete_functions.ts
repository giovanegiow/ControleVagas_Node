import sql from "../db.js";

export async function DeletarEtapa(id: string, cdUser: number){
    await sql `DELETE FROM etapas_candidatura WHERE id = ${id} AND cdUser = ${cdUser}`
}