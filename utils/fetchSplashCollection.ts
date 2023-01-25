import { SplashCollection } from '../typings';

export const fetchSplashCollection = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSplashCollection`
	);

	const data = await res.json();
	const splashCollections: SplashCollection[] = data.splashCollections;

	// console.log("fetching", projects);

	return splashCollections;
};
