import { useState } from "react";
import "./MainVaccien.css";

const MainVaccien = () => {
    const vaccineCards = [];
    const [vaccineCardsAmmount, setVaccineCardsAmmount] = useState(7);

    function displayMoreCards() {
        setVaccineCardsAmmount(vaccineCardsAmmount + 7);
    }
    
    for(let i = 0; i < vaccineCardsAmmount; i++) {
        vaccineCards.push(
            <div className="cardVaccienContainer">
                <h3>اسم المستشفى</h3>
                <div className="cardVaccien">
                    <div className="tableHead">
                        <h4>نوع اللقاح</h4>
                        <h4>التوفير</h4>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td><h5>فايزر</h5></td>
                                <td  className="vaccienActive"><h5>متوفر</h5></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>B</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button><h4>أحجز</h4></button>
            </div>
        )
    }

    return (
        <div className="mainVaccienConatiner">
            <div className="mainVaccien">
                {vaccineCards.map((card, key) => {
                    return card
                })}
            </div>
            <button onClick={displayMoreCards} className="center"><h4>المزيد</h4></button>
        </div>
    )
}

export default MainVaccien;