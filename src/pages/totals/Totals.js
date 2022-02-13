import Header from "./components/header/Header";

const Totals = ({statisticsData}) => {
    return (
        <div className="totals">
            <Header statisticsData={statisticsData} />
        </div>
    )
}

export default Totals;