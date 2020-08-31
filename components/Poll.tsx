import React, { useEffect, useState } from 'react';
import { QandAsDocument } from '../types';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
  selectedAnswer: string;
  setSelectedAnswer: Function;
};

const AnswerComponent = (props: any) => {
  const { answer, totalVotes, handleClickAnswer, selectedAnswer, highestVote } = props;
  const { text, votes } = answer;
  const { text: popularAnswer } = highestVote;
  useEffect(() => {
    const progress = document.querySelector('.highest-vote');
    const widthProp = progress && progress.getAttribute('data-done');
    progress && progress.setAttribute('style', widthProp !== null ? `width: ${widthProp}%; opacity: 1` : '0%; opacity: 0');
    const normalVotes = Array.from(document.querySelectorAll('.normal-vote'));
    normalVotes.map((vote: any) => {
      const normalVoteWidth = vote && vote.getAttribute('data-done');
      vote && vote.setAttribute('style', normalVoteWidth !== null ? `width: ${normalVoteWidth}% ; opacity: 1` : '0%; opacity: 0');
    });
  }, []);
  const voteIndicator = Math.round(votes / totalVotes * 100);
  return (
    <div onClick={handleClickAnswer} id={text} style={{ border: "1px solid #c9c9c9", borderRadius: 3, width: "432px",  marginBottom: 10, cursor: "pointer"}}>
      <div id={text} className={popularAnswer === text ? "highest" : "normal"}>
        <div id={text} className={popularAnswer === text ? "highest-vote" : "normal-vote"} data-done={voteIndicator}></div>
        <div className="score-labels" id={text}>
          <span id={text}>
            { text }
            {
              selectedAnswer === text && <img className="vote" src={require('../static/check-circle.svg')} />
            }
          </span>
          <span id={text} className="score-labels-right">{`${voteIndicator}%`}</span>
        </div>
      </div>
    </div>
  );
};

const PollComponent = (props: any) => {
  let theQuestion;
  let theAnswers;
  const { currentQuestion, setSelectedAnswer, selectedAnswer } = props;
  if(currentQuestion){
    const { question: { text }, answers } = currentQuestion;
    theQuestion = text;
    theAnswers = answers;
  }
  let votesTotal = theAnswers && theAnswers.reduce((voteCount: any, answer: any) => {
    return voteCount + answer.votes
  }, 0);

  const [votes, setVotes] = useState('0')
  useEffect(()=>{
    setVotes(votesTotal)
  },[votesTotal])
  const fetchHighestVotedAnswer = (answers: any) => {
    let highest = 0;
    let highestVoted = '';
    answers && answers.map((answer: any) => {
      const { votes, text } = answer;
      if(votes > highest){
        highest = votes;
        highestVoted = text;
      }      
    });
    const mostVoted = {
      text: highestVoted,
      votes: highest
    };
    return mostVoted;
  };
  const highestVote = fetchHighestVotedAnswer(theAnswers);
  const handleAnswerClicked = (event: any) => {
    !selectedAnswer ? (setSelectedAnswer(event.target.id),setVotes(votes + 1)) : null;
  };
  return (
    <div style={{ width: "60%", boxShadow: "-1px 3px 12px 0px rgba(0,0,0,0.20)", padding: 30, borderRadius: 5, margin: "auto" }}>
      <div style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>{`${theQuestion ? theQuestion : ""}`}</div>
      {
        theAnswers && theAnswers.map((answer: any, index: Int16Array) => {
          return (
            <AnswerComponent 
              key={index} 
              answer={answer} 
              totalVotes={votesTotal} 
              handleClickAnswer={handleAnswerClicked} 
              selectedAnswer={selectedAnswer}
              highestVote={highestVote}
            />
          );
        })
      }
      <div style={{ fontSize: 12, color: "#9e9e9e", marginTop: 10 }}>{`${votes ? votes : "..."} Votes`}</div>    
    </div>
  );
};

export default function Poll({ qandas, setSelectedAnswer, selectedAnswer }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState();
  const selectRandomQuestion = (questions: any) => {
    const max = questions.length;
    return Math.floor(Math.random() * Math.floor(max));
  };
  let QS: any;
  useEffect(() => {
    if(qandas){
      QS = qandas.questions;
      setCurrentQuestion(QS[selectRandomQuestion(QS)]);
    }
  }, [qandas]);
  return (<PollComponent currentQuestion={currentQuestion && currentQuestion} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer}/>);
};
