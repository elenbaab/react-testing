import { useState } from "react";
import "./MenuComponent.css";
import { Icon } from "@iconify/react";

export function MenuComponent() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <>
      <div className="menu-component-container">
        <div className="menu-display-button">
          <button onClick={toggleDisplayMenu}>
            <Icon icon="ion:menu" width="50" color="orange" />
          </button>
        </div>

        {displayMenu && (
          <ul className="menu_list">
            <li>Item_1</li>
            <li>Item_2</li>
            <li>Item_3</li>
          </ul>
        )}
      </div>
    </>
  );
}
