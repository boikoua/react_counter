import React from 'react';
import './Counter.scss';

type Props = {
  counter: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
  onClickReset: () => void;
};

const Counter: React.FC<Props> = ({
  counter,
  onClickMinus,
  onClickPlus,
  onClickReset,
}) => {
  return (
    <div className="counter">
      <h2>Counter:</h2>
      <h1>{counter}</h1>
      <button className="minus" onClick={onClickMinus}>
        - Minus
      </button>
      <button className="plus" onClick={onClickPlus}>
        Plus +
      </button>
      {counter !== 0 && (
        <button className="reset" onClick={onClickReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Counter;
