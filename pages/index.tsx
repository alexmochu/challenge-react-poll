import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questions from '../questions.json';
import Poll from '../components/Poll';

const IndexPage = styled.div``;

const App = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  return(
  <IndexPage>
    <GlobalStyles 
    selectedAnswer={selectedAnswer}
    />
    <img src={require('../doc/react-poll-challenge.png')} className="banner" />
    <p>
      I would like to make a pan about philosophy ... but I Kant 😂
    </p>
    <Poll qandas={questions} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    <p>
      A philosopher is a person who knows less and less about more and more, until they know nothing about everything
    </p>
  </IndexPage>
  )
};

export default App;
/**
 * TIPS:
 *
 * You can load the check image like this:
 *
 *    <img src={require('../static/check-circle.svg')} />
 *
 */
