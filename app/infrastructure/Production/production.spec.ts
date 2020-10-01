import envDispatcher from '../EnvDispatcher';

const fakeExpress = () => ({
    use: jest.fn(),
});
const fakeMorgan = jest.fn();
jest.mock('express', () => fakeExpress);
jest.mock('morgan', () => fakeMorgan);

describe('Production test suite', () => {
    it('should use morgan for the logs', () => {
        const { server } = envDispatcher('production');
        expect(server.use).toBeCalled();
    });
    it('should call morgan with "common" config for production', () => {
        envDispatcher('production');
        expect(fakeMorgan).toBeCalledWith('common');
    });
});
