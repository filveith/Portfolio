// fil.veith.com/
import Link from "next/link";
import { Fragment } from "react";

import ProjectList from "../components/projects/ProjectList";
import maria from "./api/db_connexion";
const { pool } = maria;

function HomePage(props) {
	return (
		<Fragment>
			<h1>Who I am </h1>
			<h1>My Projects</h1>
			<ProjectList projects={props.projects} />
		</Fragment>
	);
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

export default HomePage;
