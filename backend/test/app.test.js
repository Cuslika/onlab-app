const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app.js');

describe("Hello World test", function() {
    it.only("gets from backend question", function(done) {
        const res = request(app).get('/')
        res.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }
        expect(res.body.length).to.equal(1);
        done();
        })
    })
})