import sql from "../db.ts";

export async function DeletarEtapa(id: string, cd_user: number){
    await sql `DELETE FROM etapas_candidatura WHERE id = ${id} AND cd_user = ${cd_user}`
}