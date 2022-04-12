import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js"

//an attempt at Fisher-Yates Algorithm function

// function _shuffleAnswers(answers){
//   // Fisher-Yates Algorithm
//   for (let i = answers.length -1 ; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     const temp = answers[i]
//     answers[i] = answers[j]
//     answers[j] = temp
//     return answers
//   }
// }

class QuestionsService {
  async getQuestions(){
    // @ts-ignore
    const res = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
    ProxyState.questions = res.data.results.map(q => new Question(q))
  }
  renderAnswers(){
    ProxyState.questions.forEach(q => {
      let answersArray = []
      answersArray.push(q.correctAnswer)
      q.incorrectAnswers.forEach(ia => answersArray.push(ia))
      console.log(q.correctAnswer)
      //the below function takes an answer and moves it using it's index [i] up or down the array a random amount
      const shuffledAnswers = answersArray.sort((answer, i) => 0.5 - Math.random())
      q.answerBank = shuffledAnswers
    }) 
  }
}

export const questionsService = new QuestionsService();