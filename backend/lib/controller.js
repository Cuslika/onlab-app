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

module.exports = {
    getAll
}
