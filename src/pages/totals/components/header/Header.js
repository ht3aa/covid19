import "./Header.css"
import corona19 from "../../../../assets/imgs/corona19.png";
import corona19bg from "../../../../assets/imgs/corona19bg.png";

const Header = () => {


    const corona19bgArr = [];
    const corona19bgAmmount = 14;

    for(let i = 0; i < corona19bgAmmount; i++) {
        corona19bgArr.push(
            <img src={ corona19bg } style={{
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
            }} className="corona19bg"  alt="corona19 background" key={i}/>
        );
    }

    return (
        <div className="heroTotals">
            <div className="corona19bgContainer">
                {corona19bgArr.map((corona19bg) => {
                    return corona19bg;
                })}
            </div>
            <div className="corona19">
                <img src={ corona19 } alt="corona19" />
            </div>
            <div className="mainContent">
                <table>
                    <thead>
                        <tr>
                            <td colSpan={2}><h1>العراق</h1></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className="head"><h4>الأصابات</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <h4 className="head2">اليومي</h4>
                                    <h2>2000</h2>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 className="head2">التراكمي</h4>
                                    <h2>200000</h2>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="head"><h4>الملقحين</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <h4 className="head2">اليومي</h4>
                                    <h2>2000000</h2>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 className="head2">التراكمي</h4>
                                    <h2>2000000</h2>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <h4 className="head2 border">الشفاء</h4>
                                    <h2>2000</h2>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 className="head2 border">الوفيات</h4>
                                    <h2>2000</h2>
                                </div>
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Header