import { useState } from "react";
import "./ButtonComponent.css";

export function ButtonComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="button_component_container">
        <div className="button_component_count">
          <h2>{count}</h2>
        </div>
        <div className="button_component_increment_button">
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
      </div>
    </>
  );
}
