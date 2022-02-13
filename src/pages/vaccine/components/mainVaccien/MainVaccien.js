import { useState } from "react";
import { useSelector } from "react-redux";
import "./MainVaccien.css";
import hospitalBgImg from "../../../../assets/imgs/hospitalBgImg.jpg";

const MainVaccien = () => {

    const vaccineCards = [];
    const [vaccineCardsAmmount, setVaccineCardsAmmount] = useState(6);
    let cardCounter = 0;
    
    const centers = useSelector(state => state.cities.filteredData);
    let centersLength = Object.keys(centers).length;


    function displayMoreCards() {
        setVaccineCardsAmmount(vaccineCardsAmmount + 6);
    }
    
    for(let i = 1; i <= centersLength; i++) {

        // if(centers[`city_${i}`] === undefined ) {
        //     centersLength++;
        //     continue;
        // } else {
        // }

        let centerKeys = Object.keys(centers[`city_${i}`]);


        if(centerKeys[0] === "name") {
            centerKeys.shift();
        }

        for(let j = 0; j < centerKeys.length; j++) {
            vaccineCards.push(
                <div className="cardVaccienContainer" key={centers[`city_${i}`][centerKeys[j]].center_name}>
                    <h3>{ centers[`city_${i}`][centerKeys[j]].center_name }</h3>
                    <div className="cardVaccien">
                        <div className="bg-shadow"></div>
                        <img src={hospitalBgImg} alt="hospital img" />
                        <div className="positionUp">
                            <div className="tableHead">
                                <h4>نوع اللقاح</h4>
                                <h4>التوفير</h4>
                            </div>
                            <table>
                                <tbody>
                                    { centers[`city_${i}`][centerKeys[j]].vince_avilable.map((el, index) => {

                                        return (
                                            <tr key={index}>
                                                <td><h5>{ el }</h5></td>
                                                <td  className="vaccienActive"><h5>متوفر</h5></td>
                                            </tr>
                                        )
                                    }) }

                                </tbody>
                            </table>
                            <p className="discription">الدوام: {centers[`city_${i}`][centerKeys[j]].work_time } </p>
                            <p className="discription">العطلة: {centers[`city_${i}`][centerKeys[j]].close_day }</p>
                        </div>
                    </div>
                    <a href="https://cov19reg.phd.iq/forma1.aspx" target="_blank" rel="noreferrer"><button><h4>أحجز</h4></button></a>
                </div>
            )
        }
    }

    return (
        <div className="mainVaccienConatiner">
            <div className="mainVaccien">
                {vaccineCards.map((card) => {
                    if(cardCounter === vaccineCardsAmmount) return false;
                    else {
                        cardCounter++;
                        return card;
                    }
                })}
            </div>
            {!(cardCounter === vaccineCards.length) && <button onClick={displayMoreCards} className="center"><h4>المزيد</h4></button>}
        </div>
    )
}

export default MainVaccien;