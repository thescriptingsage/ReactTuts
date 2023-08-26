function MyButton(){
  const handleClick=() => {
    alert("I am clicked");
  }

  const handleMouseMove = (event) => {
    console.log(`Mouse position X - ${event.clientX} Y - ${event.clientY}`);
  }
  return (<div style={{height: "300px", width: "400px", background: "red", margin: "0 auto"}} onMouseLeave={handleMouseMove}><button onClick={handleClick}>Click Me</button></div>);
}

export default MyButton;