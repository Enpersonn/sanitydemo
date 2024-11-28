import { defineField } from "sanity";

export const teaserData = defineField({
	name: "teaser",
	title: "Teaser",
	type: "object",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "text",
			title: "Text",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
	],
});
