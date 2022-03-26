import Project from "./Project";
import ProjectShort from "./ProjectShort";

export default function ProjectList(props) {
	return (
		<div id="ProjectList">
			{props.projects.map((project) => (
				<ProjectShort
					project={project}
				/>
			))}
		</div>
	);
}