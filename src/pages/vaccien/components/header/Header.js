import "./Header.css";
import corona19bg from "../../../../assets/imgs/corona19bg.png";

const Header = () => {
    const filtersCities = [
    "صلاح الدين", 
    "القادسية", 
    "بابل",
    "الأنبار",
    "ميسان", 
    "أربيل",
    "بغداد",
    "البصرة", 
    "حلبجة",
    "دهوك",
    "القادسية", 
    "ديالى",
    "ذي قار",
    "السليمانية", 
    "كركوك",
    "كربلاء",
    "المثنى", 
    "النجف",
    "نينوى",
    "واسط", 
];

    const corona19bgArr = [];
    const corona19bgAmmount = 7;

    for(let i = 0; i < corona19bgAmmount; i++) {
        corona19bgArr.push(
            <img src={ corona19bg } style={{
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
            }} className="corona19bg"  alt="corona19 background" key={i}/>
        );
    }

    return (
        <div className="heroVaccien">
            <div className="corona19bgContainer">
                {corona19bgArr.map((corona19bg) => {
                    return corona19bg;
                })}
            </div>
            <form className="formVaccien">
                <div className="inputContainer">
                    <label htmlFor="city">أسم المدينة</label>
                    <input id="city" type="text" placeholder="ادخل اسم المدينة" />
                </div>
                <button><p>ابحث</p></button>
            </form>
            <ul className="filters">
                {filtersCities.map((city, key) => {
                    return (
                        <li key={key}><h5>{ city }</h5></li>
                    )
                })}
            </ul>
            <div className="map"></div>
        </div>
    )
}

export default Header;