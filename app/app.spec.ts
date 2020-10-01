import request from 'supertest';
import express from 'express';
import server from '.';

jest.mock('./infrastructure/EnvDispatcher',
    () => () => ({ server: express() }));

describe('App server test suite', () => {
    it('should run the app', (done) => {
        request(server)
            .get('/')
            .expect('Content-Type', /html/)
            .end(() => done());
    });
});
