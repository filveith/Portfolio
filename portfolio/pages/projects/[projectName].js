// fil.veith.com/projects/projectName

import { useRouter } from "next/router";
import { Fragment } from "react";
import Project from "../../components/projects/Project";

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

	return {
		fallback: false,
		paths: [
			{
				params: {
					projectName: "minesweeper-bot",
				},
			},
			{
				params: {
					projectName: "discord-spotify-lyrics-status",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const projectName = context.params.projectName;
	return {
		props: {
			project: {
				key: projectName,
				title: projectName,
				image:
					"https://raw.githubusercontent.com/filveith/BetterDiscord-Spotify-Lyrics-Status/main/Spotify.gif",
				description: "Change your status...... ",
			},
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
