import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const title1 = "give feedback";
  const title2 = "statistics";

  const handleGoodClick = () => {
    const toAdd = good;
    setGood(toAdd + 1);
  };
  const handleNeutralClick = () => {
    const toAdd = neutral;
    setNeutral(toAdd + 1);
  };
  const handleBadClick = () => {
    const toAdd = bad;
    setBad(toAdd + 1);
  };
  return (
    <>
      <Title title={title1} />
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Title title={title2} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

export default App;
