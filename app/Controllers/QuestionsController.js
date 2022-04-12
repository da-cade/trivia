import { ProxyState } from "../AppState.js"
import { answersService } from "../Services/AnswersService.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"

let numCorrect = 0
let numGuess =0

function _drawQuestions(){
  questionsService.renderAnswers()
  let questionTemplate = ''
  ProxyState.questions.forEach(q => questionTemplate += q.QuestionTemplate)
  document.getElementById('questions-landing').innerHTML = questionTemplate
}

export class QuestionController{
  constructor(){
    this.getQuestions()
    ProxyState.on("questions", _drawQuestions)
  }

  async getQuestions(){
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  checkCorrect(id, answerText){
    console.log(id, answerText)
    const foundQ = ProxyState.questions.find(q => id === q.id)
    if(foundQ.correctAnswer === answerText){
      numCorrect += 1
      let input = "Number Correct = " + numCorrect
      Pop.toast("Correct!", 'success', 'top-start', 2000, false)
      setTimeout(() => Pop.toast(input, 'info', 'bottom-end', 4000, false), 2000)
    }else{
      numGuess += 1
      Pop.toast("Oops, that ain't it!", 'error', 'top-start', 2000, false)
      if(numGuess == 2){
        document.getElementById(id).classList.add('greyed') 
        numGuess = 0
        Pop.toast("Two strikes and you're out!")
      } 
    }
  }
  correct(){
    
  }
  incorrect(){
    
  }
}