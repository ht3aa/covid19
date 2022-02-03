import "./NavBar.css";
import { makeItActive } from "./functions/makeItActive";
import React, { useRef, useState } from "react";
import { startHamAnimation, removeHamAnimation } from "./functions/makeHamAnimation";
import { Link } from "react-router-dom";


const NavBar = () => {
    const hamIconDivElement = useRef(null);
    const [startAnimation, setStartAnimation] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [bgColor, setBgColor] = useState("none");
    const [showUpButton, setShowUpButton] = useState(false);

    document.addEventListener("scroll", () => {
        if(parseInt(window.scrollY) >= 450) {
            setShowUpButton(true);
            setBgColor("radial-gradient(110.76% 436.38% at -8.47% -10.89%, #000000 0%, #BD0005 100%)")
        } else {
            setShowUpButton(false);
            setBgColor("none")
        }
    })
    return (
        <nav style={{ background: bgColor }}>
            <Link to="/aboutUs"><h5>من نحن؟</h5></Link>
            <ul 
                onClick={(e) => {
                    makeItActive(e.target);
                }}
            >
                <Link to="/totals"><li><p>المعدل الأجمالي</p></li></Link>
                <Link to="vaccien"><li><p>اللقاحات</p></li></Link>
                <Link to="/"><li><p>الصفحة الرئيسية</p></li></Link>
                
            </ul>
            <div ref={hamIconDivElement} className="hamIconContainer" 
                onClick={() => {
                    startAnimation ? startHamAnimation(hamIconDivElement) : removeHamAnimation(hamIconDivElement);
                    setShowMenu(!showMenu);
                    setStartAnimation(!startAnimation);
                }}
            >
                <div className="mainBar"></div>
            </div>
            {showMenu && <div className="nav-small">
                <ul 
                    onClick={(e) => {
                        makeItActive(e.target);
                    }}
                >
                    <Link to="/totals"><li><p>المعدل الأجمالي</p></li></Link>
                    <Link to="vaccien"><li><p>اللقاحات</p></li></Link>
                    <Link to="/"><li><p>الصفحة الرئيسية</p></li></Link>
                </ul>    
            </div>}

            {showUpButton && <button onClick={() => {
                window.scroll(0, 0)
            }} className="upButton">
                <i className="fas fa-chevron-up"></i>
            </button>}
        </nav>
    )
}

export default NavBar;