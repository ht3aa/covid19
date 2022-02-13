import "./MainHome.css";
import corona19MainHome from "../../../../assets/imgs/corona19MainHome.png";
import vaccine from "../../../../assets/imgs/vaccine.png";
import protection from "../../../../assets/imgs/protection.png";
import { Link } from "react-router-dom";
import { makeItActive } from "../../../navbar/functions/makeItActive";
import generateCorona19BgImg from "../../../../globalFunctions/generateCorona19BgImg";

const MainHome = () => {

    return (
        <div className="mainHome">
            <img style={{ order: 1 }} className="left" src={ corona19MainHome } alt="corona19 Main Home"/>
            <div style={{ order: 2 }} className="content right">
                <h2>فايروس كورونا</h2>
                <h5>
                    يُعرَف الفيروس باسم فيروس المتلازمة التنفسية الحادة الوخيمة كورونا 2 (سارس-كوف- 2)
                    ويُسمَّى المرض الناتج عنه مرض فيروس كورونا المستجد 2019 (كوفيد 19). في مارس
                    2020 ، أعلنت منظمة الصحة العالمية أن فيروس كورونا (كوفيد 19) قد أصبح جائحة عالمية. الأعراض:
                    الحمى, السعال, الشعور بالتعب, فقدان حاسة الشم أو التذوق.              
                </h5>
            </div>
            <div style={{ order: 3}} className="span2 list">
                {generateCorona19BgImg(10).map((corona19bgImg) => {
                    return corona19bgImg;
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
                        <h4>المصافحة</h4>
                        <h5>.المصافحة هي أحدى الطرق التي تؤدي الى اصابتك بالفيروس, لذلك تجنب المصافحة و أكتفي بألقاء التحية عن بعد مسافة لا تقل عن 1 متر. أغسل يديك بالماء والصابون </h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>1</h3>
                        </div>
                        <h4>لمس الاشياء</h4>
                        <h5>وقد تحط هذه القطيرات التي يفرزها الشخص المصاب ب كوفيد-19 عن طريق ألانف أو الفم على الاشياء وألاسطح المحيطة بالشخص, مثل ألاطعمة, الطاولات.</h5>
                    </div>
                </div>
            </div>
            <img className="left order4" src={ vaccine } alt="vaccine"/>
            <div className="content right order5">
                <h2>علاج</h2>
                <h5>
                    قد يفيد لقاح كوفيد 19 في تحقيق ما يلي:

                    يقيك من الإصابة بكوفيد 19 أو من الإصابة بمرض خطير أو الوفاة بسبب كوفيد 19.
                    الحيلولة دون نقل فيروس كوفيد 19 للآخرين.
                    يزيد عدد أفراد المجتمع المحصّنين من الإصابة بكوفيد 19 - مما يُبطء انتشار المرض ويساهم في المناعة الجماعية (ما يُسمى مناعة القطيع).
                    مَنْع الفيروس المسبب لكوفيد 19 من الانتشار والتناسُخ، وهما العمليتان اللتان تسمحان له بتكوين طفرة قد تكون أقدر على مقاومة اللقاحات.                
                </h5>
                <Link to="vaccine"><button onClick={(e) => {
                    makeItActive(e.target);
                }}><h4>اللقاحات</h4></button></Link>
            </div>
            <img style={{ order: 6 }} className="left" src={ protection } alt="protection"/>
            <div style={{ order: 7 }} className="content right">
                <h2>الوقاية</h2>
                <h5>
                    صرحت إدارة الغذاء والدواء الأمريكية بالاستخدام الطارئ لبعض لقاحات كوفيد 19 داخل الولايات المتحدة. فقد اعتمدت إدارة الغذاء والدواء الأمريكية استخدام لقاح فايزر-بيونتك المضاد لفيروس كوفيد 19، الذي أصبح يُعرف باسم كوميرناتي، لوقاية الأشخاص الذين تبلغ أعمارهم 16 عامًا أو أكثر من الإصابة بمرض كوفيد 19. ويمكن أن تقيك اللقاحات من الإصابة بمرض كوفيد 19 أو تحميك من التعرض للمضاعفات الخطيرة عند الإصابة بمرضكوفيد 19.
                </h5>
                <Link to="vaccine"><button onClick={(e) => {
                    makeItActive(e.target);
                }}><h4>اللقاحات</h4></button></Link>
            </div>
            <div style={{ order: 8 }} className="span2 list">
                {generateCorona19BgImg(10).map((corona19bgImg) => {
                    return corona19bgImg;
                })}
                <h3>الوقاية</h3>
                <div className="cardContainer">
                    <div className="card">
                        <div className="itemNumber">
                            <h3>3</h3>
                        </div>
                        <h4>ارتداء القناع الطبي (الكمامة)</h4>
                        <h5>يجب ارتداء القناع الطبي عند مغادرة المنزل أو أثناء وجودك في المنطقة التجارية للتسوق ، وكذلك في وسائل النقل ، لأن ارتداء القناع الطبي يساعد على وقف انتشار الفيروس</h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>2</h3>
                        </div>
                        <h4>غسل اليدين باستمرار</h4>
                        <h5>يجب غسل اليدين وبانتظام وبمدة 25 ثانية على الاقل باستخدام مواد التنظيف والمعقمات لان مواد التنظيف الكيميائية تساعد في قتل فيروس كورونا.</h5>
                    </div>
                    <div className="card">
                        <div className="itemNumber">
                            <h3>1</h3>
                        </div>
                        <h4>استخدام المناديل الورقية</h4>
                        <h5>تجنب ملامسة عينيك او انفك او فمك ويديك غير النظيفتين, يفضل استخدام المناديل الورقية عند لمس وجهك او العطاس لتجنب انتشار فيروس كورونا.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome;