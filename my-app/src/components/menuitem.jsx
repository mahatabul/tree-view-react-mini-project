import { useState } from "react";
import MenuList from "./menulist";
import './style.css'



function MenuItem({ item }) {
    const [show, setShow] = useState(false);
    const hasChildren = item.children && item.children.length > 0;  // Derived state

    function handleShow() {
        setShow(prev => !prev);
    }

    return (
        <div className="menu-item-container">
            <li className="menu-item">
                <span className="menu-item-content">
                    {item.path ? (
                        <a href={item.path} className="links">{item.name}</a>
                    ) : (
                        <span>{item.name}</span>
                    )}
                    
                    {hasChildren && (
                        <button onClick={handleShow} className="btn">
                            {show ? '−' : '+'}
                        </button>
                    )}
                </span>
                
                {show && hasChildren && (
                    <MenuList list={item.children} />
                )}
            </li>
        </div>
    );
}

export default MenuItem;