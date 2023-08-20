import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
function App() {
  return (
    <div className="App">
       <h1>Hello World</h1>
      <Greeting name="Priyanka" />
      <FunctionalComponent/>
      <ClassComponent/>
    </div>
  );
}

export default App;
