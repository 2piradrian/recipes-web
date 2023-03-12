export type ingredient = {
	quantity: string;
	unit: string;
	name: string;
};

export type comment = {
	author: string;
	content: string;
};

export type recipe = {
	id: string;
	name: string;
	category: string;
	time: string;
	description: string;
	ingredients: Array<ingredient>;
	steps: Array<string>;
	comments: Array<comment>;
	image: string;
	author: string;
};

export type partialUserData = {
	email: string;
	name: string;
	surname: string;
	image: number;
	categories: Array<string>;
	favourites: Array<string>;
	recipes: Array<recipe>;
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

export type action = {
	type: string;
	payload: any;
};
