// fil.veith.com/projects
import { Fragment } from "react";

import ProjectList from "../../components/projects/ProjectList";

export default function Projects(props) {
	return <ProjectList projects={props.projects} />;
}

export async function getStaticProps() {
	const api_data = await fetch("http://localhost:3000/api/projects", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});
	const projects = (await api_data.json()).projects;

	return {
		props: {
			projects: projects.map((project) => ({
				title: project.details.title,
				description: project.details.description,
				github: project.details.github,
				images: project.images,
				id: project.details.projectId,
				key: project.details.projectId,
				tags: project.tags,
			})),
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
