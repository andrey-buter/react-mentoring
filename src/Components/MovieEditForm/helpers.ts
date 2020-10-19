import { RemoteErrorsModel } from './RemoteErrors.model';

export function isFloat(n: number | null | undefined) {
	return Number(n) === n && n % 1 !== 0;
}

export function mapRemoteErrors(errorsArray: string[]): RemoteErrorsModel {
	return errorsArray.reduce((output, error) => {
		const data = [...error.matchAll(/"(.*?)"(.*)/g)][0];

		output[data[1]] = `{{field}}${data[2]}`;

		return output;
	}, {} as RemoteErrorsModel);
}

// function objectFlip(obj: Record<string, string>) {
// 	return Object.keys(obj).reduce((ret, key) => {
// 		ret[obj[key]] = key;

// 		return ret;
// 	}, {} as Record<string, string>);
// }
