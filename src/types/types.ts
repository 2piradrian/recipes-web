export type ingredient = {
	quantity: number;
	unit: string;
	element: string;
};

export type comment = {
	author: string;
	content: string;
};

export type recipe = {
	id: string;
	name: string;
	category: string;
	description: string;
	ingredients: Array<ingredient>;
	steps: Array<string>;
	comments: Array<comment>;
	image: string;
	author: string;
};

export type fullUserData = {
	uid: string;
	email: string;
	name: string;
	surname: string;
	image: number;
	categories: Array<string>;
	favourites: Array<string>;
	recipes: Array<recipe>;
};

export type partialUserData = {
	uid: string;
	email: string;
};

export type action = {
	type: string;
	payload: any;
};
