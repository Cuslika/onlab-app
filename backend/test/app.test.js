const req = require('express/lib/request');
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
    it("posts a question", function(done) {
        var data = {
            question: "What is the meaning of life?",
            answers: ["42", "The meaning of life", "The answer to life, the universe, and everything"]
        };
        const res = request(app).post("/question").send(data).set('Accept', 'application/json');
        res.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }
        expect(res.body.length).to.equal(1);
        done();
        })
    })

    it("deletes a question", function(done) {
        const res = request(app).delete("/question/0").set('Accept', 'application/json');
        res.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }
        expect(res.body.length).to.equal(0);
        done();
        })
    })

    it("updates a question", function(done) {
        data = {
            question: "What is the meaning of life?",
            answers: ["42", "The meaning of life", "The answer to life, the universe, and everything"]
        };
        const res = request(app).put("/question/0").send(data).set('Accept', 'application/json');
        res.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }
        expect(res.body.length).to.equal(1);
        done();
        })
    })

    it("gets a single message", function(done) {
        const res = request(app).get("/question/0").set('Accept', 'application/json');
        res.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }
        expect(res.body.length).to.equal(1);
        done();
        })
    })
})