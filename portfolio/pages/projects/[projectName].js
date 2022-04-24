// fil.veith.com/projects/projectName

import { useRouter } from "next/router";
import { Fragment } from "react";

import Project from "../../components/projects/Project";

export default function ProjectDetails(props) {
	const router = useRouter();
	const project_name = router.query.projectName; // Get the projectName from url

	return <Project {...props.project} />;
}

export async function getStaticPaths() {
	let projectsTitle = await (await fetch("http://filveith.ddns.net:2000/projects_title", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})).json();

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
	let project = await (await fetch("http://filveith.ddns.net:2000/projects/" + projectName, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})).json();

	// await pool.end();
	delete project.meta;
	project = project[0];

	return {
		props: {
			project: project,
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
