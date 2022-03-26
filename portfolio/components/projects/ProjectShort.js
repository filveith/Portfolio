import Link from "next/link";
import { Fragment } from "react";

import classes from './ProjectShort.module.css'

export default function ProjectShort(props) {
	let project = props.project;
	return (
		<div id={project.title} className={classes.container}>
			<h1>
				<Link href={"/projects/" + project.title}>
					{project.title ?? "A project"}
				</Link>
			</h1>
			<p>{project.description}</p>
		</div>
	);
}
