import React from 'react';

interface Props {
  timeRemaining: number,
  startTimer: () => void,
}

const Home = ({ timeRemaining, startTimer }: Props) => (
  <div>
    <h1>Home</h1>
    <h3>{timeRemaining}</h3>
    <button onClick={startTimer}>Decrement</button>
  </div>
);

export default Home;

