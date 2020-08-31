export type Question = {
  text: string;
};
export type Answer = {
  text: string;
  votes: number;
};
export type QandA = {
  question: Question;
  answers: Answer[];
};
export type QandAsDocument = {
  questions?: QandA[];
};
export type AnswerDetails = { 
  answer: Answer, 
  totalVotes: number, 
  handleClickAnswer: Object, 
  selectedAnswer: string, 
  highestVote: number
};

export type Styles = {
  selectedAnswer: string;
}