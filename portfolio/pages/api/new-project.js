// /api/new-project
// POST
import maria from "./db_connexion.js";
const { pool } = maria;

export default async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
        const { title, image, description } = data;

        // console.log(title);
		const result = await pool.query("SELECT * FROM Projects WHERE title=(?)", title);
        // console.log(result);

        res.status(201).json({ message: result });
	}
}