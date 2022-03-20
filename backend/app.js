function newId(array) {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
}

class QuizApp {
  constructor() {
    this.questions = [];
  }
  // C
  post(question, answers) {
    let item = {
      id: newId(this.questions),
      question: question,
      aanswers: answers,
      date: new Date(),
    };
    this.questions.push(item);
    return this.questions;
  }
  // R
  get(id) {
    return this.questions.filter((question) => question.id === id)[0];
  }
  // U
  update(id, newQuestion, newAnswers) {
    let index = this.questions.findIndex((question) => question.id === id);
    this.questions[index].question = newQuestion;
    this.questions[index].answers = newAnswers;
  }
  // D
  delete(id) {
    this.questions = this.questions.filter((question) => question.id != id);
    return this.questions;
  }
}

export default QuizApp;
