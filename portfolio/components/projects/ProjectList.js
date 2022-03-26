import Project from "./Project";
import ProjectShort from "./ProjectShort";
import classes from './ProjectList.module.css'

export default function ProjectList(props) {
	return (
		<div id="ProjectList" className={classes.container}>
			{props.projects.map((project) => (
				<ProjectShort
					project={project}
				/>
			))}
		</div>
	);
}