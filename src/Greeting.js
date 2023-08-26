function Greeting(props) {
  return (
    <div className="App">
     <h1>Hello {props.name}</h1>
     <button onClick={props.handleClick}>Click Me</button>
    </div>
  );
}

export default Greeting;
