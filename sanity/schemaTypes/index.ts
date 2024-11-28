import type { SchemaTypeDefinition } from "sanity";
import Article from "./page/article.schema";
import Home from "./page/home.schema";

export const schemaTypes = [Article, Home];

export const schema: { types: SchemaTypeDefinition[] } = {
	types: schemaTypes,
};
