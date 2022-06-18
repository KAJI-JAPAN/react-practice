import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const setStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={setStyle}>{children}</p>;
};

export default ColorfulMessage;
