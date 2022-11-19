import React, { useRef, useState } from "react";
import propTypes from "prop-types";

const SearchBar = ({onSubmit}) => {
  //const [text, setText] = useState("");
  // const text = useRef("");
  const textBox = useRef();
  return (
    <div className="ui segment">
      <form
        role="search"
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(textBox.current.value);
          onSubmit(textBox.current.value)
        }}
      >
        <div className="field">
          <label>Animal Search</label>
          <input
            ref={textBox}
            type="text"
            autoFocus
            // onChange={(e) => (text.current = e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired
}

export default SearchBar;
