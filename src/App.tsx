import { useState } from 'react';
import './App.scss';
import Counter from './Counter/Counter';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const onClickPlus = (): void => {
    setCounter(counter + 1);
  };

  const onClickMinus = (): void => {
    setCounter(counter - 1);
  };

  const onClickReset = (): void => {
    setCounter(0);
  };

  return (
    <div className="app">
      <Counter
        counter={counter}
        onClickMinus={onClickMinus}
        onClickPlus={onClickPlus}
        onClickReset={onClickReset}
      />
    </div>
  );
}

export default App;
