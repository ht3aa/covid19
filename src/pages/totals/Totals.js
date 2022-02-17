import Header from "./components/header/Header";

const Totals = ({statisticsData, vaccineData}) => {
    return (
        <div className="totals">
            <Header statisticsData={statisticsData} vaccineData={vaccineData} />
        </div>
    )
}

export default Totals;