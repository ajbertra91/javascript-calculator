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
const $actionEl = $('#action');
const $actionTwitterEl = $('#twitter-action');
const $currentQuoteEl = $('#current-quote');
const quotesList = [
  {
    id: 1
    ,text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord."
    ,source: "Romans 8:38-39"
  }
  ,{
    id: 2
    ,text: "I will never leave you nor forsake you. So we can confidently say, 'The Lord is my helper; I will not fear; what can man do to me?'"
    ,source: "Hebrews 13:5c-6"
  }
  ,{
    id: 3
    ,text: "For I know the plans I have for you, declares the Lord, plans for welfare [literally “peace”] and not for evil, to give you a future and a hope."
    ,source: "Jeremiah 29:11"
  }
  ,{
    id: 4
    ,text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose."
    ,source: "Romans 8:28"
  }
  ,{
    id: 5
    ,text: "I give them eternal life, and they will never perish, and no one will snatch them out of my hand. My Father, who has given them to me, is greater than all, and no one is able to snatch them out of the Father's hand."
    ,source: "Romans 8:38-39"
  }
  ,{
    id: 6
    ,text: "All that the Father gives me will come to me, and whoever comes to me I will never cast out."
    ,source: "John 6:37"
  }
  ,{
    id: 7
    ,text: "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever."
    ,source: "Psalm 23:6"
  }
];

let currentQuote = {};

let getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

let updateQuote = () => {
  let rnd = getRandomNumber(1,7);
  let quote = quotesList.filter((quote) => quote.id === rnd);
  console.debug('quote[0].text: ', quote[0].text);
  currentQuote = quote;
  $currentQuoteEl
    .animate({'opacity': 0}, 300, function() {
      $(this).find('#text').html(quote[0].text);
      $(this).find('#source').html(quote[0].source);
    }).animate({'opacity':1}, 300);
}

let socialshare = (e, media) => {
  e.preventDefault;
  if (media = 'twitter') {
    console.log('social media type: ', media);
    let url = 'https://twitter.com/intent/tweet?text=' + currentQuote[0].text;
    $actionTwitterEl.attr('href', url);
  }
}

updateQuote();

$actionEl.on( 'click', updateQuote );
$actionTwitterEl.on( 'click', () => { socialshare('tweet') } );
// $actionWarriorEl.on( 'click', ()=> { initializeClock('clockdiv', deadline(60)); } );
