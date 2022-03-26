import Project from "./Project";

function ProjectList(props) {
    return (
        <div>
            {props.projects.map((project) => (
                <Project
                    key={project.key}
                    id={project.key}
                    title={project.title ?? "Project"}
                    description={project.description ?? "This is a project"}
                    images={project.images ?? ""}
                    // repo={project.repo}
                />
            ))}
        </div>
    )
}

export default ProjectList;