import { trivia_api } from './AxiosService.js'
class QuestionsService{

  async getQuestions(){
    const res = await trivia_api.get('/api.php?amount=15&type=multiple')
    console.log('what the heck is the ', res.data);
    const charactersIWant = res.data.filter(c => c.image).map(c => new Character(c))
    console.log({charactersIWant})
    appState.characters = charactersIWant
  }

}

export const questionsService = new QuestionsService()