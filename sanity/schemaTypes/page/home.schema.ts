import { defineType } from "sanity";

const Home = defineType({
	name: "home",
	title: "Home",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
	],
});

export default Home;
