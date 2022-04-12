import { QuestionController } from "./Controllers/QuestionsController.js";

class App {
  questionsController = new QuestionController();
}

window["app"] = new App();
