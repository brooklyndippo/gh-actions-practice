import {jest} from '@jest/globals';
import { hello } from '../src/index.js'

test('Test Hello', () => {
	expect(hello()).toBe('Hello World')
})