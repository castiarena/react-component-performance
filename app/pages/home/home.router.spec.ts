import request from 'supertest';
import express from 'express';
import home from '.';

describe('Home router test suite', () => {
    it('should return an html', (done) => {
        const mockApp = express();
        mockApp.use(home);

        request(mockApp)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err) => {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});
