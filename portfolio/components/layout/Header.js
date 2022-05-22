import Link from "next/link";
import { Fragment } from "react";
import classes from "./Header.module.scss";

export default function Header() {
	return (
		<div className={classes.container}>
			<header className={classes.header}>
				<Link href="/">Home</Link>
				<Link href="/#about_me">Me</Link>
				<Link href="/#my_projects">Projects</Link>
				<Link href="/#contact">Contact</Link>
			</header>
		</div>
	);
}
