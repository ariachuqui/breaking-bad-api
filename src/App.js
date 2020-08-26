import React, { useState } from "react";
import { useFetch } from "./useFetch";

function App() {
  
    const [num, setNum] = useState(1)

    const { data, loading } = useFetch(
      `https://www.breakingbadapi.com/api/quotes/${num}`
    );

    const { author, quote } = !!data && data[0];

    const handleNum = () => {
      setNum(num+1);
    }

    return (
        <>
            <header>
                <div className="title">
                    <div className="elemento-quimico">
                        <p className="numero">35</p>
                        <p className="letas">Br</p>
                    </div>
                    <p className="letras">eaking</p>
                </div>
                <div className="title bad">
                    <div className="elemento-quimico">
                        <p className="numero">56</p>
                        <p>Ba</p>
                    </div>
                    <p className="letras">d</p>
                </div>
            </header>

            <div className="quote-container">
                {loading ? (
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                ) : (
                    <>
                        <i className="fas fa-quote-left"></i>
                        <p className="quote"> {quote} </p>

                <p className="author">- {author}</p>
                    </>
                )}
            </div>

            <button onClick={ handleNum }>Next Quote</button>
        </>
    );
}

export default App;
