import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeNavBarBgColor } from "../../redux/features/setNavBarBgColor/setNavBarBgColor";
import "./AboutUs.css";

const AboutUs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeNavBarBgColor('radial-gradient(110.76% 436.38% at -8.47% -10.89%, #000000 0%, #BD0005 100%)'));
    })

    return (
        <div className="aboutUs">
            <h1>شرح عن الموقع</h1>
            <p>
                ساتحدث في مشروعي عن ما هو مرض فايروس كورونا وما هي الاعراض التي ستضهر على
                المصاب والعلاج وطريقة الوقاية . والجزء الاهم هو ما هي انواع اللقاحات المستخدمه والمتاحه
                في كل محافظات العراق ومنها بغداد مع اظهار نسبة المصابين وحالات الشفاء والوفيات
                وطريقة الحجز لتلقي اللقاح.
            </p>
            <div className="contact">
                <a href="https://www.facebook.com/beshooo99" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/1bcv_" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://t.me/Br_99" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
            </div>
            <footer></footer>
        </div>
    )
}

export default AboutUs;