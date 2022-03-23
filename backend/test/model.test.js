const expect = require ('chai').expect;
const QuizApp = require ('../lib/model.js');

describe("app", function() {
  let testApp;
  beforeEach(()=>{
    testApp = new QuizApp();
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
it("writes to given filepath", function() {
  let testFileWriteApp = new QuizApp("json\//testQuestions.json")
  expect(testFileWriteApp.questions.length).to.equal(0)
  testFileWriteApp.post("Hi?", ["a", "b"])
  expect(testFileWriteApp.questions.length).to.equal(1)
  let testFileReadApp = new QuizApp("json\//testQuestions.json")
  expect(testFileReadApp.questions.length).to.equal(1)
  testFileReadApp.delete(1)
  let testFileClearedApp = new QuizApp("json\//testQuestions.json")
  expect(testFileClearedApp.questions.length).to.equal(0)
});
it("rejects empty messages", function() {
  let testApp = new QuizApp()
  expect(testApp.post('')).to.deep.equal([])
});
it("no messages if no messages are sent", function() {
  let testApp = new QuizApp()
  expect(testApp.getAll()).to.deep.equal([])
});
it("rejects false update", function() {
  let testApp = new QuizApp()
  expect(testApp.update(0, "")).to.deep.equal([])
});
it("errors if no message to delete", function() {
  let testApp = new QuizApp()
  expect(testApp.delete(0)).to.deep.equal("Massage: No question with that id")
});

});