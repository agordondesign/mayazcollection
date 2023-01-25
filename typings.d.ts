interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

export interface SplashPage extends SanityBody {
	_type: 'splashPage';
	launchField1: string;
	launchField2: string;
	slug: string;
	logoWhite: Image;
	splashProduct: Product[];
	title: string;
}

export interface SplashCollection extends SanityBody {
	_type: 'splashCollection';
	buttonLabel: string;
	slug: string;
	thumbnail: Image;
	modalHeader: string;
	modalImage: Image;
	modalBody: any[];
	modalSource: string;
}
