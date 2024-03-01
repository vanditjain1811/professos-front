import React, { useEffect, useState } from 'react'
import "./Counter.css"




const Counter = () => {

    const [counts, setCounts] = useState({
        companies: 0,
        candidates: 0,
        timeToFill: 0,
        availability: 0,
        availability2: 0,
      });
    
      useEffect(() => {
        const updateCounter = () => {
          const increment = {
            companies: 1254 / 1200,
            candidates: 13000 / 1200,
            timeToFill: 1200 / 1200,
            availability: 732 / 1200,
            availability2: 1,
          };
    
          setCounts(prevCounts => {
            const newCounts = {
              companies: prevCounts.companies + increment.companies,
              candidates: prevCounts.candidates + increment.candidates,
              timeToFill: prevCounts.timeToFill + increment.timeToFill,
              availability: prevCounts.availability + increment.availability,
              availability2: prevCounts.availability2 + increment.availability2,
            };

        if (newCounts.companies >= 100) {
            newCounts.companies = 100;
          }
          if (newCounts.candidates >= 1000) {
            newCounts.candidates = 1000;
          }
          if (newCounts.timeToFill >= 70) {
            newCounts.timeToFill = 70;
          }
          if (newCounts.availability >= 24) {
            newCounts.availability = 24;
          }
          if (newCounts.availability2 >= 7) {
            newCounts.availability2 = 7;
          }
  
          return newCounts;
        });
      };
  
    
        const counterInterval = setInterval(updateCounter, 10);
    
        return () => {
          clearInterval(counterInterval);
        };
      }, []);

  return (
    <div className="counter-wrapper">
    <div className="counter">
      <h1 className="count">{Math.ceil(counts.companies)}+</h1>
      <p>Companies Associated</p>
    </div>
    <div className="counter">
      <h1 className="count">{Math.ceil(counts.candidates)}+</h1>
      <p>Candidates Selected</p>
    </div>
    <div className="counter">
      <h1 className="count">{Math.floor(counts.timeToFill)}%</h1>
      <p>Less time to fill</p>
    </div>
    <div className="counter">
      <h1 className="count">{Math.ceil(counts.availability)}/{Math.ceil(counts.availability2)}</h1>
      <p>Availability</p>
    </div>
  </div>

  )
}

export default Counter