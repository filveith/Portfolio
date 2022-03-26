import Link from "next/link";
import { Fragment } from "react";

export default function Project(props) {
	return (
		<div id={props.id}>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<Link href={props.github ?? "https://github.com/filveith"} target='_blank'>Git hub</Link>
		</div>
	);
}