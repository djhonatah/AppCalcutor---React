import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleClear = () => {
    setDisplay('0');
  };

  const handleNumberClick = (number) => {
    setDisplay((prevDisplay) => (prevDisplay === '0' ? number : prevDisplay + number));
  };

  const handleOperatorClick = (operator) => {
    setDisplay((prevDisplay) => {
      const lastCharacter = prevDisplay.slice(-1);
      if (['+', '-', '*', '/'].includes(lastCharacter)) {
        return prevDisplay.slice(0, -1) + operator;
      } else {
        return prevDisplay + operator;
      }
    });
  };

  const handleDecimalClick = () => {
    setDisplay((prevDisplay) => {
      const lastNumber = prevDisplay.split(/[\+\-\*\/]/).pop();
      if (!lastNumber.includes('.')) {
        return prevDisplay + '.';
      } else {
        return prevDisplay;
      }
    });
  };

  const handleEqualClick = () => {
    setDisplay((prevDisplay) => {
      try {
        const result = eval(prevDisplay.replace(/--/g, '+'));
        return parseFloat(result.toFixed(4)).toString();
      } catch {
        return prevDisplay;
      }
    });
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
      <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
      <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
      <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      <button id="four" onClick={() => handleNumberClick('4')}>4</button>
      <button id="five" onClick={() => handleNumberClick('5')}>5</button>
      <button id="six" onClick={() => handleNumberClick('6')}>6</button>
      <button id="decimal" onClick={handleDecimalClick}>.</button>
      <button id="one" onClick={() => handleNumberClick('1')}>1</button>
      <button id="two" onClick={() => handleNumberClick('2')}>2</button>
      <button id="three" onClick={() => handleNumberClick('3')}>3</button>
      <button id="equals" onClick={handleEqualClick}>=</button>
      <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
    </div>
  );
}

export default App;
