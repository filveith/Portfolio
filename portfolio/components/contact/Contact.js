import { useState } from "react";

import RichText from "./RichText";

export default function Contact() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const [value, onChange] = useState("");

	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()

		const data = {
			from: event.target.email.value,
		  	firstName: event.target.firstName.value,
		  	lastName: event.target.lastName.value,
			message: value,
		}
	
		const JSONdata = JSON.stringify(data)
	
		// API endpoint where we send form data.
		const endpoint = '/api/email'
	
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		}
	
		// Send the form data to our forms API on Vercel and get a response.
		console.log("Sending");
		const response = await fetch(endpoint, options)
		console.log("Sent");
		
	}

	return (
		<div id="contact">
			<h1>Contact Me</h1>

			<form action="/emailStatus" method="POST" onSubmit={handleSubmit}>
				<input
					type="email"
					name=""
					id="email"
					placeholder="fil@veith.com"
					value={email}
					required
				/>
				<input
					type="name"
					name=""
					id="firstName"
					placeholder="Fil"
					required
				/>
				<input
					type="name"
					name=""
					id="lastName"
					placeholder="Veith"
					required
				/>
				<input
					type="submit"
					value="Contact me"
				/>
				<RichText
					id="message"
					onChange={onChange}
					value={value}
					// TODO add onChange for this
					controls={[
						["bold", "italic", "underline", "link"],
						["unorderedList", "h1", "h2", "h3"],
						["sup", "sub"],
						["alignLeft", "alignCenter", "alignRight"],
						["code"],
					]}
					stickyOffset={70}
					required
				/>
			</form>
		</div>
	);
}