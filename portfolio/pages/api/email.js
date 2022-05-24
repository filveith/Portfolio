import { createTransport } from "nodemailer";

export default async function handler(req, res) {
    let body = req.body

    const transporter = createTransport({
		port: 465,
		host: process.env.STMP,
		auth: {
			user: process.env.MY_EMAIL, // demo@example.com
			pass: process.env.PASSWORD,
		},
		secure: process.env.SSL,
	});

    const mailData = {
		from: body.from,
		to: process.env.MY_EMAIL,
		subject: 'contact_portfolio',
		text: `Message from ${body.firstName} ${body.lastName}`,
		html: `<div>Message from ${body.firstName} ${body.lastName}, ${body.from}, ${body.message}</div>`,
	};

	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

    // console.log(req.body)
    res.send('success')
}