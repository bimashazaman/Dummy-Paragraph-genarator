import React, { useState } from "react";
import data from "./data";
function App() {
  //set the count to 0
  //set the count to the value of the count
  //set the text state []
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  //if the case clicked
  const handleSubmit = (e) => {
    //prevent the default action
    e.preventDefault();
   
    let amount = parseInt(count);
    // if the amount is greater than 0
    setText(data.slice(0, amount));


    if (amount > data.length) {
      alert("Your Dick is too big");
    } else {
      setCount(0);
    }

    if (amount === 0) {
      setText(["You stupid, enter a number to genarate!!!"]);
    }
    if (amount < 0) {
      setText(["I will put you in a freeze! where the temparature is that you want lol"]);
    }
    if (amount > 8) {
      alert("Your Dick is too big");
    }
  };

  return (
    <section className="section-center">
      <h3>Tired of Lorem?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount of paragraphs:</label>
        
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
