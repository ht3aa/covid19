import "./Header.css";
import corona19 from "../../../../assets/imgs/corona19.png";
import { Link } from "react-router-dom";
import { makeItActive } from "../../../navbar/functions/makeItActive";

const Header = () => {
    return (
        <div className="homeHero">
            <div className="corona19">
                <img src={ corona19 } alt="corona19" />
            </div>
            <div className="mainContent">
                <h1>سوف نساعدك في الحصول على اللقاح ضد covid19</h1>
                <h4>كورونا مرض خطير. من الواجب الحذر منة و اخذ اللقاح و الأحتياطات اللازمة و هذا الذي نوفره لك.</h4>
                <Link to="vaccine">
                    <button onClick={(e) => {
                            makeItActive(e.target);
                        }}>
                        <h4>اللقاحات</h4>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header;