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