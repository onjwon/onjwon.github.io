const quotes = [
    {
      quote: "I can't go back to yesterday, because I was a different person then.",
    },
    {
      quote: "You mean more to me than anything in this world",
    },
    {
      quote:
        "Today's special moments are tomorrow's memories.",
    },
    {
      quote: "How do you spell love? You don't spell love, You feel it. ",
    },
  ];
  
  function getRandom() {
    const quote = document.querySelector(".random span");
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    quote.innerText = randomQuote.quote;
  }
  
  setInterval(getRandom, 5000);