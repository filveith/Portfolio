// fil.veith.com/projects/projectName

import { useRouter } from "next/router";
import { Fragment } from "react";

import Project from "../../components/projects/Project";
import maria from "../api/db_connexion";
const { pool } = maria;

export default function ProjectDetails(props) {
	const router = useRouter();
	const project_name = router.query.projectName; // Get the projectName from url

	return (
		<Fragment>
			<h1>- Project Page</h1>
			<Project {...props.project} />
		</Fragment>
	);
}

export async function getStaticPaths() {
	// You don't hard code the paths but store them in a data base and fetch them

	let projectsTitle = await pool.query("SELECT title FROM Projects");
	await pool.end();

	delete projectsTitle.meta;
	let paths = projectsTitle.map((project) => ({
		params: {
			projectName: project.title.toString(),
		},
	}));

	return {
		fallback: false,
		paths: paths,
	};
}

export async function getStaticProps(context) {
	const projectName = context.params.projectName;
    let project = await pool.query("SELECT * FROM Projects WHERE title=(?)", projectName);
	// await pool.end();
	delete project.meta;
    project = project[0]

    return {
		props: {
			project: project
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
