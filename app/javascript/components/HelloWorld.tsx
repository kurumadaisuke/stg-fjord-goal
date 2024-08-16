import React from "react"
import PropTypes from "prop-types"

const HelloWorld = (props) => {
  return (
    <div className='flex items-center justify-center'>
      <React.Fragment>{props.greeting}</React.Fragment>
    </div>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
