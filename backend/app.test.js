import { expect } from "chai";
import QuizApp from './app.js'

describe("app", function() {
  let testApp;
  beforeEach(()=>{
    testApp = new QuizApp
    testApp.post('world?', ['hi', 'world'])
  })
  it("id's are always unique", function() {
    testApp.post('1', ['a', 'b'])
    testApp.post('2', ['a', 'b'])
    testApp.delete(1)
    testApp.post('3', ['a', 'b'])
    expect(testApp.questions[1].id).to.equal(3)
  });
it("app deletes correctly", function() {
    testApp.post('1', ['a', 'b'])
    testApp.post('2', ['a', 'b'])
    testApp.post('3', ['a', 'b'])
    testApp.delete(0)
    testApp.delete(2)
    expect(testApp.get(1).id).to.equal(1)
  });
it("app updates correctly", function() {
    testApp.post('1', ['a', 'b'])
    testApp.post('2', ['a', 'b'])
    testApp.delete(1)
    testApp.update(2, '3', ['c', 'b'])
    expect(testApp.get(2).question).to.equal('3')
    expect(testApp.get(2).answers).to.have.members(['c', 'b'])
  });

});