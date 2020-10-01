import envDispatcher from '../EnvDispatcher';

const fakeExpress = () => ({
    use: jest.fn(() => ({
        use: jest.fn(),
    })),
});
const fakeMorgan = jest.fn();
jest.mock('express', () => fakeExpress);
jest.mock('morgan', () => fakeMorgan);
// jest.mock('webpack');
jest.mock('webpack-dev-middleware');
jest.mock('webpack-hot-middleware');

describe('Development test suite', () => {
    it('should use morgan for the logs', () => {
        const { server } = envDispatcher('development');
        expect(server.use).toBeCalled();
    });
    it('should call morgan with "dev" config for development', () => {
        envDispatcher('development');
        expect(fakeMorgan).toBeCalledWith('dev');
    });
});
