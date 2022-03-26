// fil.veith.com/projects

import { Fragment } from "react";
import ProjectList from "../../components/projects/ProjectList";

const DUMMY_PROJECTS = [
	{
		key: 'discord-spotify-lyrics-status',
		title: 'discord-spotify-lyrics-status',
		image: 'https://raw.githubusercontent.com/filveith/BetterDiscord-Spotify-Lyrics-Status/main/Spotify.gif',
		description: 'Change your status...... '
	},
	{
		key: 'minesweeper-bot',
		title: 'minesweeper',
		image: 'https://raw.githubusercontent.com/filveith/BetterDiscord-Spotify-Lyrics-Status/main/Spotify.gif',
		description: 'Bot to play minesweeper...... '
	}
]

export default function Projects(props) {
	
	async function addNewProject(new_project){
		const response = await fetch('/api/new-project',{
			method: 'POST',
			body: JSON.stringify(DUMMY_PROJECTS[1]),
			headers: {
				'Content-Type': 'application/json'
			},
		})
		const data = await response.json()
		console.log(data.message[0]);
	}

	async function getProjects(){
		const response = await fetch('/api/new-project',{
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
		const data = await response.json()
		console.log(data);
		return data.projects
	}

	return (
		<Fragment>
			<h1>Projects Page</h1>
			<button onClick={addNewProject}>Add project</button>
			<ProjectList
				projects={props.projects}
			/>
		</Fragment>
	)
}



export async function getStaticProps() {
	// const data = await getProjects()
	// console.log(data);
	return {
		props: {
			projects: DUMMY_PROJECTS
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	}
}