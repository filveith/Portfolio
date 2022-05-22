import ProjectShort from "./ProjectShort";
import classes from "./ProjectList.module.scss";

export default function ProjectList(props) {
	return (
		<div id="ProjectList" className={classes.container}>
			{props.projects.map((project) => (
				<div key={project.key} className={classes.child}>
					<ProjectShort project={project} />
				</div>
			))}
		</div>
	);
}
