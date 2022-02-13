import "./Header.css";
import 'mapbox-gl/dist/mapbox-gl.css'
import { makeItActiveFilters } from "../../functions/makeItActiveFilters";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterByProvinceName, filterBySectorName, filterByCenterName } from "../../../../redux/features/cities/cities";
import { useState } from "react";
import Map, {Marker} from 'react-map-gl';


const Header = () => {
    const filtersCitiesCards = ["صلاح الدين", "القادسية", "بابل","الأنبار","ميسان", "أربيل","بغداد","البصرة", "حلبجة","دهوك","القادسية", "ديالى","ذي قار","السليمانية", "كركوك","كربلاء","المثنى", "النجف","نينوى","واسط"];

    const dispatch = useDispatch();
    const cities = useSelector(state => state.cities.filteredData);
    const sectorsNames = useSelector(state => state.cities.sectorsNames);
    const provincesNames = useSelector(state => state.cities.provincesNames);


    const [viewPort, setViewPort] = useState({
        latitude: 33.67205533793762,
        longitude: 44.36276027304393,
        width: "100%",
        height: "100%",
        zoom: 4 
    })

    function search(e) {
        e.preventDefault()
        const inputValue = document.querySelector("#search").value;
    
        dispatch(filterByCenterName(inputValue));
    
        sectorsNames.forEach((el) => {
            if(inputValue === el) {
                dispatch(filterBySectorName(inputValue));
                return;
            }            
        })
        provincesNames.forEach((el) => {
            if(inputValue === el) {
                dispatch(filterByProvinceName(inputValue));
                return;
            }            
        })
    
    }

    function searchByFilters(filterText) {
        dispatch(filterByProvinceName(filterText));
    }

    function getCoordinates() {
        let markersArr = [];

        let citiesNames = Object.keys(cities);

        for(let i = 0; i < citiesNames.length ; i++) {
            let centersData = Object.keys(cities[citiesNames[i]]);  
            
            if(centersData.includes("name")) centersData.shift();

            for(let j = 0; j < centersData.length; j++) {

                markersArr.push(
                    <Marker key={cities[citiesNames[i]][centersData[j]].center_name} longitude={cities[citiesNames[i]][centersData[j]].center_lng} latitude={cities[citiesNames[i]][centersData[j]].center_lat} color="red"  > 
                    </Marker>
                )
                
            }
        }
        return markersArr;
    }


    return (
        <div className="heroVaccien">
            <form className="formVaccien">
                <div className="inputContainer">
                    <label htmlFor="search">اسم المدينة / القطاع / المركز</label>
                    <input id="search" type="text" placeholder="ادخل هنا" />
                </div>
                <button  onClick={(e) => {
                    search(e);
                    makeItActiveFilters(e.target);
                }}><p>ابحث</p></button>
            </form>
            <label style={{ color: "white", marginTop: "10px"}}>{Object.keys(cities).length && "هنالك نتائج" }  {!Object.keys(cities).length && "لاتوجد نتائج"}</label>
            <ul className="filters" onClick={(e) => {
                makeItActiveFilters(e.target);
                if(e.target.nodeName === "LI") {

                    searchByFilters(e.target.children[0].innerText);
                }
            }}>
                {filtersCitiesCards.map((city, key) => {
                    return (
                        <li key={key}><h5>{ city }</h5></li>
                    )
                })}
            </ul>

            <div className="map">
                <Map
                {...viewPort}
                mapboxAccessToken="pk.eyJ1IjoiZGV2aGFzc2FuMjAwMSIsImEiOiJja3pmeXk0czYwdzR5Mm9vYzQzeXE5anNxIn0.tsC3fhNkHr3udqBJt8zGeg"
                mapStyle="mapbox://styles/devhassan2001/ckzh2z04900al14vso0622yxt"
                onMove={evt => setViewPort(evt.viewState)}
                > 
                    {getCoordinates().map(el => {

                        return el
                    })}
                </Map>
            </div>
        </div>
    )
}

export default Header;