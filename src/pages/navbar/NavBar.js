import "./NavBar.css";
import { makeItActive } from "./functions/makeItActive";
import React, { useRef, useState } from "react";
import { startHamAnimation, removeHamAnimation } from "./functions/makeHamAnimation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeNavBarBgColor } from "../../redux/features/setNavBarBgColor/setNavBarBgColor";


const NavBar = () => {
    const dispatch = useDispatch();
    const bgColor = useSelector(staet => staet.navBarBgColor.value);
    const hamIconDivElement = useRef(null);
    const [startAnimation, setStartAnimation] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [showUpButton, setShowUpButton] = useState(false);

    function removeMenu() {
        setShowMenu(false);
        setStartAnimation(true);
        removeHamAnimation(hamIconDivElement)
    }

    document.addEventListener("scroll", () => {
        if(parseInt(window.scrollY) >= 450) {
            setShowUpButton(true);
            dispatch(changeNavBarBgColor(("radial-gradient(110.76% 436.38% at -8.47% -10.89%, #000000 0%, #BD0005 100%)")))
        } else {
            setShowUpButton(false);
        }
    })

    return (
        <nav style={{ background: bgColor }}  
                onClick={(e) => {
                    makeItActive(e.target);
                }} 
            >
            <Link to="/aboutUs"><h5 onClick={removeMenu}>من نحن؟</h5></Link>
            <ul 
            >
                <Link to="/totals"><li><p>المعدل الأجمالي</p></li></Link>
                <Link to="vaccien"><li><p>اللقاحات</p></li></Link>
                <Link to="/"><li><p className="active">الصفحة الرئيسية</p></li></Link>
                
            </ul>
            <div className="hamIconContainer" ref={hamIconDivElement}
                onClick={() => {
                    startAnimation ? startHamAnimation(hamIconDivElement) : removeHamAnimation(hamIconDivElement);
                    setShowMenu(!showMenu);
                    setStartAnimation(!startAnimation);
                }}
            >
                <div className="mainBar"></div>
            </div>
            {showMenu && <div className="nav-small">
                <ul onClick={removeMenu}>
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