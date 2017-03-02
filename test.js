import test from 'ava';
import mapArray from './';

test('convert an object to array', t => {
	const obj = {
		name: 'Giorgio',
		surname: 'Bianchi'
	};
	const result = mapArray(obj, (key, value) => key + ' ' + value);
	t.deepEqual(result, ['name Giorgio', 'surname Bianchi']);
});
