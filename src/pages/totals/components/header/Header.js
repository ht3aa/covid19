import "./Header.css"
import corona19 from "../../../../assets/imgs/corona19.png";
import generateCorona19BgImg from "../../../../globalFunctions/generateCorona19BgImg";
import { useEffect, useState } from "react";
import { filtersStaticsData } from "../../functions/filtersStaticsData";

const Header = ({statisticsData}) => {
    const [data, setData] = useState({
        todayInjured: "",
        totalInjured: "",
        totalHealing: "",
        totalDeaths: "",
    })

    useEffect(() => {
        if(statisticsData) {
            setData(filtersStaticsData(statisticsData));
        }
    }, [statisticsData])

    
    return (
        <div className="heroTotals">
            <div className="corona19bgContainer">
                {generateCorona19BgImg(10).map((corona19bgImg) => {
                    return corona19bgImg;
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
                                    <h2>{ data.todayInjured }</h2>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 className="head2">التراكمي</h4>
                                    <h2>{ data.totalInjured }</h2>
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
                                    <h2>0</h2>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 className="head2">التراكمي</h4>
                                    <h2>0</h2>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <h4 className="head2 border">الشفاء</h4>
                                    <h2>{ data.totalHealing }</h2>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 className="head2 border">الوفيات</h4>
                                    <h2>{ data.totalDeaths }</h2>
                                </div>
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Header;