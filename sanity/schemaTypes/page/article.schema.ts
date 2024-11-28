import { teaserData } from "@/sanity/utils/teaser/teaser";
import { defineType } from "sanity";

const Article = defineType({
	name: "article",
	title: "Article",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		teaserData,
	],
});

export default Article;
