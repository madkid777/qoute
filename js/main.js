var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        name: "--Oscar Wilde"
    }, {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        name: "--Marilyn Monroe"
    },
    {
        quote: "“So many books, so little time.”", name: "--Frank Zappa"
    }, {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        name: "--Albert Einstein"
    }
]

var newRandom = 0;
function getQuote() {
    do {
        var random = quotes.at(Math.floor(Math.random() * (quotes.length)))
    } while (newRandom === random)
    newRandom = random
    document.getElementById("quote").innerHTML = random.quote
    document.getElementById("name").innerHTML = random.name
    console.log(random)
}