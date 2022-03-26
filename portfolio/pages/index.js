// fil.veith.com/
import Link from "next/link";
import { Fragment } from "react";

import ProjectList from "../components/projects/ProjectList";

const DUMMY_PROJECTS = [
	{
		id: 'p1',
		title: 'discord-spotify-lyrics-status',
		image: 'https://raw.githubusercontent.com/filveith/BetterDiscord-Spotify-Lyrics-Status/main/Spotify.gif',
		description: 'Chnage your status...... '
	},
	{
		id: 'minesweeper-bot',
		title: 'minesweeper',
		image: 'https://raw.githubusercontent.com/filveith/BetterDiscord-Spotify-Lyrics-Status/main/Spotify.gif',
		description: 'Bot to play minesweeper...... '
	}
]

function HomePage(props) {
	return (
		<Fragment>
			<h1>Home Page</h1>
			<ProjectList
				projects={props.projects}
			/>
		</Fragment>
	);
}

export async function getStaticProps() {
	return {
		props: {
			projects: DUMMY_PROJECTS
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	}
}

export default HomePage;
