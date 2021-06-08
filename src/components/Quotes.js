import React, { useEffect, useState } from 'react';
import './Quotes.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
// import db from '../firebase';
// import firebase from "firebase";

function Quotes() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
    
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
          })
    }


    //  By using firebase

    // const fetchQuotes= async() => {

    //     const response = db.collection('quotes');
        
    //     const dataQuotes = await response.get();
    //     // console.log(data);

    //     let randomNum = Math.floor(Math.random() * dataQuotes.length)
    //     let randomQuote = dataQuotes[randomNum];
    //     // console.log(randomNum);
    
    //      setQuote(randomQuote.quote)
    //      setAuthor(randomQuote.author);
    //   }


    const handleClick = () => {
          fetchQuotes();
    }


    return (
        <div className="box">
            <div className="text">
                {quote}
                <h4 className="author">
                    {author}
                </h4>
            </div>

            {/* {
                quotes && quotes.map(quote => (
                    <div key={quote.id} className="text">
                        {quote.quote}
                        <h4 className="author">
                            {quote.author}
                        </h4>
                    </div>
                ))
            } */}

            <div className="buttons">
                <div className="twitter_logo">
                    <TwitterIcon />
                </div>
                
                <div className="new_quote">
                    <Button onClick={handleClick} variant="contained" color="primary">New Quote</Button>
                </div>
            </div>
        </div>
    );
};

export default Quotes;
