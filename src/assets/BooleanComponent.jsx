import { useState, useEffect } from "react";
import "./BooleanComponent.css";

export function BooleanComponent() {
  const [isTrue, setIsTrue] = useState(true);
  const toggleBoolean = () => {
    setIsTrue(!isTrue);
  };

  //

  return (
    <>
      <div className="boolean_component_container">
        <div className={isTrue ? "test-true" : "test-false"}>
          <h2>{isTrue ? "True" : "False"}</h2>
        </div>
        <div className="boolean_component_change_button">
          <button onClick={toggleBoolean}>Change Value</button>
        </div>
      </div>
    </>
  );
}
