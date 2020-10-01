import hotModuleReplacement from './hotModuleReplacement';

describe('Hot Module Replacement test suite', () => {
    it('should skip hmr if not exists', () => {
        const notHot = jest.fn();
        hotModuleReplacement({ notHot });
        expect(notHot).not.toBeCalled();
    });

    it('should call accept the changes of hot module replacement', () => {
        const hmrMock = {
            hot: {
                accept: jest.fn(),
                addStatusHandler: jest.fn(),
            },
        };
        hotModuleReplacement(hmrMock);
        expect(hmrMock.hot.accept).toBeCalled();
    });

    it('should add a status handler', () => {
        const hmrMock = {
            hot: {
                accept: jest.fn(),
                addStatusHandler: jest.fn((some) => some('not prepare')),
            },
        };
        hotModuleReplacement(hmrMock);
        expect(hmrMock.hot.addStatusHandler).toBeCalled();
    });

    it('should add a status handler with a "prepare" value', () => {
        const hmrMock = {
            hot: {
                accept: jest.fn(),
                addStatusHandler: jest.fn((some) => some('prepare')),
            },
        };
        hotModuleReplacement(hmrMock);
        expect(hmrMock.hot.addStatusHandler).toBeCalled();
    });
});
