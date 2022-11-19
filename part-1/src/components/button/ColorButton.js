import React,{useState} from "react";

const ColorButton = () => {
    const [buttonColor,setButtonColor] = useState("red")
    const newButtonColor = buttonColor === "red" ? "blue" :"red"
    const click = () =>{
        setButtonColor(newButtonColor)
    }
  return (
    <div>
      <button
        className="ui button"
        style={{ backgroundColor:buttonColor }}
        onClick={click}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
};

export default ColorButton;
