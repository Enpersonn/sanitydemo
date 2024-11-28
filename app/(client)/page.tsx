import useLoader from "@/common/queries/hooks/useLoader";
import { HOME_QUERY } from "@/common/queries/home.query";

type HomeType = {
	title: string;
	description: string;
};

const getHook = async () => await useLoader<HomeType>(HOME_QUERY);

export default async function HomePage() {
	const initialData = await getHook();

	return (
		<div>
			<p>HomePage</p>
			<h1>{initialData?.data?.title}</h1>
			<p>{initialData?.data?.description}</p>
		</div>
	);
}
