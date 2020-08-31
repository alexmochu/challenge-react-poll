import { createGlobalStyle } from 'styled-components';
import { Styles } from '../types';
/**
 * This file contains some starter global styles to make it easier for you to
 * complete the challenge.
 *
 * I recommend that you do not add styles here and, instead, add styles via
 * their respective styled-components.
 */

const size = {
  medium: '720px',
}

export const device = {
  mobile: `(max-width: ${size.medium})`,
};

export default createGlobalStyle`

  /* The Inter UI font face via: https://rsms.me/inter/ */
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  body {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
    color: #030C30;
    @media ${device.mobile} { 
      min-width: 720px;
    }
  }
  .banner {
    width: 70vh;
    @media ${device.mobile} { 
      min-width: 100vh;
    }
  }
  .highest {
    background-color: #ffffff;
    border-radius: 3px;
    position: relative;
    height: 40px;
    width: 432px;
    font-weight: ${(props : Styles) => (props.selectedAnswer ? "bold" : "normal")};
  }  
  .highest-vote {
    background: ${(props : Styles) => (props.selectedAnswer ? "linear-gradient(to left, #A3FFF5, #94EBE2)" : null)};
    border-radius: 3px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 4s ease 0.3s;
    position: relative;
  }
  .score-labels {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: absolute;
    top: -9px;
    width: 410px;
    align-items: center;
    span {
      margin: 20px 10px;
    }
  }
  .score-labels-right {
    justify-self: end;
    display: ${(props : Styles) => (props.selectedAnswer ? "block" : "none")};
  }
  .vote {
    width: 20px;
    height: 16px;
    position: relative;
    top: 3px;
    margin-left: 5px;    
  }  
  .normal {
    background-color: #ffffff;
    border-radius: 3px;
    position: relative;
    height: 40px;
    width: 432px;
  } 
  .normal-vote {
    background: ${(props : Styles) => (props.selectedAnswer ? "linear-gradient(to left, #f2f2f2, #dedede)" : null)};
    border-radius-top-left: 3px;
    border-radius-bottom-left: 3px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 4s ease 0.3s;
    position: relative;
  }
`;
