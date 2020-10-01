import envDispatcher from '.';

const virtualEnvironment = jest.fn();
jest.mock('../Virtual', () => virtualEnvironment, { virtual: true });

describe('Environment dispatcher', () => {
    it('should dispatch the Virtual mocked module', () => {
        const env = envDispatcher('virtual');
        expect(env).toBe(virtualEnvironment);
    });
});
