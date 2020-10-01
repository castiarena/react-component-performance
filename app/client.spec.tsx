describe('Client test suite', () => {
    it('should mount the app on the document', () => {
        const main = document.createElement('main');
        main.id = 'app-wrapper';
        document.body.appendChild(main);
        // eslint-disable-next-line global-require
        require('./client');
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('should mount the app on the document with hot module replacement', () => {
        global.module = {
            // @ts-ignore
            hot: {
                accept: jest.fn,
            },
        };
        const main = document.createElement('main');
        main.id = 'app-wrapper';
        document.body.appendChild(main);
        // eslint-disable-next-line global-require
        require('./client');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});
