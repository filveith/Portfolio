import { createPool } from "mariadb";

const pool = createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
});

export default Object.freeze({
    pool: pool
});