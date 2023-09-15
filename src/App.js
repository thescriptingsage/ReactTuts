import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import MyButton from './MyButton';
function App() {
  const handlePreventDefault = (event) => {
    event.preventDefault();
    alert("I am clicked");
  };

  const handleClickFromParent = () => {
    alert("Hello World");
  };

  const handleDivClick = () => {
    alert("Click from Div");
  }

  return (
    <div className="App">
       
       <h1>Hello World</h1>
      <Greeting name="Priyanka" handleClick={handleClickFromParent}/>
      <FunctionalComponent/>
      <ClassComponent/>
      <MyButton/>
    
      <div onClick={handleDivClick}>
        <a href="http://www.google.com" onClick={handlePreventDefault}>Click Me</a>
      </div>
    </div>
  );
}

export default App;
