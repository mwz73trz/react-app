import { useState } from "react";
import Calculate from "../components/Calculate";
import { Form } from "react-bootstrap";

const Calculator = () => {
  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);

  const handleSubmit = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit2 = (e) => {
    setCount2(e.target.value);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <Form style={{ width: "10%", marginLeft: "45%" }}>
        <Form.Group className="mb-3" controlId="count">
          <Form.Control
            onChange={(e) => handleSubmit(e)}
            value={count ? count : ""}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="count2">
          <Form.Control
            onChange={(e) => handleSubmit2(e)}
            value={count2 ? count2 : ""}
            type="number"
          />
        </Form.Group>
        <Calculate values={count ? count : ""} values2={count2 ? count2 : ""} />
      </Form>
    </div>
  );
};

export default Calculator;
