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
  const handleOperationGood = () => good;
  const handleOperationNeutral = () => neutral;
  const handleOperationBad = () => bad;

  return (
    <>
      <Title title={title1} />
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Title title={title2} />

      {bad + good + neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Other text="good" operation={handleOperationGood()} />
          <Other text="neutral" operation={handleOperationNeutral()} />
          <Other text="bad" operation={handleOperationBad()} />
          <Statistics props={{ bad, good, neutral }} />
        </>
      )}
    </>
  );
};

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Other = ({ text, operation }) => (
  <p>
    {text} {operation}
  </p>
);

const Statistics = ({ props }) => {
  const handleOperationAll = () => props.bad + props.good + props.neutral;
  const handleOperationAverage = () => (-1 * props.bad + props.good) / 9;
  const handleOperationPositive = () => props.good / handleOperationAll();
  return (
    <>
      <InsideStatisticsComponent text="all" operation={handleOperationAll()} />
      <InsideStatisticsComponent
        text="average"
        operation={handleOperationAverage()}
      />
      <InsideStatisticsComponent
        text="positive"
        operation={handleOperationPositive()}
      />
    </>
  );
};
const InsideStatisticsComponent = ({ text, operation }) => (
  <p>
    {text} {operation}
  </p>
);
export default App;
