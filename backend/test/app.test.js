const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app.js');

describe("Hello World test", function() {
    it("Hello World test", function() {
        request(app).get('/').expect(200).end((err, res) => {
        expect(res.text).to.equal("Hello World")
        })
    })
})