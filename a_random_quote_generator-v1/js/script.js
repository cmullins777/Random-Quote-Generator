/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
  Array of quotes on design with author, noting citation and year where available
***/
var quotes = [
  {
     quote: 'Have no fear of perfection—you’ll never reach it.',
     source: 'Salvador Dali'
  },
  {
     quote: 'Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.',
     source: 'Irene Au'
  },
  {
     quote: 'The alternative to good design is always bad design. There is no such thing as no design.',
     source: 'Adam Judge',
     citation: '"The Little Black Book of Design"',
     year: '2011'
  },
  {
     quote: 'Design is not just what it looks like and feels like. Design is how it works.',
     source: 'Steve Jobs',
     citation: '"The Guts of a New Machine", NY Times article',
     year: '2003'
  },
  {
     quote: 'Creativity is nothing but a mind set free.',
     source: 'Torrie T. Asai',
  },
  {
     quote: 'Design transcends agenda. It speaks to the politics of optimism.',
     source: 'Paul Bennett',
  },
  {
     quote: 'Get rid of everything that is not essential to making a point.',
     source: 'Christoph Niemann',
  },
  {
     quote: 'The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.',
     source: 'Charles Eames',
     citation: 'Design philosophy of the Eameses studio',
     year: '1941'
  },
  {
     quote: 'Make it simple, but significant.',
     source: 'Don Draper',
     citation: '"Mad Men, Season 4, Episode 4"',
     year: '2010'
  },
  {
     quote: 'Simplicity is the ultimate sophistication.',
     source: 'Leonardo da Vinci',
  },
  {
     quote: 'Whitespace is like air: it is necessary for design to breathe.',
     source: 'Wojciech Zielinski',
  },
  {
     quote: 'Look at usual things with unusual eyes.',
     source: 'Vico Magistretti',
  },
  {
     quote: 'I love deadlines. I like the whooshing sound they make as they fly by.',
     source: 'Douglas Adams'
  },
  {
     quote: 'For every complex problem, there is an answer that is clear, simple, and wrong.',
     source: 'H. L. Mencken'
  },
  {
     quote: 'Futures cannot be predicted but futures can be invented.',
     source: 'Dennis Gabor',
     citation: '"Inventing the Future"',
     year: 1963
  },
  {
     quote: 'Good design is obvious. Great design is transparent.',
     source: 'Joe Sparano'
  },
  {
     quote: 'Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.',
     source: 'Nicholas Negroponte'
  },
  {
     quote: 'Styles come and go. Good design is a language, not a style.',
     source: 'Massimo Vignelli'
  },
  {
     quote: 'If you think good design is expensive, you should look at the cost of bad design.',
     source: 'Ralf Speth'
  },
  {
     quote: 'Everything is designed. Few things are designed well.',
     source: 'Brian Reed'
  },
  {
     quote: 'If I had asked people what they wanted, they would have said faster horses.',
     source: 'Henry Ford'
  },
  {
     quote: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.',
     source: 'Antoine de Saint-Exupery'
  },
  {
     quote: 'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
     source: 'Steve Jobs'
  },
  {
     quote: 'Design is more important than technology in most consumer applications.',
     source: 'Dave McClure'
  },
  {
     quote: 'Only those who attempt the absurd will achieve the impossible.',
     source: 'M.C. Escher'
  },
  {
     quote: 'A user interface is like a joke. If you have to explain it, it’s not that good.',
     source: 'Martin LeBlanc'
  },
  {
     quote: 'I don’t think the Empire had Wookiees in mind when they designed her, Chewie.',
     source: 'Han Solo',
     citation: '"Star Wars: Episode VI - Return of the Jedi"',
     year: '1983'
  },
  {
     quote: 'Curiosity about life in all its aspects, I think, is still the secret of great creative people.',
     source: 'Leo Burnett'
  },
  {
     quote: 'Less is more work.',
     source: 'Patric McCue'
  },
  {
     quote: 'Design creates culture. Culture shapes values. Values determine the future.',
     source: 'Robert L. Peters'
  },
];
/***
  Generates a random number used to select a quote from the quotes array
***/
function getRandomQuote() {
  var ranNum = Math.floor(Math.random() * 30);
  return quotes[ranNum];
};
/***
  Prints the randomly selected quote to a div with formatting, adds citation and year if available
***/
function printQuote() {
  var ranQuot = getRandomQuote();
    htmlString = ' ';
    htmlString += '<p class="quote">' + ranQuot.quote + '</p>';
    htmlString += '<p class="source">' + ranQuot.source;
      if (ranQuot.citation || ranQuot.year){
        htmlString += '<span class="citation">' + ranQuot.citation + '</span>';
        htmlString += '<span class = "year">' + ranQuot.year + '</span>';
        '</p>';
      }
  document.getElementById('quote-box').innerHTML = htmlString;
  return htmlString;
};
printQuote();
/***
  Calls the 'printQuote function' when "Show another quote" button is clicked.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
