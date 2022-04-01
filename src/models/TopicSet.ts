export interface TopicSet {
    id: string,
    topicName: string,
    started: boolean,
    position: number,
    doneQuestions: number,
    questions: Question[]
};

export interface Question {
    Bookmark: boolean,
    Done: boolean,
    Notes: string,
    Problem: string,
    Topic: string,
    URL: string
};
