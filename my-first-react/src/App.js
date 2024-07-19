import logo from "./logo.svg";
import "./App.css";

function App() {
  // return accepts only one element
  return (
    <>
    <div>Welcome to React</div>
    <Heading />
    <List />
    </>
  );
}

export default App;

function Heading(){
  return <h1>Bollywood Celebrities</h1>;
}

function List(){
  return(
    <ul>
      <li>Shahid Kapoor</li>
      <li>Alia Bhatt</li>
    </ul>
  );
}