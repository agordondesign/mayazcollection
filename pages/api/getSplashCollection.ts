import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';
import { SplashCollection } from '../../typings';

const query = groq`*[_type == "splashCollection"]`;

type Data = {
	splashCollections: SplashCollection[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const splashCollections: SplashCollection[] = await sanityClient.fetch(query);

	res.status(200).json({ splashCollections });
}
