import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			S.listItem().title("Hjemmeside").child(S.document().schemaType("home")),
			S.divider(),
			S.listItem()
				.title("Articles")
				.schemaType("article")
				.child(S.documentTypeList("article").title("Articles")),
		]);
