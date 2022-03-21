import fs from 'fs'
import path from 'path'

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
    let item = {
      id: newId(this.questions),
      question: question,
      answers: answers,
      date: new Date(),
    };
    this.questions.push(item);
    this.writeToJson();
    return this.questions;
  }
  // R
  get(id) {
    return this.questions.filter((question) => question.id === id)[0];
  }
  // U
  update(id, newQuestion, newAnswers) {
    let index = this.questions.map((question) => question.id).indexOf(id);
    this.questions[index].question = newQuestion;
    this.questions[index].answers = newAnswers;
    this.writeToJson();
    return this.questions;
  }
  // D
  delete(id) {
    this.questions = this.questions.filter((question) => question.id != id);
    this.writeToJson();
    return this.questions;
  }
}

export default QuizApp;
