import app = require('../app');
import request = require('supertest');

// Basic POST unit test
describe('POST /', () => {
    it('returns "Hello World!"', () => {
        return request(app)
            .post('/')
            .expect(200)
            .expect("Hello World!")
    });
});
