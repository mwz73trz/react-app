import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Calculate = (props) => {
  const [value, setValue] = useState(0);

  const addNum = (val, val2) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a + b);
  };

  const subtractNum = (val, val2) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a - b);
  };

  const multiplyNum = (val, val2) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a * b);
  };

  const divideNum = (val, val2) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a / b);
  };

  return (
    <div>
      <ButtonGroup aria-label="calculator-buttons">
        <Button
          variant="primary"
          onClick={() => addNum(props.values, props.values2)}
        >
          Add +
        </Button>
        <Button
          variant="info"
          onClick={() => subtractNum(props.values, props.values2)}
        >
          Subtract -
        </Button>
        <Button
          variant="light"
          onClick={() => multiplyNum(props.values, props.values2)}
        >
          Multiply *
        </Button>
        <Button
          variant="danger"
          onClick={() => divideNum(props.values, props.values2)}
        >
          Divide /
        </Button>
      </ButtonGroup>
      <br />
      <h1>{value > 0 ? value : ""}</h1>
    </div>
  );
};

export default Calculate;
