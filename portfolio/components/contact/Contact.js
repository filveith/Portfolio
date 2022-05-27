import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

import RichText from "./RichText";

export default function Contact() {
	const [message, setMessage] = useState("");

	const router = useRouter()

	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()

		const data = {
			from: event.target.email.value,
		  	firstName: event.target.firstName.value,
		  	lastName: event.target.lastName.value,
			message: message,
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
		const response = await fetch(endpoint, options)
		
		router.push('/emailStatus')
	}

	return (
		<div id="contact">
			<h1>Contact Me</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name=""
					id="email"
					placeholder="fil@veith.com"
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
					onChange={setMessage}
					value={message}
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