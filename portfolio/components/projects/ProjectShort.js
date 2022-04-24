import Link from "next/link";
import { Fragment } from "react";

import classes from "./ProjectShort.module.css";
import Tags from "./Tags";

export default function ProjectShort(props) {
	const project = props.project;

	function tags(tags) {
		let tag_list = [];
		for (let tag of tags) {
			tag_list.push(<Tags tag={tag.tagName} color={tag.color} />);
		}

		return <Fragment>{tag_list}</Fragment>;
	}

	return (
		<div id={project.title} className={classes.container}>
			<h1>
				<Link href={"/projects/" + project.title}>
					{project.title ?? "A project"}
				</Link>
			</h1>
			<div className={classes.tags}>{tags(project.tags)}</div>
			<p>{project.description}</p>
		</div>
	);
}
