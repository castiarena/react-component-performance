describe('Client test suite', () => {
    it('should mount the app on the document with HRM', () => {
        const main = document.createElement('main');
        main.id = 'app-wrapper';
        document.body.appendChild(main);
        // eslint-disable-next-line global-require
        require('./client');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});
