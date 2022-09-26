var arrayOfQuotes = [
    {
        "author":"Oscar Wilde",
        "quotes":"Be yourself; everyone else is already taken.",
    },
    {
        "author":"Marilyn Monroe",
        "quotes":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    },
    {
        "author":"Albert Einstein",
        "quotes":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    {
        "author":"Frank Zappa",
        "quotes":"So many books, so little time.",
    },
    {
        "author":"Marcus Tullius Cicero",
        "quotes":"A room without books is like a body without a soul.",
    },
    {
        "author":"Mae West",
        "quotes":"You only live once, but if you do it right, once is enough.",
    },
    
    {
        "author":"Mahatma Gandhi",
        "quotes":"Be the change that you wish to see in the world.",
    }
]
function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}
function genratesQuotes(){
    var randomNumber=randomSelector(arrayOfQuotes.length);
    document.getElementById("quotesOutput").innerHTML='"'+arrayOfQuotes[randomNumber].quotes+'"';
    document.getElementById("authorOutput").innerHTML='"'+arrayOfQuotes[randomNumber].author+'"';
}