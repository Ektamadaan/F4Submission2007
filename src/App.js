import React, { useState } from 'react';

const buttonStyle = {
  backgroundColor: "black",
  color: "white", 
  padding: "12px",
  marginRight: "15px"
};

const divStyle = {
textAlign: "center",
margin: "auto",
width: "fit-content",
border: "2px solid black",
padding: "30px",
boxShadow: "0px 0px 25px 15px lightblue",
marginTop: "50%",
marginLeft: "50%",
marginBottom: "50%",
marginRight: "50%"
};

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInput = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Inputs cannot be empty.');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Inputs must be valid numbers.');
      return false;
    }
    setError('');
    return true;
  };

  const handleCalculation = (operation) => {
    if (!validateInput()) return;

    let res;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setError('Cannot divide by zero.');
          return;
        }
        res = number1 / number2;
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <div style={divStyle}>
      <h1 style = {{}}>React Calculator</h1>
      <div>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Num 1"
          style={{padding:"10px"}}
        /><br></br><br></br>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Num 2"
          style={{padding:"10px"}}
        />
      </div><br></br>
      
      <div>
        <button style = {buttonStyle} onClick={() => handleCalculation('add')}>+</button>
        <button style = {buttonStyle} onClick={() => handleCalculation('subtract')}>-</button>
        <button style = {buttonStyle} onClick={() => handleCalculation('multiply')}>*</button>
        <button style = {buttonStyle} onClick={() => handleCalculation('divide')}>/</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && !error && <div style={{ color: 'green' }}>Result: {result}</div>}
    </div>
  );
};

export default Calculator;
