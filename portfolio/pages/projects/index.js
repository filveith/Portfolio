// fil.veith.com/projects
import { Fragment } from "react";

import ProjectList from "../../components/projects/ProjectList";

export default function Projects(props) {
	return <ProjectList projects={props.projects} />;
}

export async function getStaticProps() {
	let projects = await fetch("http://filveith.ddns.net:2000/projects", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});
	delete projects.meta;

	for (let i = 0; i < projects.length; i++) {
		let tag_project = await fetch(
			"http://filveith.ddns.net:2000/projects_tags/" + projects[i].projectId,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			}
		);

		delete tag_project.meta;

		let tags;

		for (let j = 0; j < tag_project.length; j++) {
			try {
				let res = await fetch(
					"http://filveith.ddns.net:2000/tags/" + tag_project[j].tagId,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
						},
					}
				);

				delete res.meta;

				if (tags) {
					tags = [...tags, res[0]];
				} else {
					tags = [res[0]];
				}
			} catch (error) {}
		}
		if (tags) {
			projects[i] = {
				...projects[i],
				tags: [...tags],
			};
		}
	}
	// const images = await pool.query("SELECT * FROM Images");
	// await pool.end()

	return {
		props: {
			projects: projects.map((project) => ({
				title: project.title,
				description: project.description,
				github: project.github,
				tags: project.tags ?? {},
				id: project.title,
				key: project.projectId,
			})),
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
