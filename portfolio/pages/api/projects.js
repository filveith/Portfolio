// /api/new-project
// POST
import maria from "./db_connexion.js";
const { pool } = maria;

export default async function handler(req, res) {
	if (req.method === "GET") {
		const result = await pool.query("SELECT * FROM Projects");
		res.status(201).json({ projects: result });
	}
}
