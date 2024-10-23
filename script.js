   function generate () {

    var quotes ={ "― Marilyn Monroe" :'"Im selfish impatient and a little insecure. I make mistakes I am out of control Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst then you sure as hell dont deserve me at my best."',"― Frank Zappa" :'"So many books so little time."'
        ,"― Albert Einstein" :'"Two things are infinite the universe and human stupidity and Im not sure about the universe."'
        ,"― Marcus  Tullius Cicero":'“A room without books is like a body without a soul.”'
       }

       var authors = Object.keys(quotes);
       var author = authors[Math.floor(Math.random()* authors.length)];
       var quote = quotes[author];
       document.getElementById("quote").innerHTML = quote;
       document.getElementById("author").innerHTML = author;

   }                     