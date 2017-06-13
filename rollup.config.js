import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default {
	entry: 'main.js',
	dest: 'index.js',
	format: 'cjs',
	plugins: [
		resolve({
			main: true
		}),
		commonjs(),
		buble({transforms: {dangerousForOf: true}})
	],
	sourceMap: false
};
