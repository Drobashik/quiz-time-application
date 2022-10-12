export type Quiz = {
    title: string,
    questions: Questions[],
    answer: string,
    remainingTime: number,
}

export type QuizAction = {
    payload: any,
    type: string,
}

export type QuizState = {
    quizes: Quiz[],
    isLoading: boolean,
    error: string,
}

export type QuizThemes = {
    theme: string,
    quizUrl: string,
    image: string,
}

type Questions = {
    questionVariants: string[],
    selected: boolean,
}
