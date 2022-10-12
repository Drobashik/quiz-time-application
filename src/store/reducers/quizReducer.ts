import { QuizAction, QuizState } from "../../models/Quiz";

const initialState: QuizState = {
    quizes: [],
    isLoading: false,
    error: '',
}

const quizReducer = (state = initialState, action: QuizAction): QuizState => {

    switch (action.type) {
        default:
            return state;
    }

}

export default quizReducer;