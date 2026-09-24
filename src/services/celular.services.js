import { pool } from "../config/db.js"

class CelularService {
    async getAll() {
        const res = await pool.query("SELECT * FROM celulares")
        return res.rows;
    }
    
    async create(dados) {
        const res = await pool.query("INSERT INTO celulares RETURNING *", [dados]);
        return res.rows[0]
    }
}

export const celularService = new CelularService()
export default celularService