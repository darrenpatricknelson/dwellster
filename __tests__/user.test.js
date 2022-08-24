// writing a test for the users controller
// Testing to see if a token is created
import { expect } from "chai";
import { createJWT } from '../controllers/user.controller.js';

describe('a token is returned', () => {
    const payload = {
        name: 'Darren',
        surname: 'Nelson',
        email: 'test@gmail.com',
        isAdmin: true
    };
    it('create token', (done) => {
        expect(createJWT(payload)).to.be.truthy;
        done();
    });
});