import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(false);
  const onClickCountUp = () => setNum(num + 1);
  const faceSwtch = () => setFaceFlag(!faceFlag);

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceSwtch || setFaceFlag(true);
      } else {
        faceSwtch && setFaceFlag(false);
      }
    }
    //  eslint-disable-next-line
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">朝です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={faceSwtch}>on/off</button>
      <p>{num}</p>
      {faceFlag && <p>^_^</p>}
    </>
  );
};

export default App;
