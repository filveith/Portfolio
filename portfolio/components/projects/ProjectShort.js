import Link from "next/link";
import { Fragment } from "react";

import classes from "./ProjectShort.module.css";
import Tags from "./Tags";

export default function ProjectShort(props) {
	const project = props.project;

	function tags(tags) {
		return (
			<Fragment>
				<Tags tag={'JavaScript'} color={'#ad4d4d'} />
				<Tags tag={'React'} color={'#3bcc72'} />
				<Tags tag={'React'} color={'#3bcc72'} />
				<Tags tag={'React'} color={'#3bcc72'} />
				<Tags tag={'React'} color={'#3bcc72'} />
				<Tags tag={'Readct'} color={'#3bcc72'} />
				<Tags tag={'React'} color={'#3bcc72'} />
				<Tags tag={'React'} color={'#3bcc72'} />
			</Fragment>
		);
		// let tagList
		// for (let i = 0; i < tags.length; i++) {
		// 	let tag = tags[i]
		// 	console.log(tag.color);
		// 	tagList += <Tags tag={tag}/>
		// }
		// return (
		// 	<div id="tagList">
		// 		{tagList}
		// 	</div>
		// )
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