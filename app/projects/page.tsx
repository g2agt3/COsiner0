export const metadata = { title: "Projects | Your Name" };

const projects = [
	{ id: 1, name: "Online Booking", description: "Online booking system for local businesses." },
	{ id: 2, name: "Online Store", description: "E-commerce platform for selling products." },
	{ id: 3, name: "Corporate Website", description: "Professional website for a fictional company." },
];

export default function ProjectsPage() {
	return (
		<main className="p-8">
			<h1 className="text-3xl font-bold">Projects</h1>

			{projects.map((project) => (
				<ul key={project.id}>
					<li>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
					</li>
				</ul>
			))}
		</main>
	);
}
