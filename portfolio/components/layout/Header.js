import Link from "next/link";
import { Fragment } from "react";
import classes from "./Header.module.css";

export default function Header() {
	return (
		<div className={classes.container}>
			<header className={classes.header}>
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/about">Me</Link>
				<Link href="/contact">Contact</Link>
			</header>
		</div>
	);
}