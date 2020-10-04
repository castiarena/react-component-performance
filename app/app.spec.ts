import request from 'supertest';
import express from 'express';
import runningServer from '.';

jest.mock('./infrastructure/EnvDispatcher',
    () => () => ({ server: express() }));

describe('App server test suite', () => {
    it('should run the app', (done) => {
        request(runningServer)
            .get('/')
            .expect('Content-Type', /html/)
            .end(() => {
                runningServer.close();
                done();
            });
    });
});
