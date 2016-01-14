/*
 * dependencies
 */
import jQuery from 'jquery';
/*
 * stylesheets
 */
require('./quotes.styl');
/*
 * module code
 */
const $ = jQuery;

const $buttonEls = $('.button');
const $displayEl = $('#display');
var equation = '';
var lastValEntered = '';

let updateDisplay = (val) => {
  $displayEl.html(val);
}

let handleButton = (e) => {
  let val = e.target.dataset.value;
  switch (val) {
    case 'allclear':
      equation = '';
      updateDisplay(0);
      break;
    case '=':
      updateDisplay(eval(equation));
      equation = 0;
      break;
    case 'pos-neg':
      // this 
      val = parseInt(lastValEntered * -1);
      lastValEntered = val.toString();
      //console.debug('lastValEntered: ', lastValEntered);
      //console.debug('equation before : ', equation);
      equation = (lastValEntered > 0) ? equation.substring(0, equation.length - 1) : equation.substring(0, equation.length - 2);
      equation += lastValEntered;
      //console.debug('equation after : ', equation);
      updateDisplay(equation);
      break;
    case '*':
    case '/':
    case '+':
    case '-':
      equation = equation === '' ? 0 + val : equation + val;
      updateDisplay(equation);
      break;
    default:
      lastValEntered = val;
      equation += val;
      updateDisplay(equation);
      break;
  }
}
$buttonEls.on( 'click', handleButton );
// $actionTwitterEl.on( 'click', () => { socialshare('tweet') } );
// $actionWarriorEl.on( 'click', ()=> { initializeClock('clockdiv', deadline(60)); } );
