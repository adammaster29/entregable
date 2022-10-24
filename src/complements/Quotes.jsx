import React from "react";
import quotes from './quotes.json'
const Quotes = ({ change,counts,colors,color }) => {
  return (
   
      <div className="card">
        <i class="bx bxs-quote-left bx-sm" style={{color:colors[color]}} ></i>

        <div className="text" style={{color:colors[color]}} >
          <p className="text--uno" >{quotes[counts].author}</p><br />
          <p className="text--dos">{quotes[counts].quote}</p>
        </div>

        <i class="bx bx-chevrons-right bx-sm" onClick={change} style={{color:colors[color]}} ></i>
      </div>
    
  );
};

export default Quotes;
