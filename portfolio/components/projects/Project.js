import Link from "next/link";
import { Fragment } from "react";

export default function Project(props) {
	return (
		<div id={props.id}>
			<h1><Link href={'/projects/'+props.id}>{props.title}</Link></h1>
			<p>{props.description}</p>
		</div>
	);
}