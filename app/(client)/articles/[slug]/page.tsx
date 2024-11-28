import type { QueryParams } from "next-sanity";
import useLoader from "@/common/queries/hooks/useLoader";
import { ARTICLE_QUERY } from "@/common/queries/article.query";

type ArticleType = {
	title: string;
	description: string;
};

const getHook = async ({ params }: { params: QueryParams }) =>
	await useLoader<ArticleType>(ARTICLE_QUERY, params);

export default async function ArticlePage({ params }: { params: QueryParams }) {
	const initialData = await getHook({ params });

	return (
		<div>
			<h1>{initialData?.data?.title}</h1>
			<p>{initialData?.data?.description}</p>
		</div>
	);
}
