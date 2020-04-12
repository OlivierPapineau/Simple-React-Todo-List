import { IGenericObject } from './typings';

const isUnique = (state: IGenericObject[], newObject: IGenericObject, fieldToVerify: string = 'name'): boolean => {
	let ObjectIsUnique = false;

	state.forEach((item) => {
		ObjectIsUnique = !(item[fieldToVerify] === newObject[fieldToVerify]);
		if (typeof fieldToVerify === 'string') {
			const stateField = item[fieldToVerify] as string;
			const newField = newObject[fieldToVerify] as string;
			ObjectIsUnique = !(stateField.toLowerCase() === newField.toLowerCase());
		}
	});

	return ObjectIsUnique;
};

export { isUnique };
