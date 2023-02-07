import { appState } from '../AppState.js';
import { Question } from '../Models/Question.js';
import { trivia_api } from './AxiosService.js'


class QuestionsService{

  async getQuestions(){
    const res = await trivia_api.get('/api.php?amount=15&type=multiple')
    const questions = res.data.results.map(c => new Question(c))
    appState.questions = questions
  }

  getRandomQuestion(){
    randomIndex = Math.floor(Math.random() * appState.questions.length)
    appState.question =  appState.questions[randomIndex]
    appState.questions.splice(randomIndex, 1)
  }

}

export const questionsService = new QuestionsService()