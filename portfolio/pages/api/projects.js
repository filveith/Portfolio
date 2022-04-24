// /api/new-project
// POST

export default async function handler(req, res) {
	if (req.method === "GET") {
		let data = []

		const projects = await (
			await fetch("http://filveith.ddns.net:2000/projects", {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			})
		).json();

		for (let project of projects) {
			let projectData = { details:{}, tags: [], images: [] };

			let tags_id = await (
				await fetch(
					`http://filveith.ddns.net:2000/projects_tags/${project.projectId}`,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
						},
					}
				)
			).json();
			// console.log(project.projectId);

			let all_tags = [];
			for (let tagId of tags_id) {
				let tags = await (
					await fetch(
						`http://filveith.ddns.net:2000/tags/${tagId.tagId}`,
						{
							method: "GET",
							headers: {
								Accept: "application/json",
							},
						}
					)
				).json();
				projectData["tags"].push(tags[0]);
			}

			let images = await (
				await fetch(
					`http://filveith.ddns.net:2000/images/${project.projectId}`,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
						},
					}
				)
			).json();
			// console.log(images);
			projectData["images"].push(...images);
			projectData["details"] = project;
			data.push(projectData);
		}
		// console.log(data);
		// console.log(data["minesweeper"].tags);

		res.status(201).json({ projects: data });
	}
}

// 1
// [ { tagId: 1, tagName: 'JavaScript', color: '#ffffff' } ]
// [ { tagId: 2, tagName: 'React', color: '#ffffff' } ]
// [
//   {
//     imageId: 1,
//     projectId: 1,
//     image: 'https://raw.githubusercontent.com/filveith/Minesweeper-bot/main/img/9x9.gif'
//   }
// ]
// 2
// []
// 3
// []
// 4
// [ { tagId: 3, tagName: 'React-Native', color: '#ffffff' } ]
// []
// 5
// []
// 6
// []

// PROJECT
const project = [
	{
		projectId: 1,
		title: "minesweeper",
		description: "A bot that plays minesweeper for you",
		github: "https://github.com/filveith/Minesweeper-bot",
	},
	{
		projectId: 2,
		title: "BetterDiscord-Spotify-Lyrics-Status",
		description: "Change your discord status",
		github: "https://github.com/filveith/BetterDiscord-Spotify-Lyrics-Status",
	},
	{
		projectId: 3,
		title: "OCR",
		description: "A basic OCR that uses a knn, made in python",
		github: "https://github.com/filveith/OCR",
	},
	{
		projectId: 4,
		title: "Banggood-money-scraper",
		description: "A scrapper that recolts virtual money of a website",
		github: "https://github.com/filveith/banggood-money-scraper",
	},
	{
		projectId: 5,
		title: "Gomoku",
		description:
			'A "connect 4" but with some tweaks, it was a 2 person school project during my first year in CS',
		github: "https://github.com/filveith/DUT-Gomoku-2021",
	},
	{
		projectId: 6,
		title: "Sokoban",
		description:
			'The well known "Sokoban" made in Java for a first year CS degree project',
		github: "https://github.com/filveith/DUT-Sokoban-2021",
	},
];

//Tags-project
const tag_pro = [
	{ tagId: 1, projectId: 1 },
	{ tagId: 2, projectId: 1 },
	{ tagId: 3, projectId: 4 },
];

//tags
const tags = [
	{ tagId: 1, tagName: "JavaScript", color: "#ffffff" },
	{ tagId: 2, tagName: "React", color: "#ffffff" },
	{ tagId: 3, tagName: "React-Native", color: "#ffffff" },
	{ tagId: 4, tagName: "NextJS", color: "#ffffff" },
	{ tagId: 5, tagName: "PHP", color: "#ffffff" },
	{ tagId: 6, tagName: "Python", color: "#ffffff" },
];

//images
const images = [
	{
		imageId: 1,
		projectId: 1,
		image: "https://raw.githubusercontent.com/filveith/Minesweeper-bot/main/img/9x9.gif",
	},
];
