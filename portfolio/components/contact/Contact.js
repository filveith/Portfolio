import RichText from "./RichText";

export default function Contact() {

	return (
		<div id="contact">
			<h1>Contact Me</h1>
			<form action="" method="post" onSubmit={console.log("Helo")}>
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
					placeholder="First Name"
                    required
				/>
				<input
					type="name"
					name=""
					id="lastName"
					placeholder="Last Name"
                    required
				/>
                <input type="submit" value="Contact me"/>
				<RichText
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
