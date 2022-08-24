// writing a test for the users controller
// Testing to see if a token is created
import { expect } from "chai";
import validator from 'validator';
const { isEmail } = validator;

describe('Email validator', () => {
    it('A valid email', (done) => {
        expect(isEmail('darren@gmail.com')).to.be.true;
        done();
    });

    it('An invalid email', (done) => {
        expect(isEmail('darren@gmail')).to.be.false;
        done();
    });
});

