// fil.veith.com/projects/projectName

import { useRouter } from "next/router";

function Project() {
	const router = useRouter();

    const project_name = router.query.projectName // Get the projectName from url 
    console.log(project_name);

	return <h1>Project Page</h1>;
}

export default Project;
