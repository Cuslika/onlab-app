const QuizApp = require("../lib/model")

let quizApp;
if(process.env.npm_lifecycle_event === 'test') {
   quizApp = new QuizApp('lib\//json\//testQuestions.json');
} else {
   quizApp = new QuizApp('lib\//json\//questions.json');
}

function getAll(){
    return new Promise((resolve, reject) => {
        var result = quizApp.getAll()
        if (result.length > 0){
            resolve(result)
        } else {
            reject("No questions")
        }
    })
}

function getSingleQuestion(id){
    return new Promise((resolve, reject) => {
        var result = quizApp.get(id)
        if (result.length > 0){
            resolve(result)
        } else {
            reject("No questions")
        }
    })
}

function post(question, answers){
    return new Promise((resolve, reject) => {
        var result = quizApp.post(question, answers)
        if (result.length > 0){
            resolve(result)
        } else {
            reject("No questions")
        }
    })
}

function updateQuestion(id, question, answers){
    return new Promise((resolve, reject) => {
        var result = quizApp.update(id, question, answers)
        if (result.length > 0){
            resolve(result)
        } else {
            reject("No questions")
        }
    })
}

function deleteQuestion(id){
    return new Promise((resolve, reject) => {
        var result = quizApp.delete(id)
        if (result.length > 0){
            resolve(result)
        } else {
            reject("No questions")
        }
    })
}

module.exports = {
    getAll,
    getSingleQuestion,
    post,
    updateQuestion,
    deleteQuestion
}
