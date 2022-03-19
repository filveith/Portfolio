// fil.veith.com/

import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
	return (
		<Fragment>
			<h1>Home Page</h1>
			<ul>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default HomePage;
