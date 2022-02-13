import corona19bg from "../assets/imgs/corona19bg.png";

function generateCorona19BgImg(corona19bgAmmount) {
    let corona19bgArr = [];

    for(let i = 0; i < corona19bgAmmount; i++) {
        corona19bgArr.push(
            <img src={ corona19bg } style={{
                // generate random values for left and top properties
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
            }} className="corona19bg"  alt="corona19 background" key={i}/>
        );
    }
    
    return corona19bgArr;
}

export default generateCorona19BgImg;