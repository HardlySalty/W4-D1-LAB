import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


export class QuestionsController{
  constructor(){}

  
  async getQuestions(){
    try {
      await questionsService.getQuestions()
    } catch (error) {
      Pop.error(error)
    }
  }
}