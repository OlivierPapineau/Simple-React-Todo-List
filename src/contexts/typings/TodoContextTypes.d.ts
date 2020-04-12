export interface ITodoItem {
	[key: string]: string | number | boolean;
	name: string;
	done: boolean;
}

export interface ITodoProviderProps {
	children?: TChildrenType;
}
