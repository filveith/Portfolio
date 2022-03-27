// fil.veith.com/
import Link from "next/link";
import { Fragment } from "react";

import ProjectList from "../components/projects/ProjectList";
import maria from "./api/db_connexion";
const { pool } = maria;

import classes from "../styles/global.module.css";
import ids from "../styles/index.module.css";

export default function HomePage(props) {
	return (
		<div className={classes.home}>
			<div id="me" className={classes.me}>
				<h1>Who I am </h1>
			</div>

			<div id="my_projects">
				<div className={classes.box}>
					<h1>My Projects</h1>
					<ProjectList projects={props.projects} />
				</div>
			</div>

			<div id="currently" className={classes.currently}>
				<h1>Currently doing this and that</h1>
				<div id={ids.details_currently} className={classes.box}>
					<div id={ids.school} className={classes.box}>
						<h2>Studying</h2>
						<p>Epitech</p>
					</div>
					<div id={ids.work} className={classes.box}>
						<h2>Working</h2>
						<p>Big company</p>
					</div>
					<div id={ids.projects} className={classes.box}>
						<h2>Projects</h2>
						<td>
							<tr>Better Spotify</tr>
							<tr>Solitaire solver</tr>
						</td>
					</div>
				</div>
			</div>

			<div id="contact">
				<h1>Contact Me</h1>
			</div>
		</div>
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