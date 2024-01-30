import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star({ IconsNumber }) {
  const [current, setCurrent] = useState(-1);
  const [selected, setSelected] = useState(-1);
  const [move , setMove] = useState(true);

  function mouseMovee(i) {
    if (current !== i && move) {
      setCurrent(i);
    }
  }

  function select() {
    setMove(!move);

    setSelected(current);
  }

  function StyleCondition(index) {
    if (index <= current) {
      return { color: "yellow" };
    }
    else {
        console.log(current);
      return { color: "white" };
    }
  }

  return (
    <div style={{border:"solid"}}>
      {[...Array(IconsNumber)].map((_, index) => {
        return (
          <FaStar
            style={StyleCondition(index)}
            key={index}
            size="5em"
            onMouseMove={() => mouseMovee(index)}
            onClick={() => select()}
          />
        );
      })}
    </div>
  );
}

export default Star;
