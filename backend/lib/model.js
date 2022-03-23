const fs = require("fs");
const path = require("path");

function newId(array) {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
}

class QuizApp {
    constructor(filepath) {
        this.filepath = filepath
        this.questions = filepath ? this.readFromJson() : []
    }

    readFromJson(){
        return JSON.parse(fs.readFileSync(
          path.normalize(this.filepath),"utf8",(err,data)=>{
          if (err) throw err
          })
        )
    }

    writeToJson(){
        if (this.filepath) {
          const jsonItem = JSON.stringify(this.questions)
          fs.writeFileSync(path.normalize(this.filepath), jsonItem, (err) => {
            if (err) throw err;
          });
      }
    }
    
  // C
  post(question, answers) {
    if(question && answers){
      this.questions.push({
        id: newId(this.questions),
        question: question,
        answers: answers,
        date: new Date(),
      });
      this.writeToJson();
      return this.questions;
    } else if(!question && !answers){
      return [];
    }
  }
  // R
  get(id) {
    return this.questions.filter((question) => question.id === id)[0];
  }
  getAll() {
    return this.questions;
  }
  // U
  update(id, newQuestion, newAnswers) {
    let index = this.questions.map((question) => question.id).indexOf(id);
    if(index > -1){
      this.questions[index].question = newQuestion;
      this.questions[index].answers = newAnswers;
      this.writeToJson();
      return this.questions;
    }
    else {
      return [];
    }
  }
  // D
  delete(id) {
    let index = this.questions.map((question) => question.id).indexOf(id);
    if(index > -1){
      this.questions.splice(index, 1);
      this.writeToJson();
      return this.questions;
    } else {
      return "Massage: No question with that id";
    }
  }
}

module.exports = QuizApp;