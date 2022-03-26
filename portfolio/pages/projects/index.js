// fil.veith.com/projects
import { Fragment } from "react";

import ProjectList from "../../components/projects/ProjectList";
import maria from "../api/db_connexion";
const { pool } = maria;

export default function Projects(props) {
	return <ProjectList projects={props.projects} />;
}

export async function getStaticProps() {
	const projects = await pool.query("SELECT * FROM Projects");
	// const images = await pool.query("SELECT * FROM Images");
	// await pool.end()

	return {
		props: {
			projects: projects.map((project) => ({
				title: project.title,
				description: project.description,
				github: project.github,
				id: project.title,
				key: project.projectId,
			})),
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
