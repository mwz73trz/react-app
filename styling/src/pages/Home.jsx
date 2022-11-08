import "../App.css";
import { ListGroup, NavLink } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="home-content">
        <div className="home-1">
          <h1>List Group</h1>
          <ListGroup as="ol" numbered>
            <NavLink>
              <ListGroup.Item as="li">Entry 1</ListGroup.Item>
            </NavLink>
            <NavLink>
              <ListGroup.Item as="li">Entry 2</ListGroup.Item>
            </NavLink>
            <NavLink>
              <ListGroup.Item as="li">Entry 3</ListGroup.Item>
            </NavLink>
            <NavLink>
              <ListGroup.Item as="li">Entry 4</ListGroup.Item>
            </NavLink>
          </ListGroup>
        </div>
        <div className="home-2">Number 2</div>
        <div className="home-3">Number 3</div>
      </div>
    </div>
  );
};

export default Home;
