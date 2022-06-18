import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const setStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={setStyle}>{props.message}</p>;
};

export default ColorfulMessage;
