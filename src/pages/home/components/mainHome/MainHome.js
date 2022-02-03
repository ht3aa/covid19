import "./MainHome.css";
import corona19MainHome from "../../../../assets/imgs/corona19MainHome.png";
import corona19bg from "../../../../assets/imgs/corona19bg.png";
import vaccine from "../../../../assets/imgs/vaccine.png";
import protection from "../../../../assets/imgs/protection.png";


const MainHome = () => {

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
        <div className="mainHome">
            <img style={{ order: 1 }} className="left" src={ corona19MainHome } alt="corona19 Main Home"/>
            <div style={{ order: 2 }} className="content right">
                <h2>(19فيروس كورونا (كوفيد</h2>
                <h5>
                    مرض فيروس كورونا 2019 (COVID-19) هو مرض معد يسببه فيروس كورونا 2 المتلازمة التنفسية الحادة الوخيمة (SARS-CoV-2). تم التعرف على أول حالة معروفة في ووهان ، الصين ، في ديسمبر 2019. [7] انتشر المرض منذ ذلك الحين في جميع أنحاء العالم ، مما أدى إلى جائحة مستمر.
                    تتنوع أعراض مرض كوفيد -19 ، ولكنها غالبًا ما تشأربعة عشر يومًا بعد التعرض للفيروس. [14] على ا               
                </h5>
            </div>
            <div style={{ order: 3}} className="span2 list">
                {corona19bgArr.map((corona19bg) => {
                    return corona19bg
                })}
                <h3>مرض معدي</h3>
                <div className="cardContainer">
                    <div className="card">
                        <div className="itemNumber">
                            <h3>3</h3>
                        </div>
                        <h4>ينتقل عبر الهواء</h4>
                        <h5>يستطيع الفيروس أن يتنقل عن طريق القطيرات الصغيرة التي يفرزها جسد الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم, عندما يسعل أو يعطس أو يتكلم.</h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>2</h3>
                        </div>
                        <h4>ينتقل عبر الهواء</h4>
                        <h5>يستطيع الفيروس أن يتنقل عن طريق القطيرات الصغيرة التي يفرزها جسد الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم, عندما يسعل أو يعطس أو يتكلم.</h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>1</h3>
                        </div>
                        <h4>ينتقل عبر الهواء</h4>
                        <h5>يستطيع الفيروس أن يتنقل عن طريق القطيرات الصغيرة التي يفرزها جسد الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم, عندما يسعل أو يعطس أو يتكلم.</h5>
                    </div>
                </div>
            </div>
            <img className="left order4" src={ vaccine } alt="vaccine"/>
            <div className="content right order5">
                <h2>(19فيروس كورونا (كوفيد</h2>
                <h5>
                    مرض فيروس كورونا 2019 (COVID-19) هو مرض معد يسببه فيروس كورونا 2 المتلازمة التنفسية الحادة الوخيمة (SARS-CoV-2). تم التعرف على أول حالة معروفة في ووهان ، الصين ، في ديسمبر 2019. [7] انتشر المرض منذ ذلك الحين في جميع أنحاء العالم ، مما أدى إلى جائحة مستمر.
                    تتنوع أعراض مرض كوفيد -19 ، ولكنها غالبًا ما تشأربعة عشر يومًا بعد التعرض للفيروس. [14] على ا                
                </h5>
                <button><h4>اللقاحات</h4></button>
            </div>
            <img style={{ order: 6 }} className="left" src={ protection } alt="protection"/>
            <div style={{ order: 7 }} className="content right">
                <h2>(19فيروس كورونا (كوفيد</h2>
                <h5>
                    مرض فيروس كورونا 2019 (COVID-19) هو مرض معد يسببه فيروس كورونا 2 المتلازمة التنفسية الحادة الوخيمة (SARS-CoV-2). تم التعرف على أول حالة معروفة في ووهان ، الصين ، في ديسمبر 2019. [7] انتشر المرض منذ ذلك الحين في جميع أنحاء العالم ، مما أدى إلى جائحة مستمر.
                    تتنوع أعراض مرض كوفيد -19 ، ولكنها غالبًا ما تشأربعة عشر يومًا بعد التعرض للفيروس. [14] على ا                
                </h5>
                <button><h4>اللقاحات</h4></button>
            </div>
            <div style={{ order: 8 }} className="span2 list">
                {corona19bgArr.map((el, index) => {
                    return (
                    <img src={ corona19bg } style={{
                        left: `${Math.floor(Math.random() * 100)}%`,
                        top: `${Math.floor(Math.random() * 100)}%`,
                    }} className="corona19bg"  alt="corona19 background" key={ index }/>
                    )
                })}
                <h3>الوقاية</h3>
                <div className="cardContainer">
                    <div className="card">
                        <div className="itemNumber">
                            <h3>3</h3>
                        </div>
                        <h4>ينتقل عبر الهواء</h4>
                        <h5>يستطيع الفيروس أن يتنقل عن طريق القطيرات الصغيرة التي يفرزها جسد الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم, عندما يسعل أو يعطس أو يتكلم.</h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>2</h3>
                        </div>
                        <h4>ينتقل عبر الهواء</h4>
                        <h5>يستطيع الفيروس أن يتنقل عن طريق القطيرات الصغيرة التي يفرزها جسد الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم, عندما يسعل أو يعطس أو يتكلم.</h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>1</h3>
                        </div>
                        <h4>ينتقل عبر الهواء</h4>
                        <h5>يستطيع الفيروس أن يتنقل عن طريق القطيرات الصغيرة التي يفرزها جسد الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم, عندما يسعل أو يعطس أو يتكلم.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome