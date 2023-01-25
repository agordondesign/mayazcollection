import { SplashPage } from '../typings';

export const fetchSplashPage = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSplashPage`
	);

	const data = await res.json();
	const splashPage: SplashPage = data.splashPage;

	// console.log("fetching", projects);

	return splashPage;
};
