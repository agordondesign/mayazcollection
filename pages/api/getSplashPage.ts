import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';
import { SplashPage } from '../../typings';

const query = groq`*[_type == "splashPage"][0] {
  ...,
}`;

type Data = {
	splashPage: SplashPage;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const splashPage: SplashPage = await sanityClient.fetch(query);

	res.status(200).json({ splashPage });
}
