// fil.veith.com/
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";

import ProjectList from "../components/projects/ProjectList";

import styles from "../styles/global.module.scss";
import classes from "../styles/index.module.scss";
import Contact from "../components/contact/Contact";
import getProjects from "../api/project";

export default function HomePage(props) {
	return (
		<div className={styles.home}>
			<div id="about_me">
				<h1>Who am I ?</h1>
				<div id={classes.me} className={styles.box}>
					<p>
						Hi I'm Fil Veith,
						<br />
						<br />
						I'm a 19 years Franco-German student who loves learning
						new things,
						<br />
						I have been learning new stuff since I'm born
						<br />
					</p>
					<Image
						src={"/Fil_Veith.png"}
						alt="Click Me !"
						width={150}
						height={150}
					/>
				</div>
			</div>

			<div id="my_projects">
				<h1>My Projects</h1>
				<div className={styles.box}>
					<ProjectList projects={props.projects} />
				</div>
			</div>

			<div id="currently" className={styles.currently}>
				<h1>Currently doing this and that</h1>
				<div id={classes.details_currently} className={styles.box}>
					<div id={classes.school} className={styles.box}>
						<h2>Studying</h2>
						<p>Epitech</p>
					</div>
					<div id={classes.work} className={styles.box}>
						<h2>Working</h2>
						<p>Big company</p>
					</div>
					<div id={classes.projects} className={styles.box}>
						<h2>Projects</h2>
						<td>
							<tr>Better Spotify</tr>
							<tr>Solitaire solver</tr>
						</td>
					</div>
				</div>
			</div>

			<Contact id="contact"/>

			<script
				type="text/javascript"
				src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"
			></script>
		</div>
	);
}

export async function getStaticProps() {

	const projects = await getProjects();

	return {
		props: {
			projects: projects.map(project => ({
				title: project.details.title,
				description: project.details.description,
				github: project.details.github,
				images: project.images,
				id: project.details.projectId,
				key: project.details.projectId,
				tags: project.tags
			})),
		},
		// revalidate: 1 // Usefull when the data changes very often in this case we refresh it every second
	};
}
