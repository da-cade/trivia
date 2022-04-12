import { generateId } from "../Utils/generateId.js"

export class Question{
  constructor(data){
    this.id = data.id || generateId ()
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.answerBank = []
  }

  get QuestionTemplate(){
    // let input = (this.id).toString
    // return /*html*/`
    // <ul>
    //   <h6>${this.question}</h6>
    //   <div>
    //     <li class="selectable" id="${this.id}" onclick="${this.correctAnswer === this.answerBank[0] ? 'app.questionsController.correct()' : 'app.questionsController.incorrect(${input})'}">${this.answerBank[0]}</li>
    //     <li class="selectable" id="${this.id}" onclick="${this.correctAnswer === this.answerBank[1] ? 'app.questionsController.correct()' : 'app.questionsController.incorrect()'}">${this.answerBank[1]}</li>
    //     <li class="selectable" id="${this.id}" onclick="${this.correctAnswer === this.answerBank[2] ? 'app.questionsController.correct()' : 'app.questionsController.incorrect(${this.id})'}">${this.answerBank[2]}</li>
    //     <li class="selectable" id="${this.id}" onclick="${this.correctAnswer === this.answerBank[3] ? 'app.questionsController.correct()' : 'app.questionsController.incorrect(${this.id})'}">${this.answerBank[3]}</li>
    //   </div>
    // </ul>
    // `
    return /*html*/`
    <ul>
      <h6>${this.question}</h6>
      <div class="" id="${this.id}">
        <li class="selectable" onclick="app.questionsController.checkCorrect('${this.id}', '${this.answerBank[0]}')">${this.answerBank[0]}</li>
        <li class="selectable" onclick="app.questionsController.checkCorrect('${this.id}', '${this.answerBank[1]}')">${this.answerBank[1]}</li>
        <li class="selectable" onclick="app.questionsController.checkCorrect('${this.id}', '${this.answerBank[2]}')">${this.answerBank[2]}</li>
        <li class="selectable" onclick="app.questionsController.checkCorrect('${this.id}', '${this.answerBank[3]}')">${this.answerBank[3]}</li>
      </div>
    </ul>
    `
  }
}