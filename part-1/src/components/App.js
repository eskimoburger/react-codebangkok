import React from "react";

import PropTypes from 'prop-types'

const App = ({ name,age }) => {
  return <h1>App dsd {name} {age}</h1>;
};

App.defaultProps = {
    name: 'app',
    age:0
}
App.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired

}

export default App;
